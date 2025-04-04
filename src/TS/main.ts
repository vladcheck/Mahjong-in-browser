import * as THREE from "three";
import "./../SASS/style.sass";

const windowSpecifications = { height: window.innerHeight, width: window.innerWidth };

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, windowSpecifications.width / windowSpecifications.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(windowSpecifications.width, windowSpecifications.height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
