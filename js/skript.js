function tarkista(e){
    
    e.preventDefault(); // Keskeytetään lomakkeen lähetys
    
    const inputit = document.forms['omaLomake'].getElementsByTagName('input');

    for (var i=0; i < inputit.length; i++)
    {
        if (inputit[i].value.length < 1) {
            alert('kaikki kentät täytyy täyttää');
            return false;
        }
    }
}



function ohje(e){

    const ohjeet = {
        "nimi": "Annaa sekä etu, että sukunimesi",
        "osoite": "Anna koko osoitteesi postinumeroineen",
        "email": "Anna sähköpostiosoite, jota käytät",
        "ammatti": "Kerro mikä on viimeisin ammattisi"
    }
        
    const ohjeSpan = document.getElementById(e.target.name + 'Ohje');
    
    if (e.type == "focus"){
        ohjeSpan.innerHTML = ohjeet[e.target.name];
    } else {
        ohjeSpan.innerHTML = "";
    }
        
}


function vaihdaOtsikko(uusiOtsikko, uusiTitle){
    document.getElementsByTagName('h1')[0].innerHTML = uusiOtsikko;
    document.title = uusiTitle;
}

function lihavoiLista(){
    const elementit = document.getElementsByTagName('li');

    for (var i=0; i < elementit.length; i++){
        
        if (elementit[i].style.fontWeight == "bold") {
            elementit[i].style.fontWeight = "normal";
        } else {
            elementit[i].style.fontWeight = "bold";
        }
        
    }
}

