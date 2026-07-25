function ajustarTextareas(){

    document.querySelectorAll("textarea").forEach(area => {

        area.style.height = "auto";
        area.style.height = area.scrollHeight + "px";

    });

}

function getCampos(){

    return document.querySelectorAll(
        "input, textarea, select"
    );

}

function salvar(){

    const dados = {};

    getCampos().forEach(campo=>{

        if(campo.type === "file"){
            return;
        }

        const chave =
        campo.id ||
        campo.name;

        if(!chave) return;

        if(campo.type === "checkbox"){

            dados[chave] =
            campo.checked;

        }else{

            dados[chave] =
            campo.value;

        }

    });

    localStorage.setItem(
        "sigaFicha",
        JSON.stringify(dados)
    );

}

function carregar(){

    const dados =
    JSON.parse(
        localStorage.getItem("sigaFicha")
    );

    if(!dados) return;

    // 1. recria linhas dinâmicas (armas + talentos)
    [
        "aptidoes",
        "talentosAtivos",
        "talentosPassivos",
        "defeitos",
        "armas"
    ].forEach(tabelaId=>{

        const linhas =
        Object.keys(dados)
        .filter(chave =>
            chave.startsWith(`${tabelaId}_nome_`) ||
            chave.startsWith(`${tabelaId}_pa_`) ||
            chave.startsWith(`${tabelaId}_dano_`)
        );

        const indices =
        [...new Set(
            linhas.map(chave =>
                chave.split("_").pop()
            )
        )];

        indices.forEach(() => {
            if(tabelaId === "armas"){
                addItem(tabelaId);
            } else {
                addTalent(tabelaId);
            }
        });

    });

    // 2. espera DOM estabilizar
    setTimeout(() => {

        getCampos().forEach(campo=>{

            const chave =
            campo.id || campo.name;

            if(!chave) return;

            if(dados[chave] === undefined) return;

            if(campo.type === "checkbox"){
                campo.checked = dados[chave];
            } else if(campo.type !== "file"){
                campo.value = dados[chave];
            }

        });

    }, 50);

}

function aplicarEventosAutosave(){

    document.addEventListener("input", e => {

        const campo = e.target;

        if(!campo.id && !campo.name) return;

        if(
            campo.tagName !== "INPUT" &&
            campo.tagName !== "TEXTAREA" &&
            campo.tagName !== "SELECT"
        ) return;

        salvar();

    });

    document.addEventListener("change", e => {

        const campo = e.target;

        if(
            campo.tagName === "SELECT" ||
            campo.type === "checkbox"
        ){
            salvar();
        }

    });

}

function ativarAutosaveGlobal(){

    document.addEventListener("input", e => {

        const el = e.target;

        if(
            el.tagName !== "INPUT" &&
            el.tagName !== "TEXTAREA" &&
            el.tagName !== "SELECT"
        ) return;

        if(el.type === "file") return;

        salvar();

    });

    document.addEventListener("change", e => {

        const el = e.target;

        if(
            el.tagName === "SELECT" ||
            el.type === "checkbox"
        ){
            salvar();
        }

    });

}

// ativa sistema global
ativarAutosaveGlobal();

ajustarTextareas();
carregar();
aplicarEventosAutosave();
