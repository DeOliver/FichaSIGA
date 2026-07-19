const upload =
document.getElementById("portraitUpload");

const portrait =
document.getElementById("linhagemPortrait");

upload.addEventListener(
"change",
function(event){

    const arquivo =
    event.target.files[0];

    if(!arquivo) return;

    const leitor =
    new FileReader();

    leitor.onload =
    function(e){

        portrait.src =
        e.target.result;

        localStorage.setItem(
            "portraitImage",
            e.target.result
        );

    };

    leitor.readAsDataURL(arquivo);

});

portrait.addEventListener(
"click",
function(){
    upload.click();
});