import { Container, Sprite, Text, Texture} from "pixi.js";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";

export class UIDemo extends Container{
    
    private buttonMouse:Button;
    private lastKeyPressed:Text;
    constructor(){

        super();

        const dialog:Container = new Container();
        dialog.x = 100;
        dialog.y = 50;

        const background = Sprite.from("Windows2");
        dialog.addChild(background);

        this.buttonMouse = new Button(Texture.from("BUp"),
                                        Texture.from("BDown"),
                                        Texture.from("BOver"),
                                        this.onButtonClick);
        
        this.buttonMouse.x = background.width/3 - this.buttonMouse.width * 0.6;
        this.buttonMouse.y = this.buttonMouse.height + 20;
        dialog.addChild(this.buttonMouse);        

        const buttonTouch = Sprite.from("Buttom Default Touch");
        buttonTouch.anchor.set(0.5);
        //buttonTouch.on("touchstart", this.onTouchStart, this);
        //buttonTouch.on("touchend", this.onTouchEnd, this);
        //buttonTouch.interactive = true;
        buttonTouch.x = buttonTouch.width/2 - buttonTouch.width * 0.6;
        buttonTouch.y = buttonTouch.y;
        dialog.addChild(buttonTouch);

        const buttonPointer = Sprite.from("Buttom Default Pointer");
        buttonPointer.anchor.set(0.5);
        buttonPointer.x = buttonPointer.width/2;
        buttonPointer.y = buttonPointer.y + 200;
        //buttonPointer.on("pointerdown", this.onPointerDown, this);
        //buttonPointer.on("pointerup", this.onPointerUp, this);
        //buttonPointer.interactive = true;
        dialog.addChild(buttonPointer);

        this.lastKeyPressed = new Text("Waiting ...", {fontSize:48});
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.x = background.width/2;
        this.lastKeyPressed.y = buttonPointer.y + 175;
        dialog.addChild(this.lastKeyPressed);

        //document.addEventListener("keydown", this.onKeyDown.bind(this));
        //document.addEventListener("keyup", this.onKeyUp.bind(this));

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyBUp, this);

        this.addChild(dialog);
    }

    private onKeyB():void{
        console.log("aprete la B", this);
    }

    private onKeyBUp():void{
        console.log("solte la B", this);
    }
/*
    private onTouchStart():void{
        console.log("Touch start");
    }

    private onTouchEnd():void{
        console.log("Touch end");
    }

    private onPointerUp():void{
        console.log("Pointer start");
    }

    private onPointerDown():void{
        console.log("Pointer end");
    }
*/
    private onButtonClick():void{
        console.log("Llamo a la funcion pasada como parametro.");
        console.log("Estado de la tecla presionada", Keyboard.state.get("KeyA"));
    }
/*
    private onKeyDown(e:KeyboardEvent):void{
        console.log("Key pressed!", e.code)
        this.lastKeyPressed.text = e.code;
    }

    private onKeyUp(e:KeyboardEvent):void{
        console.log("Key pressed!", e.code)
        this.lastKeyPressed.text = e.code;
    }
*/
}