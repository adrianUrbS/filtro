var caderaDerechaX = 0;
var caderaDerechaY = 0;
var distancia = 0;
function preload(){
titulo = loadImage("new_wwe_undisputed_championship_render_by_testimentv_dfyt76y-pre.png")
}

function setup(){
canvas = createCanvas(360,360);
background("line");
video = createCapture(VIDEO)
video.hide();
poses = ml5.poseNet(video, listo);
poses.on("pose", respuesta);
}

function draw(){
image(video,0,0,400,400);
medida = distancia * 2; 
image(titulo,caderaDerechaX - medida +40, caderaDerechaY - medida +80, medida, medida / 2);
}

function listo() {
  console.log("las poses estan listas");  
}

function respuesta(resultados) {
    if (resultados && resultados.length > 0) {
       console.log(resultados);
      caderaDerechaX = resultados[0].pose.rightHip.x;  
      caderaDerechaY = resultados[0].pose.rightHip.y;
      caderaIzquierdaX = resultados[0].pose.leftHip.x;
      distancia = caderaIzquierdaX - caderaDerechaX;  
    }
}