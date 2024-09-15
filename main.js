// import the three.js library, THREE is the object that contains all the library info
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { roughness } from 'three/webgpu'; // one of the properties of the material used in the arena

// creates scene and perspective camera
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

// creates and configures used renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// changes the background color
scene.background = new THREE.Color ( 0x1FDE9A );

// creates a light in the scene (improves visibility)
const light = new THREE.DirectionalLight(0xffffff, 4);
light.position.set(15, 15, 15);
scene.add(light);

// variables that define the size of the arena
const arenaRadius = 385;
const arenaHeight = 11;
// geometry of the arena
const arenaGeometry = new THREE.CylinderGeometry( arenaRadius, arenaRadius, arenaHeight, 96 ); // parameter 4: level of "detail" of the geometry
const arenaMaterial = new THREE.MeshStandardMaterial( { // arena material
    color: 0x000000,
    roughness: 0.5
});

const arena = new THREE.Mesh( arenaGeometry, arenaMaterial ); // adds the material and geometry to the arena
scene.add( arena ); // adds the arena to the scene

const borderAdjust = 10;
const borderGeometry = new THREE.CylinderGeometry( arenaRadius + borderAdjust, arenaRadius + borderAdjust, arenaHeight - 1, 96);
const borderMaterial = new THREE.MeshStandardMaterial( { // material of the white border around the arena
    color: 0xFFFFFF,
    roughness: 0.5
});

const border = new THREE.Mesh( borderGeometry, borderMaterial ); // adds the material and geometry to the border
scene.add( border ); // adds the border to the scene

// adjusts the camera on the z position
camera.position.z = 500;
camera.position.y = 50;

// creates the variables to be used
const speed = 0.01;
const moveSpeed = 0.1;           

// creates the orbit that allows movement around the scene with the mouse
orbit = new OrbitControls(camera, renderer.domElement); 

// loop that will "animate" the scene
function animate() {
    renderer.render( scene, camera ); // renders the scene from the 3d objects present in scene and the perspective of camera
}

animate();
