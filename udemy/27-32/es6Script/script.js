class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv(text = "Введите текст") {
        let div = document.createElement('div');
            div.innerHTML = text;
        div.style.cssText =  `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        return div;
    }
    
    newObj() {
        let Obj = {
            height: this.height,
            width: this.width,
            bg: this.bg,
            fontSize: this.fontSize,
            textAlign: this.textAlign
        };
        return Obj;
    }
}

let obj = new Options('300px', '400px', 'red', '17px', 'center'),
    classObj = obj.newObj();
    
    console.log(classObj);
    
    document.body.prepend(obj.newDiv("Это текст для блока"));