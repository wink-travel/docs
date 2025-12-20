---
title: สภาพแวดล้อม
description: บทความนี้มีข้อมูลสำหรับผู้ทดสอบและนักพัฒนาเกี่ยวกับวิธีการเข้าถึงสภาพแวดล้อมเซิร์ฟเวอร์ต่างๆ ของเรา
sidebar:
  order: 8
---

ที่ Wink เราดำเนินการ 2 สภาพแวดล้อมสำหรับทุกสิ่งที่เราทำตลอดเวลา:

- Production คือสภาพแวดล้อมที่เสถียรของเรา
- Staging คือสภาพแวดล้อมสำหรับการรับรองและทดสอบ

หากคุณเป็นผู้รวมระบบ โรงแรม หรือเอเจนซี่ท่องเที่ยวที่ต้องการเตรียมตัวสำหรับการรับรองหรือทดสอบแพลตฟอร์ม Wink ให้สร้างบัญชีในสภาพแวดล้อม staging ของเราเพื่อเริ่มต้น

:::note
สภาพแวดล้อม staging มีให้ใช้งานตามคำขอ ซึ่งหมายความว่าจะเข้าสู่โหมดพักหากไม่มีการใช้งาน และจะเปิดใช้งานเองเมื่อมีการใช้งาน กรุณาอดทนหากคุณกำลังปลุกมันขึ้นมา โดยจะใช้เวลาประมาณหนึ่งนาทีในการเริ่มเซิร์ฟเวอร์ทั้งหมดหลังจากที่คุณเชื่อมต่อกับเซิร์ฟเวอร์หรือแอปของเราเป็นครั้งแรก
:::

## เซิร์ฟเวอร์

ด้านล่างเป็นตารางที่แสดงชื่อเซิร์ฟเวอร์ของเราและการใช้งาน

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Payment | https://staging-api.trippay.io | https://api.trippay.io | 

## แอปพลิเคชัน

แอปพลิเคชันของเราก็มีสภาพแวดล้อมสำหรับทดสอบและใช้งานจริงสำหรับลูกค้าของเราเช่นกัน

| Application | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Corporate | https://staging-group.wink.travel | https://group.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
