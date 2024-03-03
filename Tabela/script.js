function adicionarItem(){
    //Obter valores dos campos digitados
    let nome = document.getElementById("nome").value;
    
    let quantidade = document.getElementById("quantidade").value;
    let valorDoProduto
    let numeroDoproduto

    switch (nome) {

    case "Pão":
        valorDoProduto = 2.00
        numeroDoproduto = 1
        break;
        
    case "Carne":
        valorDoProduto = 20.00
        numeroDoproduto = 2
        break

    case "Queijo":
        valorDoProduto = 1.00
        numeroDoproduto = 3
        break;

    case "Alface":
        valorDoProduto = 1.00
        numeroDoproduto = 4
        break;

    case "Tomate":
    valorDoProduto = 1.00
    numeroDoproduto = 5
    break;

    case "Abacate":
    valorDoProduto = 1.00
    numeroDoproduto = 6
    break;

    case "Bacon":
    valorDoProduto = 4.00
    numeroDoproduto = 7
    break;

    case "Refri":
    valorDoProduto = 5.00
    numeroDoproduto = 8
    break;

    }

    let total = quantidade * valorDoProduto;

    //Validar de todas existem
    if(!nome || !quantidade){
        alert("Favor preencher os campos");
        return;
    }

    //  Criar a tabela, mas precisamente uma linha na tabela
    let tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    let novaLinha = tabela.insertRow(tabela.rows.length);
    let celulaNumber = novaLinha.insertCell(0);
    let celulaDescrição = novaLinha.insertCell(1);
    let celulaValor = novaLinha.insertCell(2);
    let celulaQuantidade = novaLinha.insertCell(3);
    let celulaTotal = novaLinha.insertCell(4);


    // Colocar valores nas celulas
    celulaNumber.innerHTML = numeroDoproduto;
    celulaDescrição.innerHTML = nome;
    celulaValor.innerHTML = "R$ " + valorDoProduto;
    celulaQuantidade.innerHTML = quantidade;
    celulaTotal.innerHTML = "R$ " + total;

    document.getElementById("nome").value = '';
    document.getElementById("quantidade").value = '';
    document.getElementById("nome").focus();
}

function exportarParaExcel(){
    let tabela = document.getElementById("tabela");
    let nomeArquivo = "tabela_produtos.xlsx";
    let wb = XLSX.utils.table_to_book(tabela, {sheet: "Estoque"});
    XLSX.writeFile(wb, nomeArquivo);
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    adicionarItem()
})