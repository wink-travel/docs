---
title: Seguretat
description: Aquest article conté informació sobre les mesures de seguretat que implementem i que són publicades anualment per la nostra empresa de seguretat externa.
sidebar:
  order: 6
---

# Document de Visió General de la Seguretat de Wink

*Última actualització: 7 de setembre de 2024*

*Versió 1.0*

## Propòsit i Abast

Com a part del nostre compromís continuat amb la seguretat i la protecció de les dades dels usuaris, realitzem proves de penetració regulars a la nostra aplicació web. Aquest document descriu les nostres metodologies de prova, proporciona un resum dels resultats i destaca el nostre enfocament per a la millora contínua de la seguretat.

Aquest document s’actualitzarà a mesura que es produeixin nous informes o quan es facin canvis significatius.

Dominis dins l’abast:  
\*.wink.travel  
\*.trippay.io

## Freqüència i Calendari de les Proves

Les nostres proves de penetració es realitzen anualment, amb proves addicionals programades segons sigui necessari després d’actualitzacions importants de l’aplicació o la infraestructura. Aquesta cadència regular de proves assegura que estem per davant de les amenaces en evolució i mantenim un entorn segur.

## Metodologies de Prova

Les nostres proves de penetració són exhaustives i cobreixen una àmplia gamma d’aspectes de seguretat, incloent però no limitant-se a:

* **OWASP Top 10:** Les nostres proves es centren específicament en els riscos de seguretat més crítics, com la Injecció, l’Autenticació Trencada i el Cross-Site Scripting (XSS).  
* **Proves Black Box i Grey Box:** Depenent de l’abast, el nostre equip utilitza aquestes metodologies per simular escenaris d’atac tant externs com interns.  
* **Proves Automatitzades i Manuals:** Utilitzem Burp Suite Pro, un conjunt d’eines líder en proves de seguretat, per realitzar escanejos automatitzats i ajudar en tècniques manuals per identificar vulnerabilitats complexes i obtenir la millor cobertura possible. Per a la identificació més específica de vulnerabilitats, s’utilitzen algunes eines especialitzades, per exemple SQLmap.

## Resum dels Resultats

El següent és un resum d’alt nivell del nostre informe més recent de proves de penetració:

* **Total de Vulnerabilitats Identificades:** 2  
* **Distribució de la Severitat:**  
  * Crítica: 2  
* **Tipus de Vulnerabilitats Detectades:**  
  * Control d’Accés Trencat  
  * Disseny Insegur

Per a resultats detallats, consulteu l’informe complet.

### Valoracions de Risc i Impacte

Les dues vulnerabilitats trobades es consideren crítiques ja que ambdues podrien haver tingut un impacte financer greu. La primera va permetre a un usuari maliciós autenticat controlar el compte de pagament Trippay d’una altra empresa. La segona vulnerabilitat va permetre a un usuari maliciós modificar l’import del pagament requerit per a una reserva.

### Esforços de Remediació i Mitigació

Hem pres les següents mesures per abordar les vulnerabilitats identificades:

* **Parches Immediats:** Les vulnerabilitats crítiques s’han corregit en un termini de 48 hores des del descobriment.  
* **Revisió i Enduriment del Codi:** L’equip de desenvolupament ha implementat controls de seguretat addicionals basats en les nostres recomanacions.

## Millora Contínua

Les proves de penetració formen part de la nostra estratègia més àmplia per a la millora contínua de la seguretat. Els resultats de cada prova guien les nostres polítiques de seguretat, influeixen en les pràctiques de desenvolupament i impulsen millores en la nostra arquitectura de seguretat.

## Experiència de l’Equip

Les nostres proves de penetració són realitzades per un professional intern amb àmplia experiència en diversos projectes i sectors. Utilitzant eines i mètodes líders, el nostre expert assegura que la nostra aplicació es prova a fons contra les amenaces de seguretat més recents.

## Compromís amb la Seguretat

Estem dedicats a mantenir un entorn d’aplicació segur per als nostres usuaris i parts interessades. Els nostres esforços continus en proves i millora de la seguretat demostren el nostre compromís per protegir-nos contra les amenaces en evolució.

## Accés a l’Informe i Actualitzacions

Aquest document s’actualitzarà contínuament a mesura que es publiquin nous informes de proves de penetració. Per accedir a l’informe complet, poseu-vos en contacte amb nosaltres a través del correu electrònic següent. Les futures actualitzacions inclouran noves vulnerabilitats identificades, esforços de remediació i ajustos a les nostres metodologies de prova.

Per a més consultes, poseu-vos en contacte amb security@wink.travel.
