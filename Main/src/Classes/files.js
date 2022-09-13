function loadData() {
    imagesRaw = loadJSON("images.json")
}
function parseData() {
    let counter = 0;
    for(const key in imagesRaw) {
        images[counter] = loadImage("Assets/"+imagesRaw[key]);
        counter+=1;
    }
    missingImg = loadImage("Assets/missing.png")
}