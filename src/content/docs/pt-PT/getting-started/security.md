---
title: Segurança
description: Este artigo contém informações sobre as medidas de segurança que implementamos e que são publicadas anualmente pela nossa empresa de segurança externa.
sidebar:
  order: 6
---

*Última Atualização: 7 de setembro de 2024*

*Versão 1.0*

## Objetivo e Âmbito

Como parte do nosso compromisso contínuo com a segurança e a proteção dos dados dos utilizadores, realizamos testes regulares de penetração na nossa aplicação web. Este documento descreve as nossas metodologias de teste, fornece um resumo dos resultados e destaca a nossa abordagem para a melhoria contínua da segurança.

Este documento será atualizado à medida que novos relatórios forem produzidos ou quando ocorrerem alterações significativas.

Domínios abrangidos:  
\*.wink.travel  
\*.trippay.io

## Frequência e Calendário dos Testes

Os nossos testes de penetração são realizados anualmente, com testes adicionais agendados conforme necessário após atualizações significativas na aplicação ou infraestrutura. Esta cadência regular de testes garante que nos mantenhamos à frente das ameaças em evolução e mantenhamos um ambiente seguro.

## Metodologias de Teste

Os nossos testes de penetração são abrangentes e cobrem uma ampla gama de aspetos de segurança, incluindo, mas não se limitando a:

* **OWASP Top 10:** Os nossos testes focam especificamente nos riscos de segurança mais críticos, como Injeção, Autenticação Quebrada e Cross-Site Scripting (XSS).  
* **Testes Black Box e Grey Box:** Dependendo do âmbito, a nossa equipa utiliza estas metodologias para simular cenários de ataque externos e internos.  
* **Testes Automatizados e Manuais:** Utilizamos o Burp Suite Pro, um conjunto líder de ferramentas de teste de segurança, para realizar varreduras automatizadas e apoiar técnicas de teste manual para identificar vulnerabilidades complexas e obter a melhor cobertura possível. Para identificação mais específica de vulnerabilidades, são usados alguns instrumentos especializados, por exemplo, SQLmap.

## Resumo dos Resultados

Segue-se um resumo de alto nível do nosso relatório mais recente de testes de penetração:

* **Total de Vulnerabilidades Identificadas:** 2  
* **Distribuição por Severidade:**  
  * Críticas: 2  
* **Tipos de Vulnerabilidades Detetadas:**  
  * Controlo de Acesso Quebrado  
  * Design Inseguro

Para resultados detalhados, consulte o relatório completo.

### Classificação de Riscos e Impacto

Ambas as vulnerabilidades encontradas são classificadas como críticas, pois poderiam ter tido impactos financeiros graves. A primeira permitia a um utilizador autenticado malicioso controlar a conta de pagamento Trippay de outra empresa. A segunda vulnerabilidade permitia a um utilizador malicioso modificar o valor do pagamento exigido para uma reserva.

### Esforços de Remediação e Mitigação

Tomámos as seguintes medidas para resolver as vulnerabilidades identificadas:

* **Correções Imediatas:** As vulnerabilidades críticas foram corrigidas no prazo de 48 horas após a descoberta.  
* **Revisão e Reforço do Código:** A equipa de desenvolvimento implementou controlos de segurança adicionais com base nas nossas recomendações.

## Melhoria Contínua

Os testes de penetração fazem parte da nossa estratégia mais ampla de melhoria contínua da segurança. Os resultados de cada teste orientam as nossas políticas de segurança, influenciam as práticas de desenvolvimento e impulsionam melhorias na nossa arquitetura de segurança.

## Especialização da Equipa

Os nossos testes de penetração são realizados por um profissional interno com vasta experiência em vários projetos e setores. Utilizando ferramentas e métodos líderes, o nosso especialista assegura que a nossa aplicação é testada exaustivamente contra as ameaças de segurança mais recentes.

## Compromisso com a Segurança

Estamos dedicados a manter um ambiente de aplicação seguro para os nossos utilizadores e partes interessadas. Os nossos esforços contínuos em testes e melhorias de segurança demonstram o nosso compromisso em proteger contra ameaças em evolução.

## Acesso ao Relatório e Atualizações

Este documento será atualizado continuamente à medida que novos relatórios de testes de penetração forem emitidos. Para aceder ao relatório completo, por favor contacte-nos através do email abaixo. Atualizações futuras incluirão vulnerabilidades recentemente identificadas, esforços de remediação e ajustes nas nossas metodologias de teste.

Para mais informações, contacte security@wink.travel.
