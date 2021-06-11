var cronometro=30;
var clock;
var array=[1,2,3,4,5];
var newarray=[];

document.getElementById("array").innerHTML=array;

document.getElementById("start").addEventListener('click', function(){
    document.getElementById("array").className="hide";
    clock=setInterval(function(){
        document.getElementById("crono").innerHTML=--cronometro;
        if(cronometro==0){
            var vinto=inserisci(newarray);
            if(vinto==true){
                document.getElementById("punteggio").innerHTML="hai vinto :)";
            }
            clearInterval(clock);
        }
    },1000)
    
})


function inserisci(x){
    for(var i=0;i<5;i++){
        var temp=parseInt(prompt("inserisci numero"));
        var find=trova(temp,array);
        if(find==true){
            x.push(temp);
            document.getElementById("mynum").innerHTML=x;
        }else{
            document.getElementById("punteggio").innerHTML="hai perso :(";
            return false;
        }
    }
    return true;
}

function trova(num,array){
    for(var h=0; h<5;h++){
        if(num==array[h]){
            return true;
        }
    }
    return false;
}


