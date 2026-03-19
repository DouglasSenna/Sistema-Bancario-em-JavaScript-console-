const user = [
  {
    nome: "douglas",
    conta: 1,
    saldo: 2400,
    historico: [],
  },
  {
    nome: "julio",
    conta: 2,
    saldo: 400,
    historico: [],
  },
  {
    nome: "thais",
    conta: 3,
    saldo: 2400,
    historico: [],
  },
];

function saldo(conta) {
  let verSaldo = user.find((u) => u.conta === conta);
  if (!verSaldo) {
    console.log("Conta inexistente");
    return;
  } else {
    console.log(
      `Titular da conta: ${verSaldo.nome} \nNumero da conta: ${verSaldo.conta} \nSaldo: R$ ${verSaldo.saldo}`,
    );
  }
}

function transferir(origem, destino, valor) {
  let acharConta = user.find((u) => u.conta === origem);
  let acharDestino = user.find((u) => u.conta === destino);
  console.log("função transferir chamada");
  if (!acharDestino) {
    console.log("Destino inexistente");
    return;
  }
  if (!acharConta) {
    console.log("Origem inexistente");
    return;
  }
  if (origem === destino) {
    console.log("Não pode transferir para a mesma conta");
    return;
  }
  if (valor <= 0) {
    console.log("Valor incorreto");
    return;
  }
  if (valor > acharConta.saldo) {
    console.log(`Saldo indisponivel\nSaldo: ${acharConta.saldo}`);
    return;
  } else {
    acharConta.saldo -= valor;
    acharDestino.saldo += valor;
    console.log(
      `Titular da conta: ${acharConta.nome} \nNumero da conta: ${acharConta.conta} \nNovo saldo: R$ ${acharConta.saldo}\nValor transferido: R$ ${valor}\n-\nTitular da conta beneficiaria\nTitular da conta: ${acharDestino.nome}\nConta: ${acharDestino.conta}`,
    );
  }

  //Salvar historico de transação//

  const transacaoSaida = {
    tipo: "transferencia enviada",
    valor: valor,
    saldoAntigo: acharConta.saldo + valor,
    novoSaldo: acharConta.saldo,
    para: acharDestino.nome,
    data: new Date().toLocaleString(),
  };

  const transacaoEntrada = {
    tipo: "transferencia recebida",
    valor: valor,
    saldoAntigo: acharDestino.saldo - valor,
    novoSaldo: acharDestino.saldo,
    de: acharConta.nome,
    data: new Date().toLocaleString(),
  };

  acharConta.historico.push(transacaoSaida);
  acharDestino.historico.push(transacaoEntrada);
}

function criarUser(nome) {
  if (!nome.trim()) {
    console.log("Nome incorreto");
    return;
  } else {
    let nNome = nome.trim();
    let nConta = user.length + 1;
    let nSaldo = 0;

    let novoUser = {
      nome: nNome,
      conta: nConta,
      saldo: nSaldo,
      historico: [],
    };

    user.push(novoUser);
    console.log(`
        Usuario cadastrado com suceso!
        Nome: ${novoUser.nome}
        Conta: ${novoUser.conta}
        Saldo: R$ ${novoUser.saldo}
        `);
  }
}

function saque(conta, valor) {
  let contaSaque = user.find((u) => u.conta === conta);
  if (!contaSaque) {
    console.log("Conta inexistente");
    return;
  }
  if (contaSaque.saldo < valor) {
    console.log("Saldo insuficiente");
    return;
  } else {
    contaSaque.saldo -= valor;
    console.log(
      `Saque realizado\nConta: ${contaSaque.conta}\nNome: ${contaSaque.nome}\nValor: R$ ${valor}\nSaldo Antigo: R$ ${contaSaque.saldo + valor}\nSaldo atual: R$ ${contaSaque.saldo}`,
    );
  }

  //Gerar historico//

  const transacaoSaque = {
    tipo: "saque realizado",
    valor: valor,
    saldoAntigo: contaSaque.saldo + valor,
    novoSaldo: contaSaque.saldo,
    de: contaSaque.nome,
    para: null,
    data: new Date().toLocaleString(),
  };

  contaSaque.historico.push(transacaoSaque);
}

function deposito(conta, valor) {
  let contaDeposito = user.find((u) => u.conta === conta);
  if (!contaDeposito) {
    console.log("Conta inexistente");
    return;
  }
  if (valor < 1) {
    console.log("valor incorreto");
    return;
  }

  contaDeposito.saldo += valor;
  console.log(
    `Deposito realizado\nConta: ${contaDeposito.conta}\nNome: ${contaDeposito.nome}\nValor: R$ ${valor}\nSaldo Antigo: R$ ${contaDeposito.saldo - valor}\nSaldo atual: R$ ${contaDeposito.saldo}`,
  );

  //Gerar historico//

  const transacaoDeposito = {
    tipo: "Deposito realizado",
    valor: valor,
    saldoAntigo: contaDeposito.saldo - valor,
    novoSaldo: contaDeposito.saldo,
    de: null,
    para: contaDeposito.nome,
    data: new Date().toLocaleString(),
  };

  contaDeposito.historico.push(transacaoDeposito);
}

function extrato(conta) {
  const contaExtrato = user.find((u) => u.conta === conta);

  if (!contaExtrato) {
    console.log("Conta inexistente");
    return;
  }
  console.log(`
    Nome: `, contaExtrato.nome.toUpperCase());
  console.log(`
    Conta: ${contaExtrato.conta}`);
  console.log(`
    Saldo: R$ ${contaExtrato.saldo}`);
  console.log(`
    ------------------------`);
  console.log(`
    --------EXTRATO---------`);

  contaExtrato.historico.forEach((t, i) => {
    console.log(`
            N° ${i + 1}
            tipo: ${t.tipo}
            valor: ${t.valor}
            saldoAntigo: ${t.saldoAntigo}
            novoSaldo: ${t.novoSaldo}
            de: ${t.de || "-"}
            para: ${t.para || "-"}
            data: ${t.data}
            `);
  });
}

saldo(1);
saldo(2);
transferir(1, 3, 500);
criarUser("fabio");
saque(3, 2300);
deposito(3, 5000);
extrato(3);

//console.log(user[2].historico);
