---
title: Security
description: >-
  Este artículo contiene información sobre las medidas de seguridad que
  implementamos y es publicado anualmente por nuestra empresa de seguridad
  externa.
sidebar:
  order: 6
---
# Documento de descripción general de seguridad de Wink

*Última actualización: 7 de septiembre de 2024*

*Versión 1.0*

## Propósito y alcance

Como parte de nuestro compromiso continuo con la seguridad y la protección de los datos de los usuarios, realizamos pruebas de penetración periódicas en nuestra aplicación web. Este documento describe nuestras metodologías de prueba, ofrece un resumen de los hallazgos y destaca nuestro enfoque para la mejora continua de la seguridad.

Este documento se actualizará a medida que se produzcan nuevos informes o cuando se produzcan cambios significativos.

Dominios en el alcance:\
\*.guiño.viaje\
\*.trippay.io

## Frecuencia y programación de pruebas

Realizamos nuestras pruebas de penetración anualmente, y programamos pruebas adicionales según sea necesario tras actualizaciones significativas de la aplicación o la infraestructura. Esta frecuencia de pruebas nos permite anticiparnos a las amenazas en constante evolución y mantener un entorno seguro.

## Metodologías de prueba

Nuestras pruebas de penetración son integrales y cubren una amplia gama de aspectos de seguridad, incluidos, entre otros:

* **Los 10 mejores de OWASP:**&#x4E;uestras pruebas se centran específicamente en los riesgos de seguridad más críticos, como inyección, autenticación rota y secuencias de comandos entre sitios (XSS).
* **Pruebas de caja negra y caja gris:**&#x44;ependiendo del alcance, nuestro equipo utiliza estas metodologías para simular escenarios de ataques tanto externos como internos.
* **Pruebas automatizadas y manuales:**&#x55;tilizamos Burp Suite Pro, un conjunto de herramientas líder en pruebas de seguridad, para realizar análisis de seguridad automatizados y complementar las técnicas de prueba manuales para identificar vulnerabilidades complejas y obtener la mejor cobertura posible. Para una identificación más específica de vulnerabilidades, utilizamos herramientas especializadas, como SQLmap.

## Resumen de los hallazgos

El siguiente es un resumen de alto nivel de nuestro informe de pruebas de penetración más reciente:

* **Total de vulnerabilidades identificadas:**&#x32;
* **Distribución de la gravedad:**
  * Crítico: 2
* **Tipos de vulnerabilidades detectadas:**
  * Control de acceso roto
  * Diseño inseguro

Para conocer los resultados detallados, consulte el informe completo.

### Calificaciones de riesgo e impacto

Ambas vulnerabilidades se consideran críticas, ya que podrían haber tenido graves consecuencias financieras. La primera permitió a un usuario autenticado malintencionado obtener el control de la cuenta de pago de Trippay de otra empresa. La segunda vulnerabilidad permitió a un usuario malintencionado modificar el importe del pago requerido para una reserva.

### Esfuerzos de remediación y mitigación

Hemos tomado las siguientes medidas para abordar las vulnerabilidades identificadas:

* **Parches inmediatos:**&#x4C;as vulnerabilidades críticas fueron corregidas dentro de las 48 horas siguientes a su descubrimiento.
* **Revisión y endurecimiento del código:**&#x45;l equipo de desarrollo ha implementado controles de seguridad adicionales según nuestras recomendaciones.

## Mejora continua

Las pruebas de penetración forman parte de nuestra estrategia más amplia de mejora continua de la seguridad. Los resultados de cada prueba orientan nuestras políticas de seguridad, influyen en las prácticas de desarrollo e impulsan mejoras en nuestra arquitectura de seguridad.

## Experiencia del equipo

Nuestras pruebas de penetración las realiza un profesional interno con amplia experiencia en diversos proyectos e industrias. Utilizando herramientas y métodos de vanguardia, nuestro experto garantiza que nuestra aplicación esté completamente probada contra las amenazas de seguridad más recientes.

## Compromiso con la seguridad

Nos dedicamos a mantener un entorno de aplicaciones seguro para nuestros usuarios y partes interesadas. Nuestros continuos esfuerzos en pruebas y mejoras de seguridad demuestran nuestro compromiso con la protección contra amenazas en constante evolución.

## Acceso a informes y actualizaciones

Este documento se actualizará continuamente a medida que se publiquen nuevos informes de pruebas de penetración. Para acceder al informe completo, contáctenos a través del correo electrónico que aparece a continuación. Las futuras actualizaciones incluirán las vulnerabilidades recientemente identificadas, las medidas de remediación y los ajustes a nuestras metodologías de prueba.

Para más consultas, póngase en contacto con security@wink.travel.

