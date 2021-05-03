function load(){
    function addItem(type,nome,collection,img,value){
        var div = "";

        div += "<div class='boxItem'>";
        div += "<div class='type'>"+type+"</div>";
        div += "<div class='name'>"+nome+"</div>";
        div += "<div class='collection'>"+collection+"</div>";
        div += "<img alt='' loading='lazy' src='"+img+"'/>";
        div += "<div class='price'>"+value+"</div>";
        div += "</div>";

        document.getElementById("gridContainer").innerHTML +=  div;
    }

    for(var i in ak47){
        var a = ak47[i];
        addItem(a["ARMA"],a["NOME"],a["COLECAO"],a["IMG"],a["PRICE"]);
    }
    
}