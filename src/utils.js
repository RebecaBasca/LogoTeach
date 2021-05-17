var dificultate=1;
var nivelCurent=0;
var images =[
    "https://www.ultrabright.ro/ultraelectro/wp-content/uploads/2017/07/bec-incandescent-a55-800x800.jpg",
    "https://i.pinimg.com/736x/66/3f/ac/663facc597e38c0e3fd8ef6cb76467ec.jpg",
    "https://s13emagst.akamaized.net/products/32268/32267661/images/res_4e7ed93dc3b8db952c16023e77feccb4.jpg",
    "https://s2.bukalapak.com/img/7198853812/large/IKEA_DROMMINGE_Lampu_Dinding_Bentuk_Balon_Merah.png",
    "https://www.auchan.ro/public/images/h40/h21/h00/set-12-creioane-colorate-herlitz-forma-triunghiulara-8850959892510.jpg"

]

var litere_amestecate_cuvant_curent = ""

function toggleDif() {
    if (dificultate === 1) {
        dificultate = 2;
        $('#dif-age').css("transform","translateX(-50%) rotateY(90deg) ")
        setTimeout(()=>{
            $('#dif-age').text('7-8 ani')
            $('#dif-age').css("transform","translateX(-50%) rotateY(0deg) ")
        }, 300)
    }
    else{
        dificultate = 1;
        $('#dif-age').css("transform","translateX(-50%) rotateY(90deg) ")
        setTimeout(()=>{
            $('#dif-age').text('5-6 ani')
            $('#dif-age').css("transform","translateX(-50%) rotateY(0deg) ")
        }, 300)
    }
}

//====================================================
//LITERE AMESTECATE
//====================================================

function bottom_row(cuv,scrambled){
    $("#btn-container>button:nth-of-type(2)").html("Următorul")
    $("#btn-container>button:nth-of-type(2)").css("display","none"); //dezactivez butonul de "Start"

    litere_amestecate_cuvant_curent = cuv

    if(dificultate===1){
        $(".l-a-container").prepend(`
            <img class="imagine_aux" src="${images[nivelCurent]}">
        `)
    }
    else{
        $("#main-container").css("margin-top","30vh")
    }

    cuv = scrambled
    for (var i=0; i<cuv.length;i++){
        $('.l-a-nd').append(` 
            <div class="letter" id="btm-${i}" onclick='pressedBtmLetter("btm-${i}")'>${cuv[i]}</div>`)
        $('.l-a-st').append(` 
            <div class="letter" id="top-${i}" style=""></div>`)
    }


}



function pressedBtmLetter(id){
    $(".l-a-st .letter").each(function (){
        if ($(this).text() === ""){
            const letterToPut = $("#"+id).text()
            $(this).text(letterToPut)

            $(this).click(function(){
                $(this).text("")
                $("#"+id).css({
                    "opacity":"1",
                    "pointer-events":"auto"
                })
            })
            $("#"+id).css({
                    "opacity":"0",
                    "pointer-events":"none"
            })
            return false;
        }

    })

        if(litere_amestecate_cuvant_curent.length === checkword().length){

            if(litere_amestecate_cuvant_curent === checkword()){
                console.log("cuvant corect")
                $("#btn-container>button:nth-of-type(2)").css("display","flex");
                $("#main-container").html(`<h1 id="message">Felicitări! Apasă pe butonul Următorul pentru a trece mai departe.</h1>`);
                $("#message").css("margin-top","35vh")
            }
            else{
                console.log("Cuvant gresit")
            }
        }


}


function checkword(){
    var value = "";
    $(".l-a-st .letter").each(function(){
        value = value + $(this).text()
    })
    return value
}

//====================================================
//JOCUL MEMORIEI
//====================================================

function create_words(lista) {
    const L = lista.length

    for (let i = 0; i < L; i += 1) {
        lista.push(lista[i])
    }
    lista.sort((a, b) => Math.random() - 0.5)

    return lista;
}

var lastTapped = ""
var howManyWords = 0;
var lastMemoryLevel = false;

