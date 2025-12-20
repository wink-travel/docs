---
title: Seguridad
description: Este artículo contiene información sobre las medidas de seguridad que implementamos y que son publicadas anualmente por nuestra empresa de seguridad externa.
sidebar:
  order: 6
---

# Documento de Resumen de Seguridad de Wink

*Última actualización: 7 de septiembre de 2024*

*Versión 1.0*

## Propósito y Alcance

Como parte de nuestro compromiso continuo con la seguridad y la protección de los datos de los usuarios, realizamos pruebas de penetración regulares en nuestra aplicación web. Este documento describe nuestras metodologías de prueba, proporciona un resumen de los hallazgos y destaca nuestro enfoque para la mejora continua de la seguridad.

Este documento se actualizará a medida que se produzcan nuevos informes o cuando ocurran cambios significativos.

Dominios en alcance:  
\*.wink.travel  
\*.trippay.io

## Frecuencia y Calendario de Pruebas

Nuestras pruebas de penetración se realizan anualmente, con pruebas adicionales programadas según sea necesario tras actualizaciones significativas de la aplicación o infraestructura. Esta cadencia regular de pruebas garantiza que nos mantengamos por delante de las amenazas en evolución y mantengamos un entorno seguro.

## Metodologías de Prueba

Nuestras pruebas de penetración son exhaustivas y cubren una amplia gama de aspectos de seguridad, incluyendo pero no limitándose a:

* **OWASP Top 10:** Nuestras pruebas se enfocan específicamente en los riesgos de seguridad más críticos, como Inyección, Autenticación Rota y Cross-Site Scripting (XSS).  
* **Pruebas Black Box y Grey Box:** Dependiendo del alcance, nuestro equipo utiliza estas metodologías para simular escenarios de ataque tanto externos como internos.  
* **Pruebas Automatizadas y Manuales:** Usamos Burp Suite Pro, un conjunto líder de herramientas de pruebas de seguridad, para realizar escaneos automatizados y apoyar técnicas manuales para identificar vulnerabilidades complejas y obtener la mejor cobertura posible. Para la identificación más específica de vulnerabilidades, se utilizan algunas herramientas especializadas, por ejemplo, SQLmap.

## Resumen de Hallazgos

A continuación, un resumen de alto nivel del informe más reciente de pruebas de penetración:

* **Total de Vulnerabilidades Identificadas:** 2  
* **Distribución por Severidad:**  
  * Críticas: 2  
* **Tipos de Vulnerabilidades Detectadas:**  
  * Control de Acceso Roto  
  * Diseño Inseguro

Para hallazgos detallados, consulte el informe completo.

### Calificación de Riesgos e Impacto

Ambas vulnerabilidades encontradas están calificadas como críticas, ya que podrían haber tenido impactos financieros severos. La primera permitió que un usuario autenticado malicioso tomara control de la cuenta de pago Trippay de otra empresa. La segunda vulnerabilidad permitió que un usuario malicioso modificara el monto del pago requerido para una reserva.

### Esfuerzos de Remediación y Mitigación

Hemos tomado las siguientes medidas para abordar las vulnerabilidades identificadas:

* **Parcheo Inmediato:** Las vulnerabilidades críticas fueron parcheadas dentro de las 48 horas posteriores a su descubrimiento.  
* **Revisión y Endurecimiento del Código:** El equipo de desarrollo ha implementado controles de seguridad adicionales basados en nuestras recomendaciones.

## Mejora Continua

Las pruebas de penetración forman parte de nuestra estrategia más amplia para la mejora continua de la seguridad. Los hallazgos de cada prueba guían nuestras políticas de seguridad, influyen en las prácticas de desarrollo y promueven mejoras en nuestra arquitectura de seguridad.

## Experiencia del Equipo

Nuestras pruebas de penetración son realizadas por un profesional interno con amplia experiencia en diversos proyectos e industrias. Utilizando herramientas y métodos líderes, nuestro experto asegura que nuestra aplicación sea probada exhaustivamente contra las amenazas de seguridad más recientes.

## Compromiso con la Seguridad

Estamos dedicados a mantener un entorno de aplicación seguro para nuestros usuarios y partes interesadas. Nuestros esfuerzos continuos en pruebas y mejoras de seguridad demuestran nuestro compromiso con la protección frente a amenazas en evolución.

## Acceso al Informe y Actualizaciones

Este documento se actualizará continuamente a medida que se emitan nuevos informes de pruebas de penetración. Para acceder al informe completo, por favor contáctenos a través del correo electrónico abajo. Las futuras actualizaciones incluirán vulnerabilidades recién identificadas, esfuerzos de remediación y ajustes en nuestras metodologías de prueba.

Para más consultas, por favor contacte a security@wink.travel.
