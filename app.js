const backGround = document.getElementById("main");
console.log(backGround);
function altBackground() { 
    backGround.style.backgroundImage = 'url(./images/lightning1.jpg)';
};
function backBackground() {
    backGround.style.backgroundImage = 'url(./images/mikeskull-2.jpg)';

};


function backOff () {
    setInterval(altBackground, 10000);
    
    
};


function backOn () {
    backOff(), setInterval(backBackground, 10025);
};

backOn();

