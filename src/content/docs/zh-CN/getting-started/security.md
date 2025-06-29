---
title: Security
description: 本文包含有关我们实施的安全措施的信息，由我们的第三方安全公司每年发布。
sidebar:
  order: 6
---
# Wink 安全概述文档

*最后更新：2024 年 9 月 7 日*

*版本 1.0*

## 目的和范围

为了持续致力于保障用户数据安全和隐私，我们会定期对 Web 应用程序进行渗透测试。本文档概述了我们的测试方法，总结了测试结果，并重点介绍了我们持续改进安全性的方法。

当有新报告发布或发生重大变化时，本文档将会更新。

范围内的域：\
\*.wink.travel\
\*.trippay.io

## 测试频率和时间表

我们每年进行一次渗透测试，并在应用程序或基础设施进行重大更新后根据需要安排额外的测试。这种定期的测试节奏确保我们始终领先于不断变化的威胁，并维护安全的环境。

## 测试方法

我们的渗透测试非常全面，涵盖了广泛的安全方面，包括但不限于：

* **OWASP 十大漏洞：**&#x6211;们的测试专门针对最关键的安全风险，例如注入、破坏身份验证和跨站点脚本 (XSS)。
* **黑盒测试和灰盒测试：**&#x6839;据范围，我们的团队利用这些方法来模拟外部和内部攻击场景。
* **自动和手动测试：**&#x6211;们使用领先的安全测试工具集 Burp Suite Pro 进行自动化安全扫描，并辅助手动测试技术来识别复杂的漏洞，从而获得最佳的覆盖范围。为了更精准地识别漏洞，我们会使用一些专用工具，例如 SQLmap。

## 调查结果摘要

以下是我们最新的渗透测试报告的概要：

* **已识别漏洞总数：**&#x32;
* **严重程度分布：**
  * 危急：2
* **检测到的漏洞类型：**
  * 访问控制失效
  * 不安全的设计

欲了解详细调查结果，请参阅完整报告。

### 风险评级和影响

这两个被发现的漏洞都被评为“严重”漏洞，因为它们都可能造成严重的财务影响。第一个漏洞允许经过身份验证的恶意用户控制另一家公司的 Trippay 支付账户。第二个漏洞允许恶意用户修改预订所需的支付金额。

### 补救和缓解措施

我们已采取以下步骤来解决已发现的漏洞：

* **立即补丁：**&#x8FD9;些严重漏洞在发现后 48 小时内就已得到修补。
* **代码审查和强化：**&#x5F00;发团队根据我们的建议实施了额外的安全控制。

## 持续改进

渗透测试是我们持续改进安全策略的重要组成部分。每次测试的结果都会指导我们的安全策略，影响开发实践，并推动我们安全架构的改进。

## 团队专业知识

我们的渗透测试由经验丰富的内部专业人员执行，他们拥有丰富的项目和行业经验。我们的专家使用领先的工具和方法，确保我们的应用程序经过全面测试，能够抵御最新的安全威胁。

## 安全承诺

我们致力于为用户和利益相关者维护安全的应用环境。我们持续进行安全测试和改进，彰显了我们致力于防御不断演变的威胁的决心。

## 报告访问和更新

本文档将随着新的渗透测试报告的发布而持续更新。如需获取完整报告，请通过下方邮箱联系我们。后续更新将涵盖新发现的漏洞、修复措施以及测试方法的调整。

如有进一步疑问，请联系 security@wink.travel。

