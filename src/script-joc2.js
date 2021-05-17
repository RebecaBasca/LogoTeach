cuvinte_dif1 = [
    ["pisică","iepure","cal"],
    ["cariocă","foaie","cretă"],
    ["șotron","jucărie","robot"],
    ["martie","august","aprilie"]
]
cuvinte_dif2 =[
    ["masă","scaun","birou","pat"],
    ["soare","stea","planeta","lună"],
    ["șotron","jucărie","robot","iepure"],
    ["martie","august","aprilie","iepure"]
]
function clearCanvas(){
    $("#main-container").html("");
}


$("#btn-container>button:nth-of-type(2)").click(()=>{
    var words = dificultate === 1 ? cuvinte_dif1 : cuvinte_dif2;
    if (dificultate ===1 )
        $("#main-container").css("margin-top","17.5vh")
    if(nivelCurent === words.length-1)
        lastMemoryLevel = true

    if(nivelCurent === 0){
        $("#btn-dif").css("display","none");
        $("#dif-age").css("display","none");
        $("#dif-img").css("display","none");

        memoryLoad(words[0])
        nivelCurent = 1;
    }
    else if(nivelCurent === words.length){
        clearCanvas()
    }
    else{
        clearCanvas();
        memoryLoad(words[nivelCurent]);
        nivelCurent += 1;
    }
})


$("#btn-container>button:nth-of-type(1)").click(()=>{
    $("#btn-dif").css("display","none");
    $("#dif-age").css("display","none");

    window.location.href = './jocuri.html';
})
