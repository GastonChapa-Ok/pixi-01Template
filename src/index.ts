import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	//width: 640,
	//height: 480
	width: 1280,
	height: 960
});

//const myLoader = new Loader();
//Se agrego las imagenes para
Loader.shared.add({url: "./donkeyKong.png", name : "myMono"})
Loader.shared.add({url: "./clampy.png", name : "Clampy)"})

//Function
Loader.shared.onComplete.add(() =>{
	const clampy: Sprite = Sprite.from("myMono");

	console.log("Hola mi mundo!", clampy.width, clampy.height);

	//clampy.anchor.set(0);

	clampy.x = 0;
	clampy.y = 0;

	app.stage.addChild(clampy);
});

//Descarga de la imagenes
Loader.shared.load();