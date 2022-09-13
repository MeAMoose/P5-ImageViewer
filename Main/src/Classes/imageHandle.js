function handleImage(img=missingImg,x=0,y=0,xMax=window.innerWidth,yMax=window.innerHeight) {
    let width = img.width;
    let height = img.height;
    //Local of window dimensions/constraints of image.
    let screenWidth = xMax;
    let screenHeight = yMax;
    //Used for scaling.
    let scaleH = screenHeight/height
    let scaleW = screenWidth/width
    if(height/9 >= width/16) {
        image(img,((screenWidth-(width*scaleH))/2)+x,0+y,(width*scaleH),(height*scaleH));
    }
    else {
        image(img,0+x,((screenHeight-(height*scaleW))/2)+y,(width*scaleH),(height*scaleH));
    }
}

function quadImage(img1=missingImg, img2=missingImg, img3=missingImg, img4=missingImg) {
    if(typeof(img1)=="object") {
        img2=img1[1];
        img3=img1[2];
        img4=img1[3];
        img1=img1[0];
    }
    handleImage(img1,0,0,window.innerWidth/2,window.innerHeight/2);             //Top Left
    handleImage(img2,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);   //Top Right
    handleImage(img3,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);  //Bottom Left
    handleImage(img4,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);   //Bottom Right
}