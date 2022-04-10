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
                                        Texture.from("BOver")
        );

        this.buttonMouse.on("buttonClick", this.onButtonClick, this);
        
        this.buttonMouse.x = background.width/3 - this.buttonMouse.width * 0.6;
        this.buttonMouse.y = this.buttonMouse.height + 20;
        dialog.addChild(this.buttonMouse);        

        const buttonTouch = Sprite.from("Buttom Default Touch");
        buttonTouch.anchor.set(0.5);
        buttonTouch.x = buttonTouch.width/2 - buttonTouch.width * 0.6;
        buttonTouch.y = buttonTouch.y;
        dialog.addChild(buttonTouch);

        const buttonPointer = Sprite.from("Buttom Default Pointer");
        buttonPointer.anchor.set(0.5);
        buttonPointer.x = buttonPointer.width/2;
        buttonPointer.y = buttonPointer.y + 200;
        dialog.addChild(buttonPointer);

        this.lastKeyPressed = new Text("Waiting ...", {fontSize:48});
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.x = background.width/2;
        this.lastKeyPressed.y = buttonPointer.y + 175;
        dialog.addChild(this.lastKeyPressed);

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

    private onButtonClick():void{
        console.log("mi nuevo boton clickeado",this);
    }
}