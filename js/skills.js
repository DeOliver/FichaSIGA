const skills = [
"Diplomacia",
"Atletismo",
"Ladinagem",
"Furtividade",
"Conhecimento",
"Investigação",
"Mecânica",
"Medicina",
"Navegação",
"Pilotagem",
"Sobrevivência",
"Idiomas"
];

const container =
document.getElementById("skills");

skills.forEach((skill,index)=>{

    const div =
    document.createElement("div");

    div.classList.add("skill-card");

    div.innerHTML = `
        <h4>${skill}</h4>

        <label for="skillBase0">Inicial</label>
        <input type="number"
        id="skillBase${index}"
        value="0">

        <div class="focus-track">
            <input type="checkbox" id="focus${index}_1">
            <input type="checkbox" id="focus${index}_2">
            <input type="checkbox" id="focus${index}_3">
            <input type="checkbox" id="focus${index}_4">
            <input type="checkbox" id="focus${index}_5">
            <input type="checkbox" id="focus${index}_6">
        </div>
    `;

    container.appendChild(div);

});