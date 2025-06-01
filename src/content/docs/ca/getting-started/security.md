---
title: Security
description: >-
  Aquest article conté informació sobre les mesures de seguretat que implementem
  i que publica anualment la nostra empresa de seguretat externa.
sidebar:
  order: 6
---
# Document de visió general de seguretat de Wink

*Darrera actualització: 7 de setembre de 2024*

*Versió 1.0*

## Objectiu i abast

Com a part del nostre compromís continu amb la seguretat i la protecció de les dades dels usuaris, realitzem proves de penetració periòdiques a la nostra aplicació web. Aquest document descriu les nostres metodologies de prova, proporciona un resum de les troballes i destaca el nostre enfocament per a la millora contínua de la seguretat.

Aquest document s'actualitzarà a mesura que es produeixin nous informes o canvis significatius.

Dominis dins l'abast:\
\*.wink.travel\
\*.trippay.io

## Freqüència i horari de proves

Les nostres proves de penetració es duen a terme anualment, amb proves addicionals programades segons calgui després d'actualitzacions significatives de l'aplicació o la infraestructura. Aquesta cadència regular de proves garanteix que ens mantenim al dia de les amenaces en evolució i mantenim un entorn segur.

## Metodologies de prova

Les nostres proves de penetració són exhaustives i cobreixen una àmplia gamma d'aspectes de seguretat, incloent-hi, entre d'altres:

* **Els 10 millors de l'OWASP:**&#x4C;es nostres proves es centren específicament en els riscos de seguretat més crítics, com ara la injecció, l'autenticació trencada i els scripts entre llocs (XSS).
* **Proves de caixa negra i caixa grisa:**&#x44;epenent de l'abast, el nostre equip utilitza aquestes metodologies per simular escenaris d'atac tant externs com interns.
* **Proves automatitzades i manuals:**&#x46;em servir Burp Suite Pro, un conjunt d'eines líder en proves de seguretat, per dur a terme anàlisis de seguretat automatitzades i per ajudar amb les tècniques de prova manuals per identificar vulnerabilitats complexes i obtenir la millor cobertura possible. Per a una identificació de vulnerabilitats més específica, s'utilitzen algunes eines especialitzades, com ara SQLmap.

## Resum de les troballes

El següent és un resum d'alt nivell del nostre informe de proves de penetració més recent:

* **Total de vulnerabilitats identificades:**&#x32;
* **Distribució de la gravetat:**
  * Crític: 2
* **Tipus de vulnerabilitats detectades:**
  * Control d'accés trencat
  * Disseny insegur

Per a les conclusions detallades, consulteu l'informe complet.

### Classificacions de risc i impacte

Ambdues vulnerabilitats trobades es qualifiquen com a crítiques, ja que totes dues podrien haver tingut greus impactes financers. La primera permetia a un usuari autenticat maliciós obtenir el control del compte de pagament Trippay d'una altra empresa. La segona vulnerabilitat permetia a un usuari maliciós modificar l'import del pagament requerit per a una reserva.

### Esforços de remediació i mitigació

Hem pres les mesures següents per solucionar les vulnerabilitats identificades:

* **Pegats immediats:**&#x4C;es vulnerabilitats crítiques s'han corregit en 48 hores des del seu descobriment.
* **Revisió i enduriment del codi:**&#x4C;'equip de desenvolupament ha implementat controls de seguretat addicionals basats en les nostres recomanacions.

## Millora contínua

Les proves de penetració formen part de la nostra estratègia més àmplia de millora contínua de la seguretat. Les conclusions de cada prova guien les nostres polítiques de seguretat, influeixen en les pràctiques de desenvolupament i impulsen millores en la nostra arquitectura de seguretat.

## Experiència de l'equip

Les nostres proves de penetració les realitza un professional intern amb una àmplia experiència en diversos projectes i sectors. Mitjançant eines i mètodes capdavanters, el nostre expert garanteix que la nostra aplicació es provi exhaustivament contra les darreres amenaces de seguretat.

## Compromís amb la seguretat

Ens dediquem a mantenir un entorn d'aplicacions segur per als nostres usuaris i parts interessades. Els nostres esforços continus en proves i millores de seguretat demostren el nostre compromís amb la protecció contra les amenaces en constant evolució.

## Accés a informes i actualitzacions

Aquest document s'actualitzarà contínuament a mesura que es publiquin nous informes de proves de penetració. Per accedir a l'informe complet, poseu-vos en contacte amb nosaltres a través del correu electrònic següent. Les futures actualitzacions inclouran vulnerabilitats recentment identificades, esforços de correcció i ajustos a les nostres metodologies de prova.

Per a més consultes, contacteu amb security@wink.travel.

