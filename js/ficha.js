function addTalent(id){

    const tabela =
    document.getElementById(id);

    const row =
    tabela.insertRow();

    const index =
    tabela.rows.length;

    const cell1 =
    row.insertCell(0);

    const cell2 =
    row.insertCell(1);

    const cell3 =
    row.insertCell(2);

    cell1.innerHTML =
    `<input
        type="text"
        id="${id}_nome_${index}"
        name="${id}_nome_${index}"
        placeholder="Nome">`;

    cell2.innerHTML =
    `<input
        type="text"
        id="${id}_desc_${index}"
        name="${id}_desc_${index}"
        placeholder="Descrição">`;

    cell3.innerHTML =
    `<button
        class="delete-btn"
        onclick="removerLinha(this)">
        ✖
    </button>`;

}

function removerLinha(botao){

    const linha =
    botao.parentNode.parentNode;

    linha.remove();

}

document.getElementById("linhagem")
.addEventListener("change", function(){

    aplicarBonusLinhagem(this.value);

});

[
"for",
"agi",
"int",
"res",
"von",
"pre"
].forEach(attr=>{

    document
    .getElementById(attr)
    .addEventListener(
    "input",
    function(){

        this.dataset.base =
        this.value;

        aplicarBonusLinhagem();

    });

});

document
.getElementById("linhagem")
.addEventListener(
    "change",
    function(){

        aplicarBonusLinhagem(
            this.value
        );

        salvar();

    }
);