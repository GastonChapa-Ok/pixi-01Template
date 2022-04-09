import { Container, Sprite } from "pixi.js";
//extiende de Conteiner por que ClassContenedora es una clase (luego objeto) y no se puede poner en pantalla
export class ClassContenedora extends Container{

    constructor(){
        super();

        const mario: Sprite = Sprite.from("mario");
        const myMono: Sprite = Sprite.from("myMono");
    
        mario.x = 0;
        mario.y = 0;

        this.addChild(myMono);
        this.addChild(mario);

    }
};