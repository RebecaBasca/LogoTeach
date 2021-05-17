
function clearCanvas(){
    $("#main-container").html(`<div class="l-a-container">
        <div class="l-a-st">
        </div>
        <div class="l-a-nd">
        </div>
    </div>`);
}

cuvinte_dif1= [
    ["BEC","CEB"],
    ["MAȘINĂ","ĂȘMAIN"],
    ["CĂPȘUNĂ","NĂȘPCĂU"],
    ["BALON","LANOB"],
    ["CREIOANE","ERECIAON"]
]
cuvinte_dif2= [
    ["MASĂ","ĂMAS"],
    ["MINGE","ENIGM"],
    ["CÂINE","ENICÂ"],
    ["LALEA","AELLA"],
    ["MORCOV","VORMOC"],
]


$("#btn-container>button:nth-of-type(2)").click(()=>{
    var cuvinte = dificultate === 1 ? cuvinte_dif1 : cuvinte_dif2;
    if(nivelCurent === 0){
        $("#btn-dif").css("display","none");
        $("#dif-age").css("display","none");
        $("#dif-img").css("display","none");
        bottom_row(cuvinte[0][0],cuvinte[0][1])
        nivelCurent = 1;
    }
    else if(nivelCurent === cuvinte.length){
        clearCanvas()
        $("#main-container").append(`
        <h1 id="message">Felicitări! Apasă pe butonul de mai jos pentru a încerca și alte jocuri!</h1>`)
    }
    else{
        clearCanvas();
        bottom_row(cuvinte[nivelCurent][0],cuvinte[nivelCurent][1]);
        nivelCurent += 1;
    }
})


$("#btn-container>button:nth-of-type(1)").click(()=>{
    $("#btn-dif").css("display","none");
    $("#dif-age").css("display","none");

    window.location.href = './jocuri.html';
})
