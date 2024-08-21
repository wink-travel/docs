#!/bin/bash

#
# Copyright (c) wink.travel 2024
#

echo "Creating a new release of monorepo-typescript with the help of git flow..."

echo "Disabling git messages for a release"
export GIT_MERGE_AUTOEDIT=no

echo "Run a quick commit in case we forgot anything locally"
git commit -a -m "chore: :twisted_rightwards_arrows: checking in anything in current branch"

echo "Pull anything from origin to make us current"
git pull

CURRENT_VERSION=$(npx git-changelog-command-line --print-next-version --major-version-pattern BREAKING --minor-version-pattern feat)

npm version $CURRENT_VERSION

# Update changelog
npx git-changelog-command-line -of CHANGELOG.md
git commit -a -m "docs: :memo: generated changelog"

echo "Pushing master (+ tags) to ORIGIN..."
git push
git push --tags

# echo "Creating Github release"
gh release create v$CURRENT_VERSION --notes "See CHANGELOG.md for release notes" --target master

echo "Enabling git messages for a release again"
export GIT_MERGE_AUTOEDIT=yes

echo "Release SUCCESSFUL"
