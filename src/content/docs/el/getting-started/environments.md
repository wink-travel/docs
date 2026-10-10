---
title: Περιβάλλοντα
description: Αυτό το άρθρο περιέχει πληροφορίες για δοκιμαστές και προγραμματιστές σχετικά με το πώς να αποκτήσουν πρόσβαση στα διάφορα περιβάλλοντα διακομιστών μας.
sidebar:
  order: 8
---

Στην Wink, λειτουργούμε 2 περιβάλλοντα για όλα όσα κάνουμε ανά πάσα στιγμή:

- Η Παραγωγή είναι το σταθερό μας περιβάλλον.
- Το Staging είναι το περιβάλλον δοκιμών μας, και εκεί πιστοποιούνται οι channel managers και οι ταξιδιωτικοί πράκτορες.

Αν θέλετε να δοκιμάσετε την πλατφόρμα Wink, ως προγραμματιστής, ξενοδοχείο ή ταξιδιωτικός πράκτορας, δημιουργήστε έναν λογαριασμό στο περιβάλλον staging για να ξεκινήσετε. Οι channel managers επίσης εκτελούν εκεί την [πιστοποίησή τους](/el/guides/integrators/add-your-channel-manager/#certification).

Η δημιουργία λογαριασμού στο staging ή στην παραγωγή απαιτεί αποδοχή των Όρων και των Όρων Πληρωμής της Wink, και αυτή η αποδοχή είναι δεσμευτική. Οι channel managers και οι ταξιδιωτικοί πράκτορες χρειάζονται επίσης πιστοποίηση πριν από την πρόσβαση στην παραγωγή· όλοι οι υπόλοιποι μεταβαίνουν στην παραγωγή μόνοι τους.

:::note
Το περιβάλλον staging είναι διαθέσιμο κατόπιν αιτήματος. Αυτό σημαίνει ότι θα μπει σε κατάσταση αδράνειας αν δεν υπάρχει χρήση και θα ενεργοποιηθεί ξανά όταν υπάρξει. Παρακαλούμε να είστε υπομονετικοί αν το ξυπνάτε. Χρειάζεται περίπου ένα λεπτό για να ξεκινήσουν όλοι οι διακομιστές μετά την πρώτη σύνδεσή σας με έναν από τους διακομιστές ή τις εφαρμογές μας.
:::

## Διακομιστές

Παρακάτω υπάρχει ένας πίνακας που περιέχει τα ονόματα των διακομιστών μας και τη χρήση τους.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Εφαρμογές

Οι εφαρμογές μας έχουν επίσης περιβάλλοντα δοκιμών και παραγωγής για τους πελάτες μας.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
