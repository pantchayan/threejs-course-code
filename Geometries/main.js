// SIZES OF MY WINDOW
const sizes = { width: window.innerWidth, height: window.innerHeight };

// CANVAS
const canvas = document.querySelector(".webgl");

// RENDERER
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// SCENE
const scene = new THREE.Scene();

// GEOMETRY
const geometry =new THREE.TorusKnotGeometry( 1, 0.3, 16, 100 );
geometry.parameters.width = 1;
console.log(geometry)
// MATERIAL
const material = new THREE.MeshBasicMaterial({ color: "green", wireframe:true });

// MESH
const shape = new THREE.Mesh(geometry, material);
shape.position.y=2;
scene.add(shape);

// CAMERA
// fov, aspect, near, far
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.01,
  100
);
camera.position.z = 5;
camera.position.y = 1;
renderer.render(scene, camera);