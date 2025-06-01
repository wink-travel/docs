---
title: Security
description: >-
  Este artigo contém informações sobre as medidas de segurança que implementamos
  e são publicadas anualmente por nossa empresa de segurança terceirizada.
sidebar:
  order: 6
---
# Documento de Visão Geral de Segurança do Wink

*Última atualização: 7 de setembro de 2024*

*Versão 1.0*

## Objetivo e escopo

Como parte do nosso compromisso contínuo com a segurança e a proteção dos dados dos usuários, realizamos testes de penetração regulares em nossa aplicação web. Este documento descreve nossas metodologias de teste, fornece um resumo das descobertas e destaca nossa abordagem para a melhoria contínua da segurança.

Este documento será atualizado à medida que novos relatórios forem produzidos ou quando ocorrerem mudanças significativas.

Domínios no escopo:\
\*.wink.viagem\
\*.trippay.io

## Frequência e cronograma de testes

Nossos testes de penetração são realizados anualmente, com testes adicionais agendados conforme necessário, após atualizações significativas no aplicativo ou na infraestrutura. Essa frequência regular de testes garante que estejamos à frente das ameaças em evolução e mantenhamos um ambiente seguro.

## Metodologias de Teste

Nossos testes de penetração são abrangentes e cobrem uma ampla gama de aspectos de segurança, incluindo, mas não se limitando a:

* **Top 10 da OWASP:**&#x4E;ossos testes têm como alvo específico os riscos de segurança mais críticos, como injeção, autenticação quebrada e script entre sites (XSS).
* **Testes de caixa preta e caixa cinza:**&#x44;ependendo do escopo, nossa equipe utiliza essas metodologias para simular cenários de ataques externos e internos.
* **Testes automatizados e manuais:**&#x55;tilizamos o Burp Suite Pro, um conjunto de ferramentas líder em testes de segurança, para realizar varreduras de segurança automatizadas e auxiliar técnicas de testes manuais para identificar vulnerabilidades complexas e obter a melhor cobertura possível. Para uma identificação mais específica de vulnerabilidades, utilizamos algumas ferramentas especializadas, como o SQLmap.

## Resumo das conclusões

A seguir está um resumo de alto nível do nosso relatório de teste de penetração mais recente:

* **Total de vulnerabilidades identificadas:**&#x32;
* **Distribuição de gravidade:**
  * Crítico: 2
* **Tipos de vulnerabilidades detectadas:**
  * Controle de acesso quebrado
  * Design Inseguro

Para obter resultados detalhados, consulte o relatório completo.

### Classificações de risco e impacto

Ambas as vulnerabilidades encontradas foram classificadas como críticas, pois poderiam ter causado impactos financeiros severos. A primeira permitiu que um usuário autenticado mal-intencionado assumisse o controle da conta de pagamento Trippay de outra empresa. A segunda vulnerabilidade permitiu que um usuário mal-intencionado modificasse o valor do pagamento necessário para uma reserva.

### Esforços de Remediação e Mitigação

Tomamos as seguintes medidas para abordar as vulnerabilidades identificadas:

* **Patches imediatos:**&#x41;s vulnerabilidades críticas foram corrigidas 48 horas após a descoberta.
* **Revisão e reforço de código:**&#x41; equipe de desenvolvimento implementou controles de segurança adicionais com base em nossas recomendações.

## Melhoria Contínua

Os testes de penetração fazem parte da nossa estratégia mais ampla de melhoria contínua da segurança. Os resultados de cada teste orientam nossas políticas de segurança, influenciam as práticas de desenvolvimento e impulsionam melhorias em nossa arquitetura de segurança.

## Experiência da equipe

Nossos testes de penetração são conduzidos por um profissional interno com vasta experiência em diversos projetos e setores. Utilizando ferramentas e métodos de ponta, nosso especialista garante que nossa aplicação seja rigorosamente testada contra as ameaças de segurança mais recentes.

## Compromisso com a Segurança

Dedicamo-nos a manter um ambiente de aplicação seguro para nossos usuários e partes interessadas. Nossos esforços contínuos em testes e melhorias de segurança demonstram nosso compromisso com a proteção contra ameaças em constante evolução.

## Relatório de acesso e atualizações

Este documento será atualizado continuamente à medida que novos relatórios de testes de penetração forem publicados. Para acessar o relatório completo, entre em contato conosco pelo e-mail abaixo. Atualizações futuras incluirão vulnerabilidades recém-identificadas, esforços de correção e ajustes em nossas metodologias de teste.

Para mais informações, entre em contato com security@wink.travel.

