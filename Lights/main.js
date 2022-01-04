import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

// SIZES OF MY WINDOW
const sizes = { width: window.innerWidth, height: window.innerHeight };

// CANVAS
const canvas = document.querySelector(".webgl");

// RENDERER
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  console.log(camera);

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
});

// SCENE
const scene = new THREE.Scene();

// GEOMETRY
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 100);

// MATERIAL
const material = new THREE.MeshStandardMaterial({ color: "white" });

// MESH
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

// CAMERA
// fov, aspect, near, far
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.01,
  100
);
camera.position.z = 7;
renderer.render(scene, camera);

// Light
const directionalLight = new THREE.DirectionalLight("grey", 1);
directionalLight.position.set(10, 2, 10);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight("grey", 0.5);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight("red", "blue", 1);
scene.add(hemisphereLight);

// let helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
// scene.add( helper );

// helper = new THREE.HemisphereLightHelper( hemisphereLight, 5 );
// scene.add( helper );

const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
controls.update();

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

animate();
