function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var cubeContainer;
var cube;
var facesSelectors = [
    "showFront",
    "showBack",
    "showRight",
    "showLeft",
    "showUp",
    "showDown"
]
window.onload = function () {
    cubeContainer = this.document.getElementById('cubeContainer');
    
    cube = this.document.getElementById('cube');
    facesSelectors.forEach(faceSelector => {
        this.document.getElementById(faceSelector).onclick = function () {
            cube.className = faceSelector;
        }
    }, this);


    //Detecta cuando esta por encima de la cara con clase Front
    this.document.getElementsByClassName('front') [0].onmouseover = function() {
        document.getElementById('imgFront').style.display = "block";
    };
    this.document.getElementsByClassName('front') [0].onmouseout = function() {
        document.getElementById('imgFront').style.display = "none";
    };

    //Detecta cuando esta por encima de la cara con clase Back
    this.document.getElementsByClassName('back') [0].onmouseover = function() {
        document.getElementById('imgBack').style.display = "block";
    };
    this.document.getElementsByClassName('back') [0].onmouseout = function() {
        document.getElementById('imgBack').style.display = "none";
    };

    //Detecta cuando esta por encima de la cara con clase Right
    this.document.getElementsByClassName('right') [0].onmouseover = function() {
        document.getElementById('imgRight').style.display = "block";
    };
    this.document.getElementsByClassName('right') [0].onmouseout = function() {
        document.getElementById('imgRight').style.display = "none";
    };

    //Detecta cuando esta por encima de la cara con clase Left
    this.document.getElementsByClassName('left') [0].onmouseover = function() {
        document.getElementById('imgLeft').style.display = "block";
    };
    this.document.getElementsByClassName('left') [0].onmouseout = function() {
        document.getElementById('imgLeft').style.display = "none";
    };

    //Detecta cuando esta por encima de la cara con clase Top
    this.document.getElementsByClassName('top') [0].onmouseover = function() {
        document.getElementById('imgTop').style.display = "block";
    };
    this.document.getElementsByClassName('top') [0].onmouseout = function() {
        document.getElementById('imgTop').style.display = "none";
    };

    //Detecta cuando esta por encima de la cara con clase Down
    this.document.getElementsByClassName('down') [0].onmouseover = function() {
        document.getElementById('imgDown').style.display = "block";
    };
    this.document.getElementsByClassName('down') [0].onmouseout = function() {
        document.getElementById('imgDown').style.display = "none";
    };
    

}

