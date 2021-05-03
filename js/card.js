// import {fullBox} from './actions.js';

function load(){
    // Render DOM todas as ak-47 do jogo CSGO
    function addItem(type,nome,collection,img,value){
        var div = "";

        div += "<div class='boxItem' >";
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
    
    // Adiciona função de click no boxItem
    const boxItem = document.querySelectorAll('.boxItem');
    boxItem.forEach(item => {
        item.addEventListener('click', openDescricao);
    });



    var ultimoIndex;
    function openDescricao(e){
        e.preventDefault();
        // pega a posição do item q está clicando
        var parent = boxItem;
        var child = e.currentTarget;
        var index = Array.prototype.indexOf.call(parent, child);
        
        // verifica se já foi carregado a inspeção
        if(this.ultimoIndex!=index){
            var AtualAk = ak47[index];
            var link = AtualAk["ARMA"].replace(" ","-")+"-"+AtualAk["NOME"].replace(" ","-");
            var src = 'https://3d.cs.money/'+link.toLowerCase()+'-fn';
            var full = "<iframe id='myFrame' src='"+src+"' width='100%' style='display: block; border: 0px;' height='479.25'></iframe>";

            document.querySelectorAll('.boxFull')[0].innerHTML = full;
            document.querySelectorAll('.boxFull')[0].click();
        }
        else{
            document.querySelectorAll('.boxFull')[0].click();            
        }
        // Salva o ultimo lugar aberto
        this.ultimoIndex = index;
    }
}