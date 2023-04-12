import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const button1 = document.querySelector('.choose');
const button2 = document.querySelector('.choose1');
const button3 = document.querySelector('.choose2');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = false;

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xfff5600, wireframe: true } );
const sphere = new THREE.Mesh( geometry, material );

let textPlanet = new THREE.TextureLoader().load('question.png');
let textPlanet1 = new THREE.TextureLoader().load('earf.jpg');
let textPlanet2 = new THREE.TextureLoader().load('moon.webp');
let textPlanet3 = new THREE.TextureLoader().load('sun.jpg');




const planet = new THREE.Mesh(
  new THREE.SphereGeometry(15, 32, 16),
  new THREE.MeshBasicMaterial({ map: textPlanet })
);

const planet1 = new THREE.Mesh(
  new THREE.SphereGeometry(16, 33, 17),
  new THREE.MeshBasicMaterial({ map: textPlanet1 })
);

const planet2 = new THREE.Mesh(
  new THREE.SphereGeometry(16, 33, 17),
  new THREE.MeshBasicMaterial({ map: textPlanet2 })
);

const planet3 = new THREE.Mesh(
  new THREE.SphereGeometry(16, 33, 17),
  new THREE.MeshBasicMaterial({ map: textPlanet3 })
);

button1.addEventListener('click', function() {
  scene.remove(planet);
  scene.remove(planet2);
  scene.remove(planet3);
  scene.add(planet1);
  
  

});

button2.addEventListener('click', function() {
  scene.remove(planet1);
  scene.remove(planet3);
  scene.add(planet2)

 
  

});

button3.addEventListener('click', function() {
  scene.remove(planet1);
  scene.remove(planet2)
  scene.add(planet3)

 
  

});

scene.add(sphere);



camera.position.z = 50;

const light = new THREE.AmbientLight( 0x404040 ); 

scene.add( light );


function animate () {
  requestAnimationFrame( animate );
  

  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.0001;
  
  planet.rotation.y += 0.005;
  planet.rotation.z += 0.0001;

  planet1.rotation.y += 0.005;
  planet1.rotation.z += 0.0001;

  planet2.rotation.y += 0.005;
  planet2.rotation.z += 0.0001;

  planet3.rotation.y += 0.005;
  planet3.rotation.z += 0.0001;
 
  controls.update();

  renderer.render(scene, camera);
}

animate()

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 5, 1000);

// const renderer = new THREE.WebGL1Renderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

// camera.position.setZ(30);

// renderer.render(scene, camera);

// // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// // const material = new THREE.MeshStandardMaterial( {color: 0xF1387} );
// // const torus = new THREE.Mesh(geometry, material);

// // scene.add(torus)

// const pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set(100,100,100);

// const ambientLight = new THREE.AmbientLight(0xfffffff)

// scene.add(pointLight, ambientLight);



// const lightHelper = new THREE.PointLightHelper(pointLight)
// // const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper)

// const controls = new OrbitControls(camera, renderer.domElement);


// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial( { color: 0xfffffff })
//   const star = new THREE.Mesh( geometry, material);
//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

//   star.position.set(x,y,z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar)

// function animate () {
//   requestAnimationFrame( animate );
  

  // torus.rotation.x += 0.001;
  // torus.rotation.y += 0.009;
  // torus.rotation.z += 0.01;

  // controls.update();


//   renderer.render(scene, camera);
// }

// animate();

// let color = new THREE.Color( 0xFFB6C1 );

// const loader = new OBJLoader();

// loader.load('castle.obj', function (object) {
//   object.traverse( function (obj) {
//     if (obj.isMesh){
//       obj.material.color.set(0xFB43C1);
//     }
//   } );
// scene.add( object );
// });
// renderer.render(scene, camera);