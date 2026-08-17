---
title: Περιβάλλοντα
description: Αυτό το άρθρο περιέχει πληροφορίες για δοκιμαστές και προγραμματιστές σχετικά με το πώς να αποκτήσουν πρόσβαση στα διάφορα περιβάλλοντα διακομιστών μας.
sidebar:
  order: 8
---

Στην Wink, λειτουργούμε 2 περιβάλλοντα για όλα όσα κάνουμε ανά πάσα στιγμή:

- Το Production είναι το σταθερό μας περιβάλλον.
- Το Staging είναι το περιβάλλον πιστοποίησης και δοκιμών.

Αν είστε ενσωματωτής, ξενοδοχείο ή ταξιδιωτικός πράκτορας που επιθυμεί να προετοιμαστεί για πιστοποίηση ή να δοκιμάσει την πλατφόρμα Wink, δημιουργήστε έναν λογαριασμό στο περιβάλλον staging για να ξεκινήσετε.

:::note
Το περιβάλλον staging είναι διαθέσιμο κατόπιν αιτήματος. Αυτό σημαίνει ότι θα μπει σε κατάσταση αναμονής αν δεν υπάρχει χρήση και θα ενεργοποιηθεί ξανά όταν υπάρξει. Παρακαλούμε να έχετε υπομονή αν το ξυπνάτε. Χρειάζεται περίπου ένα λεπτό για να ξεκινήσουν όλοι οι διακομιστές μετά την πρώτη σύνδεσή σας με έναν από τους διακομιστές ή τις εφαρμογές μας.
:::

## Διακομιστές

Παρακάτω υπάρχει ένας πίνακας που περιέχει τα ονόματα των διακομιστών μας και τη χρήση τους.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Εφαρμογές

Οι εφαρμογές μας έχουν επίσης περιβάλλοντα δοκιμών και παραγωγής για τους πελάτες μας.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
