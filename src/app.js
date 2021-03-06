import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const {innerWidth, innerHeight, requestAnimationFrame} = window;

const scene = new Scene();
scene.background = new Color(0xbfd1e5);

const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0xe1f000});
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();
