---
title: סביבות
description: מאמר זה מכיל מידע למבקרים ומפתחים על אופן קבלת גישה לסביבות השרת השונות שלנו.
sidebar:
  order: 8
---

ב-Wink, אנו מפעילים 2 סביבות לכל מה שאנו עושים בכל עת:

- Production היא הסביבה היציבה שלנו.
- Staging היא סביבה לאישור ובדיקות.

אם אתה אינטגרטור, מלון או סוכן נסיעות שמעוניין להתכונן לאישור או לבדוק את פלטפורמת Wink, צור חשבון בסביבת ה-Staging שלנו כדי להתחיל.

:::note
סביבת ה-Staging זמינה על בסיס בקשה. משמעות הדבר היא שהיא תיכנס למצב שינה אם אין שימוש ותתעורר כאשר יש שימוש. אנא היה סבלני אם אתה מעיר אותה. לוקח כדקה להפעיל את כל השרתים לאחר החיבור הראשון שלך לאחד מהשרתים או האפליקציות שלנו.
:::

## שרתים

להלן טבלה המכילה את שמות השרתים שלנו ואת השימוש בהם.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## אפליקציות

גם לאפליקציות שלנו יש סביבות בדיקה וייצור ללקוחותינו.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Booking engine | https://staging-ota.wink.travel | https://ota.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| My Account | https://staging-my.wink.travel | https://my.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
