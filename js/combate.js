function atualizarCombate(){

    const forca =
    Number(document.getElementById("for").value) || 0;

    const agi =
    Number(document.getElementById("agi").value) || 0;

    const intel =
    Number(document.getElementById("int").value) || 0;

    const von =
    Number(document.getElementById("von").value) || 0;

    const pre =
    Number(document.getElementById("pre").value) || 0;

    const res =
    Number(document.getElementById("res").value) || 0;

    const armadura =
    Number(document.getElementById("armadura").value) || 0;

    document.getElementById("ataque_cac").value =
    `2d6 + ${forca}`;

    document.getElementById("ataque_dist").value =
    `2d6 + ${agi}`;

    document.getElementById("ataque_mag_int").value =
    `2d6 + ${intel}`;

    document.getElementById("ataque_mag_von").value =
    `2d6 + ${von}`;

    document.getElementById("ataque_mag_pre").value =
    `2d6 + ${pre}`;

    document.getElementById("evasao").value =
    `2d6 + ${agi}`;

    document.getElementById("defesaf").value =
    8 + res + armadura;

    document.getElementById("defesam").value =
    8 + von;

    document.getElementById("impulso").value =
    "1d12";

    atualizarBloqueio();

}

function atualizarBloqueio(){

    const base =
    parseInt(
        document.getElementById(
            "bloqueio_base"
        ).value
    ) || 0;

    const mod =
    parseInt(
        document.getElementById(
            "bloqueio_mod"
        ).value
    ) || 0;

    const total = base + mod;

    console.log(
        "Bloqueio:",
        base,
        mod,
        total
    );

    document.getElementById(
        "bloqueio_total"
    ).value =
    total;
}

function atualizarPercepcao(){

    const von =
    Number(
        document.getElementById("von").value
    ) || 0;

    const bonus =
    Number(
        document.getElementById("percepcao_bonus").value
    ) || 0;

    const base =
    3 + von;

    document.getElementById(
        "percepcao_base"
    ).value =
    base;

    document.getElementById(
        "percepcao_total"
    ).value =
    base + bonus;

}

function addItem(id){

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

    const cell4 =
    row.insertCell(3);

    cell1.innerHTML =
    `<input
        type="text"
        id="${id}_nome_${index}"
        name="${id}_nome_${index}"
        placeholder="Nome da arma"
        class="arma-nome">`;

    cell2.innerHTML = `
    <select
        id="${id}_pa_${index}"
        name="${id}_pa_${index}"
        class="arma-pa">

        <option value="1d3">1d3</option>
        <option value="1d6">1d6</option>
        <option value="1d8">1d8</option>
        <option value="1d10">1d10</option>
        <option value="1d12">1d12</option>

        <option value="2d3">2d3</option>
        <option value="2d6">2d6</option>
        <option value="2d8">2d8</option>
        <option value="2d10">2d10</option>
        <option value="2d12">2d12</option>

        <option value="3d3">3d3</option>
        <option value="3d6">3d6</option>
        <option value="3d8">3d8</option>
        <option value="3d10">3d10</option>
        <option value="3d12">3d12</option>

    </select>`;
    cell3.innerHTML = `
        <select
            id="${id}_dano_${index}"
            name="${id}_dano_${index}"
            class="arma-dano">

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

            <option value="11">11</option>
            <option value="12">12</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="15">15</option>

        </select>`;


    cell4.innerHTML =
    `<button
        class="delete-btn"
        onclick="removerLinha(this)">
        ✖
    </button>`;

    aplicarEventosAutosave();

    setTimeout(() => {
        salvar();
    }, 50);

}

document
.getElementById("armadura")
.addEventListener(
    "change",
    atualizarCombate
);

document
.getElementById("bloqueio_base")
.addEventListener(
    "input",
    atualizarBloqueio
);

document
.getElementById("bloqueio_mod")
.addEventListener(
    "input",
    atualizarBloqueio
);

document
.getElementById("percepcao_bonus")
.addEventListener(
    "input",
    atualizarPercepcao
);

atualizarCombate();
atualizarBloqueio();
atualizarPercepcao();
