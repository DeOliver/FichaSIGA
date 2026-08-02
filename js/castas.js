const dadosCastas = {
    "Física/Gladiador": { pv: 16, pe: 6 },
    "Física/Soldado": { pv: 14, pe: 6 },
    "Física/Vanguardista": { pv: 15, pe: 6 },
    "Física/Espadachim": { pv: 16, pe: 6 },
    "Física/Explorador": { pv: 13, pe: 6 },
    "Física/Corsário": { pv: 14, pe: 6 },
    "Física/Ladino": { pv: 13, pe: 6 },
    "Física/Acólito": { pv: 14, pe: 6 },

    "Híbrida/Menestrel": { pv: 13, pe: 6 },
    "Híbrida/Engenheiro": { pv: 12, pe: 6 },
    "Híbrida/Lutador": { pv: 15, pe: 6 },
    "Híbrida/Alquimista": { pv: 12, pe: 6 },
    "Híbrida/Sentinela": { pv: 14, pe: 6 },
    "Híbrida/Primalista": { pv: 13, pe: 6 },
    "Híbrida/Haxarim": { pv: 13, pe: 6 },
    "Híbrida/Tecnomante": { pv: 14, pe: 6 },

    "Mística/Arcanista": { pv: 12, pe: 10 },
    "Mística/Xamã": { pv: 13, pe: 7 },
    "Mística/Mago de Sangue": { pv: 13, pe: 6 },
    "Mística/Doutor da Praga": { pv: 12, pe: 7 },
    "Mística/Sacerdote": { pv: 13, pe: 4 },
    "Mística/Bruxo": { pv: 10, pe: 12 },
    "Mística/Rúnico": { pv: 14, pe: 8 },
    "Mística/Telepata": { pv: 12, pe: 6 }

};

function atualizarVidaEter(){

    const classe =
    document.getElementById(
        "classe"
    ).value;

    const dados =
    dadosCastas[classe];

    if(!dados) return;

    // pega o TERCEIRO campo (TOTAL)
    const resTotal =
    Number(
        document.getElementById(
            "res"
        ).value
    ) || 0;

    const pvBase =
    dados.pv;

    const pvTotal =
    pvBase + resTotal;

    const peBase =
    dados.pe;

    document.getElementById(
        "pv_base"
    ).value =
    pvBase;

    document.getElementById(
        "pv_total"
    ).value =
    pvTotal;

    document.getElementById(
        "pe_base"
    ).value =
    peBase;

    document.getElementById(
        "pe_total"
    ).value =
    peBase;
    
}

document
.getElementById("classe")
.addEventListener(
    "change",
    function(){

        atualizarVidaEter();

    }
);

document
.getElementById("classe")
.addEventListener(
    "change",
    atualizarVidaEter
);
