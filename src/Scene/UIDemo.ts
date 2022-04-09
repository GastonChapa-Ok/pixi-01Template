import { Container, Sprite, Text} from "pixi.js";

export class UIDemo extends Container{
    
    constructor(){

        super();

        const dialog:Container = new Container();
        dialog.x = 100;
        dialog.y = 50;

        const background = Sprite.from("Button1");
        dialog.addChild(background);

        const buttonMouse = Sprite.from("BSimple");
        buttonMouse.anchor.set(0.5);
        //buttonMouse.x = background.width/2 - buttonMouse.width * 0.6;
        buttonMouse.x = 1280/2 - buttonMouse.width * 0.6;
        buttonMouse.y = buttonMouse.height + 20;
        buttonMouse.on("mousedown", this.onMouseDown, this);
        buttonMouse.interactive = true;
        dialog.addChild(buttonMouse);

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

        const lastKeyPressed = new Text("Waiting ...", {fontSize:48});
        lastKeyPressed.anchor.set(0.5);
        lastKeyPressed.x = buttonPointer.width/2;
        lastKeyPressed.y = buttonPointer.y + 175;
        dialog.addChild(lastKeyPressed);

        this.addChild(dialog);
    }

    private onMouseDown():void{
        console.log("mouse down",12)

    }
}