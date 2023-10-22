const tarifsArray = document.querySelectorAll('.mainContener__tarif');

for(let i = 0; i < tarifsArray.length; i++){
    tarifsArray[i].onclick = function(){
        removeClass();
        addClass(tarifsArray[i]);
    }
}

function addClass(tarif){
    tarif.classList.add('mostPopular');
}

function removeClass(){
    tarifsArray.forEach(element => {
        element.classList.remove('mostPopular');
    });
}