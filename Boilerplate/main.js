// RENDERER
// SCENE
// MESH
// GEOMETRY
// MATERIAL
// CAMERA

const sizes = { width: window.innerWidth, height: window.innerHeight };
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "green" });

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

// fov, aspect, near, far
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.01,
  100
);
camera.position.z = 5;
camera.position.y = 1;
camera.position.x = 2;
renderer.render(scene, camera);