function memoryLoad(words) {
    howManyWords = words.length;
    $("#btn-container>button:nth-of-type(2)").html("Următorul")
    $("#btn-container>button:nth-of-type(2)").css("display","none"); //dezactivez butonul de "Start"


        const shuffledWords = create_words(words)

        //fill
        shuffledWords.forEach((word) => {
            $("#main-container").append(`
         <div class="hiddenobj">
        <h2>${word}</h2>
        <img src="../media/norjoc2.png">
    </div>
    `)
        })


//    Listeners
        $(".hiddenobj").click(function () {

            $(this).find("img").css("opacity", "0");
            setTimeout(() => {
                $(this).find("img").css("opacity", "1");
            }, 1000)


            const tapped = $(this).find("h2").text();


            if (lastTapped !== "") {
                if (lastTapped === tapped) {
                    $(".hiddenobj").each(function(){
                        if($(this).find("h2").text() === tapped){
                            $(this).css("opacity","0")
                            $(this).css("pointer-events","none")
                        }
                    })
                    howManyWords -= 1;
                    if(howManyWords === 0){
                        $("#btn-container>button:nth-of-type(2)").css("display","flex");
                        if(!lastMemoryLevel)
                            $("#main-container").html(`<h1 id="message">Felicitări! Apasă pe butonul Următorul pentru a trece mai departe.</h1>`)
                        else{
                            $("#main-container").html(`<h1 id="message">Felicitări! Apasă pe butonul de mai jos pentru a încerca și alte jocuri!</h1>`)
                            $("#btn-container>button:nth-of-type(2)").css("display","none");
                        }


                    }
                } else {
                    //fail
                }
            }
            lastTapped = tapped;

        })
    }


//====================================================
//GASEȘTE PERECHEA
//====================================================
var lastAttrTapped = "";

function shufflePairs(pairs){
    var images = []
    var texts = []
    var fin =[]
    pairs.forEach((each)=>{
        var s = `<img src="${each[0]}" alt="${each[1]}">`
        images.push(s);
        texts.push(each[1])
    })

    images.sort((a, b) => Math.random() - 0.5)
    texts.sort((a, b) => Math.random() - 0.5)

    for(let i=0; i<pairs.length; i+=1) {
        fin.push([images[i], texts[i]])
    }
    return fin

}

var numberOfPairs = 0;
var lastPairsLevel = false;
function findPairLoad(pairs){

    $("#btn-container>button:nth-of-type(2)").html("Următorul")
    $("#btn-container>button:nth-of-type(2)").css("display","none"); //dezactivez butonul de "Start"

    numberOfPairs = pairs.length

//load
    pairs = shufflePairs(pairs)
    if (dificultate === 1)
        $("#main-container").css("margin-top","15vh")
    for(let i = 0 ; i <pairs.length ; i++){
        console.log("i: ",i)
        const html = `
         <div class="hiddenobj">
            ${pairs[i][0]}
        </div>

        <div class="hiddenobj">
            <h2>${pairs[i][1]}</h2>
        </div>
        `
        $("#main-container").append(html);
    }


    console.log(pairs)



    //listeners
    $(".hiddenobj").click(function (){

        var tapped;

        if($(this).html().includes("<h2>")){
            tapped = $(this).find("h2").text();
        }
        else{
            tapped = $(this).find("img").attr('alt');
        }

        //first time
        if(lastAttrTapped === ""){
            lastAttrTapped = tapped
            return;
        }

        //catch
        if(lastAttrTapped === tapped){
            console.log("match!")
            $(".hiddenobj").each(function(){
                var curent;

                if($(this).html().includes("<h2>")){
                    curent = $(this).find("h2").text();
                }
                else{
                    curent = $(this).find("img").attr('alt');
                }

                if(curent === tapped){
                    $(this).css("opacity","0");
                    $(this).css("pointer-events","none");
                }
            })

            numberOfPairs -= 1;

            if(numberOfPairs === 0){
                if(!lastPairsLevel){
                    $("#btn-container>button:nth-of-type(2)").css("display","flex");
                    $("#main-container").html(`<h1 id="message">Felicitări! Apasă pe butonul Următorul pentru a trece mai departe.</h1>`);
                }
                else{
                    $("#btn-container>button:nth-of-type(2)").css("display","none");
                    $("#main-container").html(`<h1 id="message">Felicitări! Apasă pe butonul de mai jos pentru a încerca și alte jocuri!</h1>`)
                }

            }

        }



        //last
        if($(this).html().includes("<h2>"))
            lastAttrTapped = tapped;
        else
            lastAttrTapped = tapped;

    })
}