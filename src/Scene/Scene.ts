import { AnimatedSprite, Container, Graphics, Point, Texture, Text } from "pixi.js";
import { ClassContenedora } from "../ClassContenedora";

import { UIDemo } from "./UIDemo";

export class Scene extends Container{
    constructor(){
        super();

        const claseContenedora: ClassContenedora = new ClassContenedora();

        claseContenedora.scale.set(0.5);
        claseContenedora.position.set(300,10);
 
        this.addChild(claseContenedora);
        console.log(claseContenedora.toGlobal(new Point()));

        const claseContenedora2: ClassContenedora = new ClassContenedora();
        this.addChild(claseContenedora2);

        const boyAnimated:AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("Run01"),
                Texture.from("Run02"),
                Texture.from("Run03"),
                Texture.from("Run04"),
                Texture.from("Run05"),
                Texture.from("Run06"),
                Texture.from("Run07"),
                Texture.from("Run08"),
            ], true
        );
        boyAnimated.play();
        boyAnimated.animationSpeed = 0.35;
        boyAnimated.scale.set(.5);
        this.addChild(boyAnimated);

        const uiDemo:UIDemo = new UIDemo();
        this.addChild(uiDemo);

        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle({color: 0xFF00FF, width:10, alpha:1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(300,500);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width:10, alpha:1});
        myGraph.beginFill(0X00F00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100);

        myGraph.position.set(720,360);

        this.addChild(myGraph);

        //Text nativo de Pixijs
        const myText:Text = new Text("Hello World",{fontSize:40, fill:0x00ff00});
        myText.text ="Se agrega nuevo texto";
        myText.position.x = 500;
        myText.position.x = 100;
        this.addChild(myText);


    }
} 