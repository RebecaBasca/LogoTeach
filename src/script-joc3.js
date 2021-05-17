var pairs_dif1 = [
    [
        ["https://www.cora.ro/images/products/1815194/gallery/1815194_hd_1.jpg","Avocado"],
        ["https://www.auchan.ro/public/images/ha7/h18/h00/banane-700-g-8906934222878.jpg","Banane"],
        ["https://www.cora.ro/images/products/1815205/gallery/1815205_hd_1.jpg","Mango"]
    ],
    [
        ["https://thumbs.dreamstime.com/b/astronauta-con-la-bandiera-disposizione-pagina-di-coloritura-illustrazione-vettore-su-un-tema-astronomia-152399827.jpg","Astronaut"],
        ["https://image.freepik.com/free-vector/happy-cute-little-kid-boy-wearing-police-uniform_97632-3659.jpg","Polițist"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJdjTQGMeGfKGVrkmYxJT68SCLaSQT6MXVUwD59gICTv2vWbgsuME_8FTe7oOK-6OGDc&usqp=CAU","Doctor"]

    ]
]

var pairs_dif2 = [
    [
        ["https://s.cdnshm.com/catalog/ro/t/409269874/mascul-elefant-african-schleich-14762.jpg","Elefant"],
        ["https://0219662.ro/uploads/pest/f-parfumata_kh60.jpg","Furnică"],
        ["https://s13emagst.akamaized.net/products/25861/25860116/images/res_a757b6659e90afe2c3d44c72f2db3ffe.jpg","Lăcustă"],
        ["https://s13emagst.akamaized.net/products/25150/25149114/images/res_00513aebd519659762f41ffbc7f89132.jpg","Hipopotam"]
    ],
    [
        ["https://s.cdnshm.com/catalog/ro/t/26523680/foarfeca-croitorie-prym-kai-16-5cm-611511.jpg","Foarfecă"],
        ["https://shop.famousgifts.ro/img/4953/19606-02_altpic_3/19606-02.jpg?time=1617352874","Stilou"],
        ["https://s13emagst.akamaized.net/products/18699/18698534/images/res_2d7e4206d725637b0c1ac4012627e2b2.jpg","Radieră"],
        ["https://cdn.contentspeed.ro/herlitz.websales.ro/cs-content/cs-photos/products/original/penar-echipat-3-compartimente-31-piese-motiv-wild-animals-wolf-herlitz_20534_4_1592223038.jpg","Penar"]


    ]
]


function clearCanvas(){
    $("#main-container").html("");
}

$("#btn-container>button:nth-of-type(2)").click(()=>{
    var pairs = dificultate === 1 ? pairs_dif1 : pairs_dif2;

    if(nivelCurent === pairs.length-1)
        lastPairsLevel = true

    if(nivelCurent === 0){
        $("#btn-dif").css("display","none");
        $("#dif-age").css("display","none");
        $("#dif-img").css("display","none");

        findPairLoad(pairs[0])
        nivelCurent = 1;
    }
    else if(nivelCurent === pairs.length){
        clearCanvas()
    }
    else{
        clearCanvas();
        findPairLoad(pairs[nivelCurent])
        nivelCurent += 1;
    }
})




$("#btn-container>button:nth-of-type(1)").click(()=>{
    $("#btn-dif").css("display","none");
    $("#dif-age").css("display","none");

    window.location.href = './jocuri.html';
})
