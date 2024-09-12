//importa a biblioteca do three.js, THREE é o objeto que contém toda a info da biblioteca
import * as THREE from 'three';

// cria uma cena onde podemos adicionar varias coisas
const scene = new THREE.Scene(); 

// cria uma camera com perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

// cria e configura o renderizador que sera utilizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// cria um cubo e o adiciona a cena
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// ajusta a camera na posicao z
camera.position.z = 5;

// cria as variaveis a serem utilizadas
let isRotating = true;
const speed = 0.01;
const moveSpeed = 0.1;

// adiciona keydown como um evento 
document.addEventListener('keydown', onDocumentKeyDown);

// define o movimento do cubo a depender do evento 
function onDocumentKeyDown(event) {
    switch (event.key) {
        case '1':
            isRotating = true; // ativa a rotação
            break; 
        case '0':
            isRotating = false; // desativa a rotação
            break;
        case 'w':
            cube.position.z -= moveSpeed; // frente: eixo Z
            break;
        case 's':
            cube.position.z += moveSpeed; // trás: eixo Z
            break;
        case 'a':
            cube.position.x -= moveSpeed; //esquerda: eixo X
            break;
        case 'd':
            cube.position.x += moveSpeed; // direita: eixo X
            break;
    }
}


// loop que irá "animar" a cena
function animate() {
    if (isRotating) { // condição para rotação do cubo (nos eixos x e y)
        cube.rotation.x += speed;
        cube.rotation.y += speed;
    }

    renderer.render( scene, camera ); // renderiza a cena a partir dos objetos 3d presentes em scene e da perspectiva de camera
}
