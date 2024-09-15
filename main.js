//importa a biblioteca do three.js, THREE é o objeto que contém toda a info da biblioteca
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { roughness } from 'three/webgpu'; // uma das propriedades do material utilizado na arena

// cria uma cena onde podemos adicionar varias "coisas"
const scene = new THREE.Scene(); 

// cria uma camera com perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 


// cria e configura o renderizador que sera utilizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// altera a cor do plano de fundo
scene.background = new THREE.Color ( 0xAEF7DD );

// cria uma luz a cena (facilita a visualizacao)
const light = new THREE.DirectionalLight(0xffffff, 4);
light.position.set(15, 15, 15);
scene.add(light);

// variaveis que definem o tamanho da arena
const arenaRadius = 385;
const arenaHeight = 11;
// geometria da arena
const arenaGeometry = new THREE.CylinderGeometry( arenaRadius, arenaRadius, arenaHeight, 96 ); // parametro 4: nivel de "detalhamento" da geometria
const arenaMaterial = new THREE.MeshStandardMaterial( { // material da arena
    color: 0x000000,
    roughness: 0.5
});

const arena = new THREE.Mesh( arenaGeometry, arenaMaterial ); // adiciona o material e a geometria a arena
scene.add( arena ); // adiciona a arena a cena

const borderAdjust = 10;
const borderGeometry = new THREE.CylinderGeometry( arenaRadius + borderAdjust, arenaRadius + borderAdjust, arenaHeight - 1, 96);
const borderMaterial = new THREE.MeshStandardMaterial( { // material da borda branca ao redor da arena
    color: 0xFFFFFF,
    roughness: 0.5
});

const border = new THREE.Mesh( borderGeometry, borderMaterial ); // adiciona o material e a geometria a borda
scene.add( border ); // adiciona a borda a cena

// ajusta a camera na posicao z
camera.position.z = 500;
camera.position.y = 50;

// cria as variaveis a serem utilizadas
const speed = 0.01;
const moveSpeed = 0.1;           
               
// cria a orbita que permite mexer ao redor da cena com o mouse
orbit = new OrbitControls(camera, renderer.domElement); 

// loop que irá "animar" a cena
function animate() {
    renderer.render( scene, camera ); // renderiza a cena a partir dos objetos 3d presentes em scene e da perspectiva de camera
}

animate();