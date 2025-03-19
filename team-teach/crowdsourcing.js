let scene,
  camera,
  renderer,
  mango,
  controls,
  explosionPieces = [];
let mangoLoaded = false;

function init() {
  // Create Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#183327");

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Camera
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 7);
  // controls

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.listenToKeyEvents(window); // optional

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 5;
  controls.maxDistance = 10;

  controls.maxPolarAngle = Math.PI / 2;

  // Lighting
  // const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Global soft light
  // scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
  directionalLight.position.set(5, 0, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // Load Mango Model
  const loader = new THREE.GLTFLoader();
  loader.load("mango/scene.gltf", (gltf) => {
    mango = gltf.scene;
    mango.scale.set(1.5, 1.5, 1.5); // Adjust size
    mango.position.set(0, -1.5, 0); // Center mango
    scene.add(mango);
    function animate(interval) {
      mango.rotation.y += 0.01;
      const amplitude = 0.1;
      const newYPosition =
        amplitude * Math.sin((Math.PI / 100) * interval) - 1.5;
      mango.position.y = newYPosition;
      renderer.render(scene, camera);
    }
    let interval = 0;
    renderer.setAnimationLoop(() => {
      animate(interval);
      controls.update();
      interval++;
      // if (interval >= 100) {
      //   interval = 0;
      // }
    });
    mangoLoaded = true;
  });
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

init();
