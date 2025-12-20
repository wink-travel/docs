---
title: Segurança
description: Este artigo contém informações sobre as medidas de segurança que implementamos e que são publicadas anualmente pela nossa empresa de segurança terceirizada.
sidebar:
  order: 6
---

# Documento de Visão Geral de Segurança do Wink

*Última Atualização: 7 de setembro de 2024*

*Versão 1.0*

## Propósito e Escopo

Como parte do nosso compromisso contínuo com a segurança e a proteção dos dados dos usuários, realizamos testes regulares de penetração em nossa aplicação web. Este documento descreve nossas metodologias de teste, fornece um resumo dos resultados e destaca nossa abordagem para a melhoria contínua da segurança.

Este documento será atualizado conforme novos relatórios forem produzidos ou quando ocorrerem mudanças significativas.

Domínios no escopo:  
\*.wink.travel  
\*.trippay.io

## Frequência e Cronograma dos Testes

Nossos testes de penetração são realizados anualmente, com testes adicionais agendados conforme necessário após atualizações significativas na aplicação ou infraestrutura. Essa cadência regular de testes garante que estejamos à frente das ameaças em evolução e mantenhamos um ambiente seguro.

## Metodologias de Teste

Nossos testes de penetração são abrangentes e cobrem uma ampla gama de aspectos de segurança, incluindo, mas não se limitando a:

* **OWASP Top 10:** Nossos testes focam especificamente nos riscos de segurança mais críticos, como Injeção, Autenticação Quebrada e Cross-Site Scripting (XSS).  
* **Testes Black Box e Grey Box:** Dependendo do escopo, nossa equipe utiliza essas metodologias para simular cenários de ataque externos e internos.  
* **Testes Automatizados e Manuais:** Usamos o Burp Suite Pro, um conjunto líder de ferramentas de teste de segurança, para realizar varreduras automatizadas e auxiliar técnicas manuais para identificar vulnerabilidades complexas e obter a melhor cobertura possível. Para identificação mais específica de vulnerabilidades, algumas ferramentas especializadas são usadas, por exemplo, SQLmap.

## Resumo dos Resultados

A seguir, um resumo de alto nível do nosso relatório mais recente de testes de penetração:

* **Total de Vulnerabilidades Identificadas:** 2  
* **Distribuição de Severidade:**  
  * Críticas: 2  
* **Tipos de Vulnerabilidades Detectadas:**  
  * Controle de Acesso Quebrado  
  * Design Inseguro

Para resultados detalhados, consulte o relatório completo.

### Avaliação de Riscos e Impacto

Ambas as vulnerabilidades encontradas foram classificadas como críticas, pois poderiam ter causado impactos financeiros severos. A primeira permitia que um usuário autenticado malicioso assumisse o controle da conta de pagamento Trippay de outra empresa. A segunda vulnerabilidade permitia que um usuário malicioso modificasse o valor do pagamento exigido para uma reserva.

### Esforços de Remediação e Mitigação

Tomamos as seguintes medidas para tratar as vulnerabilidades identificadas:

* **Correções Imediatas:** As vulnerabilidades críticas foram corrigidas em até 48 horas após a descoberta.  
* **Revisão e Reforço de Código:** A equipe de desenvolvimento implementou controles adicionais de segurança com base em nossas recomendações.

## Melhoria Contínua

O teste de penetração faz parte da nossa estratégia mais ampla de melhoria contínua da segurança. Os resultados de cada teste orientam nossas políticas de segurança, influenciam as práticas de desenvolvimento e impulsionam aprimoramentos em nossa arquitetura de segurança.

## Expertise da Equipe

Nossos testes de penetração são conduzidos por um profissional interno com ampla experiência em diversos projetos e setores. Utilizando ferramentas e métodos líderes, nosso especialista garante que nossa aplicação seja testada minuciosamente contra as ameaças de segurança mais recentes.

## Compromisso com a Segurança

Estamos dedicados a manter um ambiente de aplicação seguro para nossos usuários e partes interessadas. Nossos esforços contínuos em testes e melhorias de segurança demonstram nosso compromisso em proteger contra ameaças em evolução.

## Acesso ao Relatório e Atualizações

Este documento será atualizado continuamente conforme novos relatórios de testes de penetração forem emitidos. Para acessar o relatório completo, entre em contato conosco pelo e-mail abaixo. Atualizações futuras incluirão vulnerabilidades recém-identificadas, esforços de remediação e ajustes em nossas metodologias de teste.

Para mais informações, entre em contato com security@wink.travel.
