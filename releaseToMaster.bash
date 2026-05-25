#!/bin/bash

#
# Copyright (c) wink.travel 2024
#

set -euo pipefail

MAIN_BRANCH="master"

# --- Guards ---

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current_branch" != "$MAIN_BRANCH" ]]; then
  echo "ERROR: You must be on '$MAIN_BRANCH' to release. Currently on '$current_branch'."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: Working tree is dirty. Commit or stash your changes before releasing."
  exit 1
fi

echo "==> Pulling latest from origin..."
export GIT_MERGE_AUTOEDIT=no
git pull
unset GIT_MERGE_AUTOEDIT

# --- Content generation (before version tag so the tag reflects final state) ---

echo "==> Refreshing OpenAPI schema snapshots..."
npm run schemas:sync

echo "==> Translating content..."
npm run i18n:all

echo "==> Generating changelog..."
npx git-changelog-command-line -of CHANGELOG.md

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "chore: update schemas, translations, and changelog"
fi

# --- Validation ---

echo "==> Running validation checks..."
npm run check

# --- Version bump ---

NEXT_VERSION=$(npx git-changelog-command-line --print-next-version --major-version-pattern BREAKING --minor-version-pattern feat)

if [[ -z "$NEXT_VERSION" ]]; then
  echo "ERROR: Could not determine next version. Are there any commits since the last tag?"
  exit 1
fi

echo ""
echo "Next version: v${NEXT_VERSION}"
read -rp "Proceed with release? [y/N] " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "Release aborted."
  exit 0
fi

echo "==> Bumping version to ${NEXT_VERSION}..."
npm version "$NEXT_VERSION"

# --- Push & release ---

echo "==> Pushing ${MAIN_BRANCH} and tags to origin..."
git push
git push --tags

echo "==> Creating GitHub release..."
gh release create "v${NEXT_VERSION}" --notes "See CHANGELOG.md for release notes" --target "$MAIN_BRANCH"

echo "==> Release v${NEXT_VERSION} SUCCESSFUL"
