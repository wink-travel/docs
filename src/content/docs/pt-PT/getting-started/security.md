---
title: Security
description: >-
  Este artigo contém informações sobre as medidas de segurança que implementamos
  e são publicadas anualmente pela nossa empresa de segurança externa.
sidebar:
  order: 6
---
# Documento de visão geral de segurança do Wink

*Última atualização: 7 de setembro de 2024*

*Versão 1.0*

## Objetivo e âmbito

Como parte do nosso compromisso contínuo com a segurança e a proteção dos dados dos utilizadores, realizamos testes de intrusão regulares na nossa aplicação web. Este documento descreve as nossas metodologias de teste, fornece um resumo das conclusões e destaca a nossa abordagem para a melhoria contínua da segurança.

Este documento será atualizado à medida que forem produzidos novos relatórios ou quando ocorrerem alterações significativas.

Domínios no âmbito:\
\*. wink. viagem\
\*.trippay.io

## Frequência e calendário de testes

Os nossos testes de intrusão são realizados anualmente, com testes adicionais programados conforme necessário após atualizações significativas na aplicação ou na infraestrutura. Esta cadência regular de testes garante que estamos à frente das ameaças em evolução e mantemos um ambiente seguro.

## Metodologias de Teste

Os nossos testes de intrusão são abrangentes e cobrem uma vasta gama de aspetos de segurança, incluindo, mas não se limitando a:

* **OWASP Top 10:** Os nossos testes têm como alvo específico os riscos de segurança mais críticos, como injeção, autenticação quebrada e script entre sites (XSS).
* **Testes de caixa negra e caixa cinzenta:** Dependendo do âmbito, a nossa equipa utiliza estas metodologias para simular cenários de ataques externos e internos.
* **Testes automatizados e manuais:** Utilizamos o Burp Suite Pro, um conjunto de ferramentas de teste de segurança líder, para conduzir scans de segurança automatizados e auxiliar as técnicas de teste manual para identificar vulnerabilidades complexas e obter a melhor cobertura possível. Para a identificação de vulnerabilidades mais específicas, são utilizadas algumas ferramentas especializadas, p. Mapa SQL.

## Resumo das conclusões

A seguir, apresentamos um resumo de alto nível do nosso relatório de teste de intrusão mais recente:

* **Total de vulnerabilidades identificadas:** 2
* **Distribuição da gravidade:**
  * Crítico: 2
* **Tipos de vulnerabilidades detetadas:**
  * Controlo de acesso quebrado
  * Design Inseguro

Para resultados detalhados, consulte o relatório completo.

### Classificações de risco e impacto

Ambas as vulnerabilidades encontradas foram classificadas como críticas, uma vez que ambas poderiam ter causado impactos financeiros severos. O primeiro permitia que um utilizador autenticado malicioso obtivesse o controlo da conta de pagamento Trippay de outra empresa. A segunda vulnerabilidade permitia que um utilizador mal-intencionado modificasse o valor do pagamento necessário para uma reserva.

### Esforços de Remediação e Mitigação

Tomámos as seguintes medidas para abordar as vulnerabilidades identificadas:

* **Patches imediatos:** As vulnerabilidades críticas foram corrigidas 48 horas após a descoberta.
* **Revisão e reforço de código:** A equipa de desenvolvimento implementou controlos de segurança adicionais com base nas nossas recomendações.

## Melhoria Contínua

Os testes de intrusão fazem parte da nossa estratégia mais ampla para a melhoria contínua da segurança. As conclusões de cada teste orientam as nossas políticas de segurança, influenciam as práticas de desenvolvimento e impulsionam melhorias na nossa arquitetura de segurança.

## Experiência da equipa

Os nossos testes de intrusão são conduzidos por um profissional interno com uma vasta experiência em diversos projetos e setores. Utilizando ferramentas e métodos de ponta, os nossos especialistas garantem que a nossa aplicação é completamente testada contra as ameaças de segurança mais recentes.

## Compromisso com a Segurança

Estamos dedicados a manter um ambiente de aplicações seguro para os nossos utilizadores e partes interessadas. Os nossos esforços contínuos em testes e melhorias de segurança demonstram o nosso compromisso com a proteção contra ameaças em evolução.

## Relatório de acesso e atualizações

Este documento será continuamente atualizado à medida que forem emitidos novos relatórios de testes de intrusão. Para aceder ao relatório completo, contacte-nos pelo e-mail abaixo. As atualizações futuras incluirão vulnerabilidades recém-identificadas, esforços de correção e ajustes nas nossas metodologias de teste.

Para mais informações, contacte security@wink.travel.

