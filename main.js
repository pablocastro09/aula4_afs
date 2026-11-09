const produtos = [
    {
      produto: "Notebook",
      categoria: "Eletrônicos",
      quantidade: 10,
      preco: 3500.00
    },
    {
      produto: "Mouse",
      categoria: "Periféricos",
      quantidade: 25,
      preco: 89.90
    },
    {
      produto: "Teclado",
      categoria: "Periféricos",
      quantidade: 15,
      preco: 149.90
    },
    {
      produto: "Monitor",
      categoria: "Eletrônicos",
      quantidade: 8,
      preco: 1200.00
    },
    {
      produto: "Cadeira Gamer",
      categoria: "Móveis",
      quantidade: 5,
      preco: 950.00
    }
  ];

  const corpoDaTabela = document.getElementById("corpoDaTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
    <td>${produto.produto}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>
    <td class="preco">${produto.preco.toLocaleString(
        "pt-BR",{
            style: "currency",
            currency: "BRL"
        }


    )}</td>
    `

    corpoDaTabela.appendChild(linha)
  }