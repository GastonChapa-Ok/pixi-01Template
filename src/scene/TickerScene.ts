import { AnimatedSprite, Container, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";

export class TickerScene extends Container implements IUpdateable{
    private boyAnimated:AnimatedSprite;

    constructor(){
        super();

        this.boyAnimated = new AnimatedSprite(
            [
                Texture.from("Run01"),
                Texture.from("Run02"),
                Texture.from("Run03"),
                Texture.from("Run04"),
                Texture.from("Run05"),
                Texture.from("Run06"),
                Texture.from("Run07"),
                Texture.from("Run08"),
        ], true);
        
        this.boyAnimated.play();
        this.boyAnimated.animationSpeed = 0.35;
        
        this.addChild(this.boyAnimated);

        //Ticker.shared.add(this.update,this);
    }
    update(_deltaTime: number, deltaFrame: number): void {
        this.boyAnimated.update(deltaFrame);
    }
/*
    private update(deltaFrame:number){

        if (Keyboard.state.get("KeyA")){
            this.boyAnimated.x++;
        }
        //deltaFrame = deltaFrame * .50;
        //this.boyAnimated.update(deltaFrame);

        console.log(deltaFrame, Ticker.shared.FPS, Ticker.shared.deltaMS);
    }
    */
}
