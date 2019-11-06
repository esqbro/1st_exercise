class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeNewDiv() {
        let myDiv = document.createElement('div');
        myDiv.innerHTML = 'новый элемент создан';
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px;
        text-align:${this.textAlign};`;
        myDiv.style.cssText = param;

        document.body.prepend(myDiv);

    }
}

let firstItem = new Options(200, 250, 'green', 50, 'center');
let secondItem = new Options(400, 600, 'yellow', 90, 'centesr');
firstItem.makeNewDiv();
secondItem.makeNewDiv();