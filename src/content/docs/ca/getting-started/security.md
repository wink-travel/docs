---
title: Seguretat
description: Aquest article conté informació sobre les mesures de seguretat que implementem i que són publicades anualment per la nostra empresa de seguretat externa.
sidebar:
  order: 6
---

*Última actualització: 7 de setembre de 2024*

*Versió 1.0*

## Propòsit i abast

Com a part del nostre compromís continuat amb la seguretat i la protecció de les dades dels usuaris, realitzem proves de penetració regulars a la nostra aplicació web. Aquest document descriu les nostres metodologies de prova, proporciona un resum dels resultats i destaca el nostre enfocament per a la millora contínua de la seguretat.

Aquest document s’actualitzarà a mesura que es produeixin nous informes o quan es facin canvis significatius.

Dominis dins l’abast:  
\*.wink.travel  
\*.trippay.io

## Freqüència i calendari de proves

Les nostres proves de penetració es realitzen anualment, amb proves addicionals programades segons sigui necessari després d’actualitzacions importants de l’aplicació o la infraestructura. Aquesta cadència regular de proves assegura que estem per davant de les amenaces en evolució i mantenim un entorn segur.

## Metodologies de prova

Les nostres proves de penetració són exhaustives i cobreixen una àmplia gamma d’aspectes de seguretat, incloent però no limitant-se a:

* **OWASP Top 10:** Les nostres proves se centren específicament en els riscos de seguretat més crítics, com la Injecció, l’Autenticació trencada i el Cross-Site Scripting (XSS).  
* **Proves Black Box i Grey Box:** Depenent de l’abast, el nostre equip utilitza aquestes metodologies per simular escenaris d’atac tant externs com interns.  
* **Proves automatitzades i manuals:** Utilitzem Burp Suite Pro, un conjunt d’eines líder en proves de seguretat, per realitzar escanejos automatitzats i ajudar en tècniques manuals per identificar vulnerabilitats complexes i obtenir la millor cobertura possible. Per a la identificació més específica de vulnerabilitats, s’utilitzen algunes eines especialitzades, per exemple SQLmap.

## Resum dels resultats

El següent és un resum d’alt nivell del nostre informe més recent de proves de penetració:

* **Total de vulnerabilitats identificades:** 2  
* **Distribució per gravetat:**  
  * Crítica: 2  
* **Tipus de vulnerabilitats detectades:**  
  * Control d’accés trencat  
  * Disseny insegur

Per a resultats detallats, consulteu l’informe complet.

### Valoracions de risc i impacte

Les dues vulnerabilitats trobades estan classificades com a crítiques, ja que ambdues podrien haver tingut un impacte financer greu. La primera va permetre a un usuari maliciós autenticat controlar el compte de pagament Trippay d’una altra empresa. La segona vulnerabilitat va permetre a un usuari maliciós modificar l’import del pagament requerit per a una reserva.

### Esforços de remediació i mitigació

Hem pres les següents mesures per abordar les vulnerabilitats identificades:

* **Parches immediats:** Les vulnerabilitats crítiques s’han corregit en un termini de 48 hores des del descobriment.  
* **Revisió i enfortiment del codi:** L’equip de desenvolupament ha implementat controls de seguretat addicionals basats en les nostres recomanacions.

## Millora contínua

Les proves de penetració formen part de la nostra estratègia més àmplia per a la millora contínua de la seguretat. Els resultats de cada prova guien les nostres polítiques de seguretat, influeixen en les pràctiques de desenvolupament i impulsen millores en la nostra arquitectura de seguretat.

## Experiència de l’equip

Les nostres proves de penetració són realitzades per un professional intern amb una àmplia experiència en diversos projectes i sectors. Utilitzant eines i mètodes líders, el nostre expert assegura que la nostra aplicació es prova a fons contra les amenaces de seguretat més recents.

## Compromís amb la seguretat

Estem dedicats a mantenir un entorn d’aplicació segur per als nostres usuaris i parts interessades. Els nostres esforços continus en proves i millora de la seguretat demostren el nostre compromís per protegir-nos contra les amenaces en evolució.

## Accés a l’informe i actualitzacions

Aquest document s’actualitzarà contínuament a mesura que es publiquin nous informes de proves de penetració. Per accedir a l’informe complet, poseu-vos en contacte amb nosaltres a través del correu electrònic següent. Les futures actualitzacions inclouran vulnerabilitats recentment identificades, esforços de remediació i ajustos a les nostres metodologies de prova.

Per a més consultes, poseu-vos en contacte amb security@wink.travel.
