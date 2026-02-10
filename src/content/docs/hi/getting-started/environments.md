---
title: पर्यावरण
description: इस लेख में परीक्षकों और डेवलपर्स के लिए हमारे विभिन्न सर्वर पर्यावरणों तक पहुंच प्राप्त करने के बारे में जानकारी है।
sidebar:
  order: 8
---

Wink में, हम हमेशा हर काम के लिए 2 पर्यावरण चलाते हैं:

- प्रोडक्शन हमारा स्थिर पर्यावरण है।
- स्टेजिंग हमारा प्रमाणन और परीक्षण पर्यावरण है।

यदि आप एक इंटीग्रेटर, होटल या ट्रैवल एजेंट हैं जो प्रमाणन के लिए तैयारी करना चाहते हैं या Wink प्लेटफ़ॉर्म का परीक्षण करना चाहते हैं, तो शुरू करने के लिए हमारे स्टेजिंग पर्यावरण में एक खाता बनाएं।

:::note
स्टेजिंग पर्यावरण अनुरोध-आधारित उपलब्ध है। इसका मतलब है कि यदि इसका उपयोग नहीं हो रहा है तो यह सो जाएगा और उपयोग होने पर फिर से चालू हो जाएगा। कृपया धैर्य रखें यदि आप इसे जागृत कर रहे हैं। हमारे किसी सर्वर या ऐप से पहली बार कनेक्ट करने के बाद सभी सर्वरों को शुरू होने में लगभग एक मिनट लगता है।
:::

## सर्वर

नीचे हमारे सर्वरों के नाम और उनके उपयोग की एक मैट्रिक्स दी गई है।

| फीचर | स्टेजिंग | प्रोडक्शन
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| इन्वेंटरी | https://staging-api.wink.travel | https://api.wink.travel | 
| इंटीग्रेशन | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | पेमेंट | https://staging-api.trippay.io | https://api.trippay.io |  -->

## एप्लिकेशन

हमारे ग्राहकों के लिए हमारे एप्लिकेशन के भी परीक्षण और प्रोडक्शन पर्यावरण हैं।

| एप्लिकेशन | स्टेजिंग | प्रोडक्शन
| ------- | ------- | ---------- |
| एजेंट | https://staging-agent.wink.travel | https://agent.wink.travel | 
| बुकिंग इंजन | https://staging-ota.wink.travel | https://ota.wink.travel | 
| एक्सट्रानेट | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| मेरा खाता | https://staging-my.wink.travel | https://my.wink.travel | 
| पेमेंट | https://staging-pay.wink.travel | https://pay.wink.travel | 
| स्टूडियो | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
