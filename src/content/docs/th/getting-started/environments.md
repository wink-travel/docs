---
title: สภาพแวดล้อม
description: บทความนี้มีข้อมูลสำหรับผู้ทดสอบและนักพัฒนาเกี่ยวกับวิธีการเข้าถึงสภาพแวดล้อมเซิร์ฟเวอร์ต่างๆ ของเรา
sidebar:
  order: 8
---

ที่ Wink เราดำเนินการ 2 สภาพแวดล้อมสำหรับทุกสิ่งที่เราทำตลอดเวลา:

- Production คือสภาพแวดล้อมที่เสถียรของเรา
- Staging คือสภาพแวดล้อมสำหรับการทดสอบ และเป็นที่ที่ผู้จัดการช่องทางและตัวแทนท่องเที่ยวได้รับการรับรอง

หากคุณต้องการทดสอบแพลตฟอร์ม Wink ในฐานะนักพัฒนา โรงแรม หรือ ตัวแทนท่องเที่ยว ให้สร้างบัญชีในสภาพแวดล้อม staging ของเราเพื่อเริ่มต้น ผู้จัดการช่องทางยังดำเนินการ [การรับรอง](/th/guides/integrators/add-your-channel-manager/#certification) ที่นั่นด้วย

การสร้างบัญชีใน staging หรือ production ต้องยอมรับข้อกำหนดและเงื่อนไขของ Wink และข้อกำหนดการชำระเงิน และการยอมรับนั้นถือเป็นข้อผูกพัน ผู้จัดการช่องทางและตัวแทนท่องเที่ยวยังต้องได้รับการรับรองก่อนเข้าถึง production; ส่วนคนอื่นๆ จะย้ายไป production ด้วยตนเอง

:::note
สภาพแวดล้อม staging มีให้ใช้งานตามคำขอ ซึ่งหมายความว่าจะเข้าสู่โหมดพักหากไม่มีการใช้งาน และจะเปิดใช้งานเองเมื่อมีการใช้งาน กรุณาอดทนหากคุณกำลังปลุกมันขึ้นมา จะใช้เวลาประมาณหนึ่งนาทีในการเริ่มเซิร์ฟเวอร์ทั้งหมดหลังจากที่คุณเชื่อมต่อกับเซิร์ฟเวอร์หรือแอปของเราเป็นครั้งแรก
:::

## เซิร์ฟเวอร์

ด้านล่างเป็นตารางที่แสดงชื่อเซิร์ฟเวอร์ของเราและการใช้งาน

| ฟีเจอร์ | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## แอปพลิเคชัน

แอปพลิเคชันของเราก็มีสภาพแวดล้อมสำหรับทดสอบและ production สำหรับลูกค้าของเราเช่นกัน

| แอปพลิเคชัน | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
