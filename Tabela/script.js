function adicionarItem(){
    //Obter valores dos campos digitados
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;
    var total = quantidade*valor.value;

    // console.log(nome, valor, quantidade)
    // console.log(nome, valor, quantidade)

    //Validar de todas existem
    if(!nome || !valor || !quantidade){
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
    celulaValor.innerHTML = "R$ " + valor;
    celulaQuantidade.innerHTML = quantidade;
    celulaTotal.innerHTML = valor*quantidade;
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Estoque"});
    XLSX.writeFile(wb, nomeArquivo);
}

