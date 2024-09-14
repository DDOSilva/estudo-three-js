//importa a biblioteca do three.js, THREE é o objeto que contém toda a info da biblioteca
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// cria uma cena onde podemos adicionar varias coisas
const scene = new THREE.Scene(); 

// cria uma camera com perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

// cria e configura o renderizador que sera utilizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color (0xC0C0C0 );

// cria um cubo e o adiciona a cena
const geometry = new THREE.CylinderGeometry( 8, 8, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const arena = new THREE.Mesh( geometry, material );
scene.add( arena );

// ajusta a camera na posicao z
camera.position.z = 20;

orbit = new OrbitControls(camera, renderer.domElement);

// cria as variaveis a serem utilizadas
const speed = 0.01;
const moveSpeed = 0.1;

// adiciona keydown como um evento 
document.addEventListener('keydown', onDocumentKeyDown);

// define o movimento do cubo a depender do evento 
/* function onDocumentKeyDown(event) {
    switch (event.key) {
        case 'w':
            arena.position.z -= moveSpeed; // frente: eixo Z
            break;
        case 's':
            arena.position.z += moveSpeed; // trás: eixo Z
            break;
        case 'a':
            arena.position.x -= moveSpeed; //esquerda: eixo X
            break;
        case 'd':
            arena.position.x += moveSpeed; // direita: eixo X
            break;
        case 'q':
            arena.position.y += moveSpeed;
            break;
        case 'e':
            arena.position.y -= moveSpeed;
            break;
    }
} */


// loop que irá "animar" a cena
function animate() {

    renderer.render( scene, camera ); // renderiza a cena a partir dos objetos 3d presentes em scene e da perspectiva de camera
}
