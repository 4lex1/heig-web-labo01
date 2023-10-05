var loveCount = 0;
var currentBannerState = 0;
var loveSize = 12;

var loveSizeSpan = document.getElementById("loveSize");
var loveCountSpan = document.getElementById("loveCount");
var loveButton = document.getElementById("loveButton");
var banner = document.getElementById("banner");
var gameResult = document.getElementById("gameResult");
var gameResultText = document.getElementById("gameResultText");

(function init(){
    startBanner();
    loveSizeSpan.style.fontSize = loveSize + "px"; 
    for (let i = 1; i <= 3; i++){
        var outfitImg = document.getElementById("outfit" + i);
        outfitImg.addEventListener("click", function() {
            selectOutfit(i);
        });
    }
})();

function selectOutfit(index){
    if (index ==2){
        gameResult.style.backgroundColor = "green";
        gameResultText.innerText = "Vous avez gagné !";
    }
    else{
        gameResult.style.backgroundColor = "red";
        gameResultText.innerText = "Vous avez perdu !";
    }
    
    gameResult.classList.remove("hidden");
    gameResultText.classList.remove("hidden");
    setTimeout(function(){ 
        gameResult.style.backgroundColor = "black";
        gameResult.classList.add("hidden");
        gameResultText.classList.add("hidden");
    }, 2000);
}

function onButtonClick(){
    loveCountSpan.innerText = ++loveCount;
    loveSizeSpan.style.fontSize = ++loveSize + "px"; 
}

function startBanner(){
    var states =["MALO ❤", "MALO ❤❤", "MALO ❤❤❤", "MALO ❤❤❤❤", "MALO ❤❤❤❤❤"];
    setInterval(function(){
        banner.innerText = states[currentBannerState];
        currentBannerState = ( currentBannerState + 1) % states.length;
    }, 400);
}