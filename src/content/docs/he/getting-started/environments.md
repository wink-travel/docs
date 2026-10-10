---
title: סביבות
description: מאמר זה מכיל מידע למבקרים ומפתחים על אופן קבלת גישה לסביבות השרת השונות שלנו.
sidebar:
  order: 8
---

ב-Wink, אנו מפעילים 2 סביבות לכל מה שאנו עושים בכל עת:

- Production היא הסביבה היציבה שלנו.
- Staging היא סביבת הבדיקות שלנו, ושם מנהלי ערוצים וסוכני נסיעות מוסמכים.

אם ברצונך לבדוק את פלטפורמת Wink, כמפתח, מלון או סוכן נסיעות, צור חשבון בסביבת ה-staging שלנו כדי להתחיל. מנהלי ערוצים גם מפעילים שם את [ההסמכה](/he/guides/integrators/add-your-channel-manager/#certification).

יצירת חשבון ב-staging או ב-production דורשת קבלת תנאי השימוש ותנאי התשלום של Wink, וקבלה זו מחייבת. מנהלי ערוצים וסוכני נסיעות גם צריכים הסמכה לפני גישה ל-production; כל השאר עוברים ל-production בעצמם.

:::note
סביבת ה-staging זמינה על בסיס בקשה. משמעות הדבר היא שהיא תיכנס למצב שינה אם אין שימוש ותתעורר מחדש כשיש. אנא היו סבלניים אם אתם מעירים אותה. לוקח כדקה להפעיל את כל השרתים לאחר החיבור הראשון לאחד מהשרתים או האפליקציות שלנו.
:::

## שרתים

להלן מטריצה המכילה את שמות השרתים שלנו ואת השימוש בהם.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## אפליקציות

גם לאפליקציות שלנו יש סביבות בדיקה וייצור ללקוחותינו.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
