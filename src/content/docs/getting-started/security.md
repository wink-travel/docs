---
title: Security
description: This article contains information about the security measures we implement and are published annually by our 3rd party security firm.
sidebar:
  order: 6
---

# Wink Security Overview Document

*Last Updated: September 7, 2024*

*Version 1.0*

## Purpose and Scope

As part of our ongoing commitment to security and protecting user data, we conduct regular penetration testing on our web application. This document outlines our testing methodologies, provides a summary of findings, and highlights our approach to continuous security improvement.

This document will be updated as new reports are produced or when significant changes occur.

Domains in scope:  
\*.wink.travel  
\*.trippay.io

## Testing Frequency and Schedule

Our penetration tests are conducted on an annual basis, with additional tests scheduled as needed following significant updates to the application or infrastructure. This regular testing cadence ensures we stay ahead of evolving threats and maintain a secure environment.

## Testing Methodologies

Our penetration testing is comprehensive and covers a wide range of security aspects, including but not limited to:

* **OWASP Top 10:** Our tests specifically target the most critical security risks, such as Injection, Broken Authentication, and Cross-Site Scripting (XSS).  
* **Black Box and Grey Box Testing:** Depending on the scope, our team utilizes these methodologies to simulate both external and internal attack scenarios.  
* **Automated and Manual Testing:** We use Burp Suite Pro, a leading security testing toolset, to conduct automated security scans and to aid manual testing techniques to identify complex vulnerabilities and get the best coverage we can. For more specific vulnerability identification, some specialized tools are used eg. SQLmap. 

## Summary of Findings

The following is a high-level summary of our most recent penetration testing report:

* **Total Vulnerabilities Identified:** 2  
* **Severity Distribution:**  
  * Critical: 2  
* **Types of Vulnerabilities Detected:**  
  * Broken Access Control  
  * Insecure Design

For detailed findings, please refer to the full report.

### Risk Ratings and Impact

Both of the found vulnerabilities are rated as critical since both of them could have had severe financial impacts. The first one allowed a malicious authenticated user to get control of another company’s Trippay payment account. The second vulnerability allowed a malicious user to modify the amount of payment required for a booking.

### Remediation and Mitigation Efforts

We have taken the following steps to address the identified vulnerabilities:

* **Immediate Patches:** The critical vulnerabilities have been patched within 48 hours of discovery.  
* **Code Review and Hardening:** Development team has implemented additional security controls based on our recommendations..

## Continuous Improvement

Penetration testing is part of our broader strategy for continuous security improvement. Findings from each test guide our security policies, influence development practices, and drive enhancements in our security architecture.

## Team Expertise

Our penetration testing is conducted by an in-house professional with extensive experience across various projects and industries. Using leading tools and methods, our expert ensures our application is thoroughly tested against the latest security threats.

## Commitment to Security

We are dedicated to maintaining a secure application environment for our users and stakeholders. Our ongoing efforts in security testing and improvement demonstrate our commitment to protecting against evolving threats.

## Report Access and Updates

This document will be continuously updated as new penetration test reports are issued. To access the full report, please contact us through the email below. Future updates will include newly identified vulnerabilities, remediation efforts, and adjustments to our testing methodologies.

For further inquiries, please contact security@wink.travel.  
