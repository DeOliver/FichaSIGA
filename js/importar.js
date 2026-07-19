const btnImportar =
document.getElementById("importJson");

const arquivoImportacao =
document.getElementById("importFile");

btnImportar.addEventListener(
"click",
()=> arquivoImportacao.click()
);

arquivoImportacao.addEventListener(
"change",
function(event){

    const arquivo =
    event.target.files[0];

    const leitor =
    new FileReader();

    leitor.onload =
    function(e){

        const dados =
        JSON.parse(e.target.result);

        Object.keys(dados)
        .forEach(chave=>{

            const campo =
            document.getElementById(chave);

            if(!campo) return;

            if(campo.type === "checkbox"){

                campo.checked =
                dados[chave];

            }else{

                campo.value =
                dados[chave];

            }

        });

        if(dados.portraitImage){

            localStorage.setItem(
                "portraitImage",
                dados.portraitImage
            );

            document.getElementById(
                "linhagemPortrait"
            ).src =
            dados.portraitImage;
        }

        localStorage.setItem(
            "sigaFicha",
            JSON.stringify(dados)
        );

        atualizarCombate();
        atualizarBloqueio();

    };

    leitor.readAsText(arquivo);

});