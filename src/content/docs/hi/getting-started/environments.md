---
title: Environments
description: >-
  इस आलेख में परीक्षकों और डेवलपर्स के लिए हमारे विभिन्न सर्वर वातावरणों तक
  पहुंच प्राप्त करने के तरीके के बारे में जानकारी दी गई है।
sidebar:
  order: 8
---
विंक में, हम हर समय जो कुछ भी करते हैं उसके लिए 2 वातावरण चलाते हैं:

* उत्पादन हमारा स्थिर वातावरण है।
* स्टेजिंग हमारा प्रमाणन और परीक्षण वातावरण है।

यदि आप एक इंटीग्रेटर, होटल या ट्रैवल एजेंट हैं और प्रमाणीकरण की तैयारी करना चाहते हैं या विंक प्लेटफॉर्म का परीक्षण करना चाहते हैं, तो आरंभ करने के लिए हमारे स्टेजिंग वातावरण में एक खाता बनाएं।

:::नोट
स्टेजिंग एनवायरनमेंट अनुरोध के आधार पर उपलब्ध है। इसका मतलब है कि अगर कोई उपयोग नहीं होगा तो यह सो जाएगा और जब उपयोग होगा तो खुद ही चालू हो जाएगा। अगर आप इसे जगा रहे हैं तो कृपया धैर्य रखें। हमारे किसी सर्वर या ऐप से पहली बार कनेक्ट होने के बाद सभी सर्वर को चालू होने में लगभग एक मिनट लगता है।
:::

## सर्वर

नीचे एक मैट्रिक्स है जिसमें हमारे सर्वरों के नाम और उनका उपयोग दर्शाया गया है।

| फ़ीचर | स्टेजिंग | उत्पादन
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| इन्वेंटरी | https://staging-api.wink.travel | https://api.wink.travel |
| एकीकरण | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| भुगतान | https://staging-api.trippay.io | https://api.trippay.io |

## अनुप्रयोग

हमारे अनुप्रयोगों में हमारे ग्राहकों के लिए परीक्षण और उत्पादन वातावरण भी उपलब्ध हैं।

| आवेदन | स्टेजिंग | उत्पादन
| ------- | ------- | ---------- |
| एजेंट | https://staging-agent.wink.travel | https://agent.wink.travel |
| कॉर्पोरेट | https://staging-group.wink.travel | https://group.wink.travel |
| एक्स्ट्रानेट | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| भुगतान | https://staging-pay.wink.travel | https://pay.wink.travel |
| स्टूडियो | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

