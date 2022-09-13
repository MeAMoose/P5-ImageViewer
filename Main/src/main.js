let runTime = 0;
let tickPass = false;        //Toggle: prevents ticker from re-triggering during the same second.
let images = [];
let imagesPicked;
let missingImg;

let timeBetweenImages = 20;
function preload() {
    loadData();
}

function setup() {
    parseData();
    createCanvas(window.innerWidth, window.innerHeight);
    genDebug();
}

function draw() {
    background(50,50,50);
    if(ticker() == true) {
        imagesPicked = pickImages(4)
    }
    quadImage(imagesPicked);
    debugWindow.render();
    nextRunTime();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

//Generates Debug Panel Information.
function genDebug() {
    debugWindow = new debugPanel("window.innerWidth", 0,{TextSize: 16,direction:"LEFT"});
    //addEntry(Name, Variable to Log).
    debugWindow.addEntry("WindowWidth","window.innerWidth");    //Window Width
    debugWindow.addEntry("WindowHeight","window.innerHeight");  //Window Height
    debugWindow.addEntry("TotalFrames","frameCount")                //Application Runtime.
    debugWindow.addEntry("RunTime","runTime.toFixed(4)")                //Application Runtime.
    debugWindow.addEntry("FPS","frameRate().toFixed(5)")        //Window FPS
}
//Keeps track of current runTime.
function nextRunTime() {
    runTime += deltaTime/1000;
}
//When called, returns "True" if RunTime is a multiple of "timeBetweenImages" (ticks every x seconds).
function ticker() {
    if(Math.floor(runTime) % timeBetweenImages == 0) {
        if(tickPass == true) {
            return false
        }
        tickPass = true;
        return true;
    }
    else{
        tickPass = false;
        return false;
    }
}

function pickImages(amount) {
    returnImages = []
    let randNum;
    if(amount > images.length) {
        amount = images.length;
    }
    for(let i=0; i<amount; i++) {
        newRandom = false;
        while(newRandom == false) {
            randNum = Math.floor(random(images.length));
            if(!returnImages.includes(randNum)) {
                newRandom = true;
            }
        }
        returnImages[i] = randNum;
    }
    for(let i=0; i<returnImages.length;i++) {
        returnImages[i] = images[returnImages[i]]
    }
    return returnImages
}