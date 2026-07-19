function prepararPrint(){

    document.querySelectorAll("textarea").forEach((area, index) => {

        if(area.dataset.printClone) return;

        const clone = document.createElement("div");

        clone.className = "textarea-export";
        clone.dataset.printClone = index;

        clone.style.whiteSpace = "pre-wrap";
        clone.style.wordBreak = "break-word";
        clone.style.padding = "10px";
        clone.style.background = "#333";
        clone.style.color = "white";
        clone.style.borderRadius = "6px";
        clone.style.minHeight = getComputedStyle(area).minHeight;

        clone.innerText = area.value;

        area.style.display = "none";
        area.parentNode.insertBefore(clone, area.nextSibling);

    });

}

function restaurarPrint(){

    document.querySelectorAll(".textarea-export").forEach(el => el.remove());

    document.querySelectorAll("textarea").forEach(area => {
        area.style.display = "";
    });

}

function exportarFicha(){

    const dados =
    JSON.parse(
        localStorage.getItem("sigaFicha")
    );

    dados.portraitImage =
    localStorage.getItem("portraitImage");

    const nome =
    document.getElementById("nome").value
    || "personagem";

    const blob =
    new Blob(
        [JSON.stringify(dados,null,2)],
        {type:"application/json"}
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    `${nome}.json`;

    link.click();

}

function ajustarTextareas(){

    document.querySelectorAll("textarea")
    .forEach(area=>{

        area.style.height = "auto";
        area.style.height =
        area.scrollHeight + "px";

    });

}

document.querySelectorAll("textarea").forEach(area => {
    area.style.height = "auto";
    area.style.height = area.scrollHeight + "px";
});

async function exportarPNG(){

    await prepararPrint();

    const elemento = document.querySelector(".sheet");

    const canvas = await html2canvas(elemento,{
        scale:3,
        useCORS:true,
        backgroundColor:"#ffffff"
    });

    const link = document.createElement("a");

    link.download = "ficha.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
}

async function exportarPDF(){

    prepararPrint();

    await new Promise(r => setTimeout(r, 120));

    const elemento = document.querySelector(".sheet");

    const canvas = await html2canvas(elemento,{
        scale:2,
        useCORS:true,
        backgroundColor:"#ffffff",
        letterRendering:true
    });

    const imgData = canvas.toDataURL("image/png");

    const jsPDF = window.jspdf.jsPDF;

    const pdf = new jsPDF("p","mm","a4");

    const pdfWidth = 210;
    const pdfHeight = 297;

    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        pdfWidth,
        imgHeight
    );

    heightLeft -= pdfHeight;

    while(heightLeft > 0){

        position = position - pdfHeight;

        pdf.addPage();

        pdf.addImage(
            imgData,
            "PNG",
            0,
            position,
            pdfWidth,
            imgHeight
        );

        heightLeft -= pdfHeight;
    }

    pdf.save("ficha.pdf");
}

document.getElementById("exportPNG")
.addEventListener(
"click",
    exportarPNG
);

document.getElementById("exportPDF")
.addEventListener(
    "click",
    exportarPDF
);

document.getElementById("exportJson")
.addEventListener(
"click",
exportarFicha
);

ajustarTextareas();