const bonusLinhagens = {

    Argan: { fixo: { int: 2, for: -1 } },
    Aslan: { fixo: { for: 2, von: -1 } },
    Anserin: { fixo: { agi: 1, von: 1, for: -1 } },
    Anubyr: { fixo: { agi: 2, int: -1 } },
    Auroke: { fixo: { res: 2, int: -1 } },
    Avarin: { fixo: { agi: 2, res: -1 } },
    Dhampiro: { fixo: { pre: 1, res: 1, von: -1 } },
    Drakar: { fixo: { for: 1, agi: 1, von: -1 } },
    Elfen: { fixo: { int: 1, for: -1 } },
    Fada: { fixo: { agi: 1, von: 1, for: -1 } },
    Gajarin: { fixo: { for: 2, agi: -1 } },
    Hellrog: { fixo: { for: 1, res: 1, von: -1 } },
    Humano: { fixo: { von: 1, pre: 1 } },
    Ikan: { fixo: { agi: 1, res: 1, pre: -1 } },
    Leafen: { fixo: { von: 2, for: -1 } },
    Leporídeo: { fixo: { agi: 2, int: -1 } },
    Licarin: { fixo: { for: 1, pre: 1, int: -1 } },
    NanDhur: { fixo: { res: 2, agi: -1 } },
    NanZhur: { fixo: { res: 2, von: -1 } },
    Mamba: { fixo: { for: 2, von: -1 } },
    Mirath: { fixo: { agi: 1, int: 1 } },
    Retornado: { especial: "retornado" },
    Sylvano: { fixo: { agi: 2, int: -1 } },
    Tarog: { fixo: { for: 2, von: -1 } },
    Thar: { fixo: { pre: 2, for: -1 } },
    Temah: { fixo: { int: 1, von: 1, agi: -1 } },
    Tuanak: { fixo: { agi: 2, for: -1 } },
    Uriel: { fixo: { von: 2, res: -1 } },
    Urvolg: { fixo: { for: 2, res: 1, int: -1 } },
    Vaporúrgico_Grande: { fixo: { for: 1, res: 1, agi: -1 } },
    Vaporúrgico_Pequeno: { fixo: { agi: 1, res: 1, for: -1 } },
    Vok: { fixo: { agi: 1, int: 1, von: -1 } },
    Yullen: { fixo: { res: 1, for: 1, von: -1 } }

};

function resetAtributos(){

    ["for","agi","int","res","von","pre"]
    .forEach(id=>{

        document.getElementById(
            `${id}_bp`
        ).value = 0;

    });

}

function aplicarRetornado(){

    const bonus =
    prompt(
        "Escolha 2 atributos para +1 (separe por vírgula)"
    );

    const penalidade =
    prompt(
        "Escolha 1 atributo para -1"
    );

    if(bonus){

        bonus.split(",")
        .forEach(attr=>{

            attr =
            attr.trim().toLowerCase();

            const campo =
            document.getElementById(
                `${attr}_bp`
            );

            if(campo){

                // SUBSTITUI em vez de acumular errado
                campo.value =
                Number(campo.value || 0) + 1;

            }

        });

    }

    if(penalidade){

        const campo =
        document.getElementById(
            `${penalidade.trim().toLowerCase()}_bp`
        );

        if(campo){

            campo.value =
            Number(campo.value || 0) - 1;

        }

    }

}

function aplicarBonusLinhagem(nome){

    resetAtributos();

    const dados =
    bonusLinhagens[nome];

    if(!dados) return;

    if(dados.fixo){

        for(let atributo in dados.fixo){

            const campoBonus =
            document.getElementById(
                `${atributo}_bp`
            );

            if(campoBonus){

                // AQUI substitui diretamente
                campoBonus.value =
                dados.fixo[atributo];

            }

        }

    }

    if(dados.especial === "retornado"){
        aplicarRetornado();
    }

    atualizarAtributos();
    atualizarCombate();

}

document
.getElementById("linhagem")
.addEventListener(
    "change",
    function(){

        aplicarBonusLinhagem(
            this.value
        );

    }
);

[
    "for_bp","for_atual",
    "agi_bp","agi_atual",
    "int_bp","int_atual",
    "res_bp","res_atual",
    "von_bp","von_atual",
    "pre_bp","pre_atual"
].forEach(id=>{

    document
    .getElementById(id)
    .addEventListener(
    "input",
    function(){

        if(typeof atualizarAtributos === "function"){
            atualizarAtributos();
        }

    }
);

});