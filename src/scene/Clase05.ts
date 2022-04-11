import { Container } from "pixi.js";
import { TickerScene } from "./TickerScene";

export class Clase05 extends Container{
    
    constructor(){
        super();
        
        const contenedorAnim:Container = new Container();

        const boyAnim:TickerScene = new TickerScene();
        contenedorAnim.addChild(boyAnim);
        this.addChild(contenedorAnim);

    }
}