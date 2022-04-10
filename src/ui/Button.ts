import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{

    private def:Texture;
    private down:Texture;
    private over:Texture;

    private spr:Sprite;

    constructor(def:Texture, down:Texture, over:Texture){
        super();

        this.def = def;
        this.down = down;
        this.over = over;
        
        this.spr = Sprite.from("BUp");
        this.spr.anchor.set(0.5);
        this.addChild(this.spr);
        
        this.spr.interactive = true;

        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);
        this.spr.on("mouseover", this.onMouseOver, this);
        this.spr.on("mouseout", this.onMouseOut, this);
    }

    private onMouseUp():void{
        console.log("Suelto el mouse");
        console.log("Cuando suelto el boton tiene que hacer algo");
        this.emit("buttonClick");
        this.spr.texture = this.over;
    }

    private onMouseDown():void{
        console.log("Aprieto el boton")
        this.spr.texture = this.down;
    }

    private onMouseOver():void{
        console.log("Entro con el mouse");
        this.spr.texture = this.over ;
    }

    private onMouseOut():void{
        console.log("Cuando salga");
        this.spr.texture = this.def;

    }
}