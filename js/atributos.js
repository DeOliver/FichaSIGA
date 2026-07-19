function atualizarAtributos(){

    ["for","agi","int","res","von","pre"]
    .forEach(attr=>{

        const bp =
        Number(
            document.getElementById(
                `${attr}_bp`
            ).value
        ) || 0;

        const atual =
        Number(
            document.getElementById(
                `${attr}_atual`
            ).value
        ) || 0;

        document.getElementById(
            attr
        ).value =
        bp + atual;

    });

    atualizarCombate();
    atualizarVidaEter();

}

function resetAtributos(){

    const atributos = [
        "for",
        "agi",
        "int",
        "res",
        "von",
        "pre"
    ];

    atributos.forEach(attr=>{

        document.getElementById(
            `${attr}_bp`
        ).value = 0;

        document.getElementById(
            attr
        ).value = 0;

    });

}

[
    "for",
    "agi",
    "int",
    "res",
    "von",
    "pre"
].forEach(attr=>{

    document
    .getElementById(
        `${attr}_bp`
    )
    .addEventListener(
        "input",
        atualizarAtributos
    );

    document
    .getElementById(
        `${attr}_atual`
    )
    .addEventListener(
        "input",
        atualizarAtributos
    );

});

function atualizarRecursos(){

    // PV
        const pvBase =
    Number(
        document.getElementById("pv_base").value
    ) || 0;

    const pvAtual =
    Number(
        document.getElementById("pv_atual").value
    ) || 0;

    const resTotal =
    Number(
        document.getElementById("res").value
    ) || 0;

    document.getElementById("pv_total").value =
    pvBase + pvAtual + resTotal; 
        
    // PE
    const peBase =
    Number(
        document.getElementById(
            "pe_base"
        ).value
    ) || 0;

    const peAtual =
    Number(
        document.getElementById(
            "pe_atual"
        ).value
    ) || 0;

    document.getElementById(
        "pe_total"
    ).value =
    peBase + peAtual;

    // PD
    const pdBase =
    Number(
        document.getElementById(
            "pd_base"
        ).value
    ) || 0;

    const pdAtual =
    Number(
        document.getElementById(
            "pd_atual"
        ).value
    ) || 0;

    document.getElementById(
        "pd_total"
    ).value =
    pdBase + pdAtual;

}

[
    "pv_base",
    "pv_atual",
    "pe_base",
    "pe_atual",
    "pd_base",
    "pd_atual"
].forEach(id=>{

    document
    .getElementById(id)
    .addEventListener(
        "input",
        atualizarRecursos
    );

});

function atualizarPD(){

    const nivel =
    Number(
        document.getElementById(
            "nivel"
        ).value
    ) || 1;

    const preTotal =
    Number(
        document.getElementById(
            "pre"
        ).value
    ) || 0;

    const pdAtual =
    Number(
        document.getElementById(
            "pd_atual"
        ).value
    ) || 0;

    const pdBase =
    (nivel * 3) + preTotal;

    document.getElementById(
        "pd_base"
    ).value =
    pdBase;

    document.getElementById(
        "pd_total"
    ).value =
    pdBase + pdAtual;

}

[
    "nivel",
    "pd_atual"
].forEach(id=>{

    document
    .getElementById(id)
    .addEventListener(
        "input",
        atualizarPD
    );

});

document.getElementById("res_atual")
.addEventListener("input", atualizarAtributos);

document.getElementById("res_bp")
.addEventListener("input", atualizarAtributos);

atualizarAtributos();
if(typeof atualizarCombate === "function"){
    atualizarCombate();
}

if(typeof atualizarVidaEter === "function"){
    atualizarVidaEter();
    const res = Number(document.getElementById("res").value) || 0;
}

atualizarRecursos();

if(typeof atualizarPD === "function"){
    atualizarPD();
}