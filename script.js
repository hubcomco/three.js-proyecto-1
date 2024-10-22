import * as THREE from "three";
console.log(THREE);
const scene = new THREE.Scene();
//const geometry = new THREE.BoxGeometry(1, 1, 1);
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//const mesh = new THREE.Mesh(geometry, material);

//mesh.scale.x = 2;
//mesh.scale.y = 0.25;
//mesh.scale.z = 0.5;

//mesh.rotation.x = Math.PI * 0.25;
//mesh.rotation.y = Math.PI * 0.25;

//scene.add(mesh);
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
//camera.lookAt(new THREE.Vector3(0, -1, 0));
scene.add(camera);

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3);

const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

//console.log(mesh.position.length());
//console.log(mesh.position.distanceTo(camera.position));
//console.log(mesh.position.normalize());
