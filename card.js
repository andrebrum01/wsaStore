function load(){
    function addItem(type,nome,collection,img,value){
        var div = "";

        div +="<div class='boxItem'><div class='type'>"+type+"</div><div class='name'>"+nome+"</div><div class='collection'>"+collection+"</div><img alt='' src='"+img+"'/><div>"+value+"</div></div>";

        console.log(document.getElementById("gridContainer"));
        document.getElementById("gridContainer").innerHTML =  document.getElementById("gridContainer").innerHTML + div;
    }

    for(var i in ak47){
        var a = ak47[i];
        addItem(a["ARMA"],a["NOME"],a["COLECAO"],a["IMG"],a["PRICE"]);
    }
    
}