# 🏦 Sistema Bancário em JavaScript (Console)

## 📌 Descrição
Este projeto é um sistema bancário desenvolvido em **JavaScript puro**, com foco em lógica de programação e modelagem de dados.

A aplicação simula operações reais de um banco, permitindo gerenciar contas, realizar transações e visualizar extratos diretamente pelo console.

---

## 🚀 Funcionalidades

- 👤 Criação de usuários (contas)
- 💰 Consulta de saldo
- ➕ Depósito
- ➖ Saque
- 🔄 Transferência entre contas
- 📜 Histórico de transações por usuário
- 🧾 Extrato detalhado

---

## 🧠 Regras de Negócio

- Não permite transferências para a mesma conta  
- Não permite valores negativos ou inválidos  
- Validação de saldo insuficiente  
- Registro de todas as transações (entrada e saída)  
- Cada operação atualiza automaticamente o histórico  

---

## 🏗️ Estrutura dos Dados

Cada usuário possui:

{
  nome: "douglas",
  conta: 1,
  saldo: 2400,
  historico: []
}

Cada transação registrada:

{
  tipo: "transferencia",
  valor: 500,
  saldoAntigo: 2400,
  novoSaldo: 1900,
  de: "douglas",
  para: "thais",
  data: "data da operação"
}

🧪 Como usar

Execute o arquivo JavaScript no ambiente de sua preferência (Node.js ou navegador)

Utilize as funções disponíveis no código:

transferir(1, 3, 500);
saque(3, 100);
deposito(2, 200);
extrato(1);

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Prática de lógica de programação

Manipulação de arrays e objetos

Criação de regras de negócio

Simulação de um sistema real sem uso de frameworks

📈 Próximos Passos (versões futuras)

💾 Persistência de dados (localStorage ou banco de dados)

🌐 Transformação em API REST

🖥️ Interface gráfica (HTML, CSS e JavaScript)

📊 Filtros e ordenação no extrato
