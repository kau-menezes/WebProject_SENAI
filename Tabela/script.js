function adicionarItem(){
    //Obter valores dos campos digitados
    var nome = document.getElementById("nome").value;
    
    var quantidade = document.getElementById("quantidade").value;
    var valorDoProduto = 0

switch (nome) {

    case "Pão":
        valorDoProduto = 2,00
       
        break;
    case "Carne":
        valorDoProduto = 20,00
        
        break;

    case "Queijo":
        valorDoProduto = 1,00
            
        break;
    case "Alface":
        valorDoProduto = 1,00
    
        break;

    case "Tomate":
    valorDoProduto = 1,00
    
    break;

    case "Bacon":
        valorDoProduto = 4,00
        
        break;

    case "Refri":
    valorDoProduto = 5,00
    
    break;

}
var total = quantidade * valorDoProduto;

    //Validar de todas existem
    if(!nome || !quantidade){
        alert("Favor preencher os campos");
        return;
    }

    //  Criar a tabela, mas precisamente uma linha na tabela
    var tabela = document.getElementById("tabela")
    .getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaDescrição = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);
    var celulaTotal = novaLinha.insertCell(3);


    // Colocar valores nas celulas
    celulaDescrição.innerHTML = nome;
    celulaValor.innerHTML = "R$ " + valorDoProduto;
    celulaQuantidade.innerHTML = quantidade;
    celulaTotal.innerHTML = "R$ " + total;
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Estoque"});
    XLSX.writeFile(wb, nomeArquivo);
}

