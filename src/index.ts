import { Application, Loader, Ticker} from 'pixi.js'
import { assets } from './assets';
import { TickerScene } from './scene/TickerScene';
//import { UIDemo } from './scene/UIDemo';
import { Keyboard } from './utils/Keyboard';


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

Keyboard.initialize();

//Rescalado de relación de aspecto
window.addEventListener("resize", ()=>{

	//--Si cambio el tamaño en el chrome se adapta la imagen segun la pestaña--//

	//window.innerWidth: ancho de la pantalla
	//app.screen.width: ancho del juego

	const scaleX = window.innerWidth/app.screen.width
	const scaley = window.innerHeight/app.screen.height
	const scale = Math.min(scaleX,scaley);

	const screenWidth = app.screen.width * scale;
	const screenHeight = app.screen.height * scale;

	//centrar la imagen
	//Math.round = redondea para sacar los decimales
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

	app.view.style.width = screenWidth + "px";
	app.view.style.height = screenHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";
	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
	//-------------------------------------------------------------------------//
})

//Llama al evento resize para forzar su tamaño
window.dispatchEvent(new Event("resize"));

//muestra la imagen en el momento sin descargarla
//Sprite.from("./dino.png");
/*
//const myLoader = new Loader();
//Loader permite descargar las imagenes de la url especificada
//Se agrego las imagenes para
Loader.shared.add({url: "./donkeyKong.png", name : "myMono"})
Loader.shared.add({url: "./clampy.png", name : "clampy)"})
Loader.shared.add({url: "./marioBros.png", name : "mario"})
*/
Loader.shared.add(assets);

//Function Realiza al completar de descargar las imagenes
Loader.shared.onComplete.add(() =>{
	
	//clampy.anchor.set(0);
	
	//Cambia el punto de anclaje de la figura
	//queda anclada desde el centro
	//clampy.anchor.set(0.5);

	//Centro de la pantalla
	//clampy.x = app.screen.witdh / 2;
	//clampy.y = app.screen.height / 2;

	//clampy.x = 0;
	//clampy.y = 0;

	//Setea el tamaño de la imagen
	//myMono.scale.set(0.5,0.5);

	//Setea la posicion de la imagen
	//myMono.position.set(400,10);

	//Agrega la imagen a la pantalla (escenario)
	//app.stage.addChild(myMono);
	//app.stage.addChild(mario);

	
	//const myScene:Scene = new Scene();
	//app.stage.addChild(myScene);

	//const myScene = new UIDemo();
	//app.stage.addChild(myScene);

	//const boyAnim = new Clase05();
	const myScene = new TickerScene();
	app.stage.addChild(myScene);

	Ticker.shared.add(function (deltaframe){
		myScene.update(Ticker.shared.deltaMS, deltaframe);
	})

});

//Carga las imagenes a nuestro navegador
Loader.shared.load();