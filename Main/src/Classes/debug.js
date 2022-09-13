class debugPanel {
    constructor(x=0,y=0,{
        direction='RIGHT',
        fixedEntries=0,
        TextSize=32,
        TextColor=(255,255,255),
    }={}) {
        if(typeof(x)=="string") {
            this.rawX = x;
            this.refX = eval(x);
        }
        else {
            this.rawX = null;
            this.refX = x;
        }
        if(typeof(y)=="string") {
            this.rawY = y;
            this.refy = eval(y);
        }
        else {
            this.rawY = null;
            this.refY = y;
        }
        this.actualX = this.refX;
        this.actualY = this.refY;
        this.direction = direction;
        if(fixedEntries == 0) {
            this.fixedEntries = false;
        }
        else {
            this.fixedEntries = fixedEntries;
        }
        this.TextSize=TextSize;
        this.TextColor=TextColor;
        this.entries = [];
    }
    addEntry(name,source) {
        this.entries.push(
            {
                name: name,
                source: source,
                data: null
            }
        )
    }
    render() {
        if(this.rawX != null) {
            this.refX = eval(this.rawX);
        }
        if(this.rawY != null) {
            this.refY = eval(this.rawY);
        }
        for(let i=0;i<this.entries.length;i++) {
            this.entries[i].data = eval(this.entries[i].source);
        }
        textSize(this.TextSize);
        fill(this.TextColor[0],this.TextColor[1],this.TextColor[2]);
        for(let i=0;i<this.entries.length;i++) {
            let genText = (this.entries[i].name+": "+this.entries[i].data) 
            this.reposition(textWidth(genText));
            text(genText,this.actualX,this.actualY+(i+1)*textAscent());
        }
    }
    reposition(genText) {
        if(this.direction=="LEFT") {
            this.actualX = this.refX - genText;
            this.actualY = this.refY;
        }
        else {
            this.actualX = this.refX;
        }
    }
}