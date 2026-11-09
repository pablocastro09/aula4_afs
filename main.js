const produtos = [
    {
      produto: "Bola de Futebol",
      categoria: "Equipamentos",
      quantidade: 20,
      preco: 129.90
    },
    {
      produto: "Chuteira Nike",
      categoria: "Calçados",
      quantidade: 15,
      preco: 299.90
    },
    {
      produto: "Camisa de Time",
      categoria: "Uniformes",
      quantidade: 30,
      preco: 149.90
    },
    {
      produto: "Luva de Goleiro",
      categoria: "Acessórios",
      quantidade: 10,
      preco: 119.90
    },
    {
      produto: "Caneleira",
      categoria: "Proteção",
      quantidade: 25,
      preco: 49.90
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