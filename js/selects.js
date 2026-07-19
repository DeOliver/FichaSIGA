function preencherSelect(id, lista){

    const select = document.getElementById(id);

    select.innerHTML =
    '<option value="">Selecione...</option>';

    lista.forEach(item=>{

        const option =
        document.createElement("option");

        option.value = item;
        option.textContent = item;

        select.appendChild(option);

    });

}

preencherSelect("linhagem", linhagem);
preencherSelect("classe", classe);
preencherSelect("paradigma", paradigma);
preencherSelect("familia", familia);
preencherSelect("cidade", cidade);