let scene,
  camera,
  renderer,
  mango,
  controls,
  heating,
  boom,
  explosionPieces = [];
let mangoLoaded = false;

function riseMangoLevel() {
  const body = document.body;
  body.style.margin = "0";
  body.style.height = "100vh";
  body.style.overflow = "hidden";
  body.style.position = "relative";

  const orangeDiv = document.createElement("div");
  orangeDiv.style.position = "absolute";
  orangeDiv.style.bottom = "0";
  orangeDiv.style.left = "0";
  orangeDiv.style.width = "100%";
  orangeDiv.style.height = "0";
  orangeDiv.style.backgroundColor = "orange";

  body.appendChild(orangeDiv);

  let height = 0;

  function fillUp() {
    height += 0.25;
    orangeDiv.style.height = `${height}%`;
    if (height < 100) {
      requestAnimationFrame(fillUp);
    }
    if (height >= 100) {
      setTimeout(() => {
        window.location.replace("/DataMango/team-teach/crowdsourcingLesson");
      }, 1000);
    }
  }

  fillUp();
}

function init() {
  // Create Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#183327");
  scene.fog = new THREE.Fog("#3f7b9d", 10, 15);

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

  function createParticleExplosion(x, y, z) {
    const particleCount = 100; // Number of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Set initial positions at the mango's position
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assign random velocities for explosion effect
      velocities[i * 3] = (Math.random() - 0.5) * 2; // X-axis
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 2; // Y-axis
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 2; // Z-axis
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particlesGeometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xff9900, // Mango-like color
      size: 0.1,
      transparent: false,
      opacity: 1,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animate particles
    let life = 100; // Lifetime of particles
    function animateParticles() {
      if (life <= 0) {
        scene.remove(particles);
        return;
      }

      const positions = particles.geometry.attributes.position.array;
      const velocities = particles.geometry.attributes.velocity.array;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3] * 0.1; // Move X
        positions[i * 3 + 1] += velocities[i * 3 + 1] * 0.1; // Move Y
        positions[i * 3 + 2] += velocities[i * 3 + 2] * 0.1; // Move Z

        velocities[i * 3 + 1] -= 0.01; // Apply gravity
      }

      particles.geometry.attributes.position.needsUpdate = true;
      life--;
      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // Load Mango Model
  const loader = new THREE.GLTFLoader();
  loader.load("mango/scene.gltf", (gltf) => {
    mango = gltf.scene;
    mango.Name = "mango";
    mango.scale.set(1.5, 1.5, 1.5); // Adjust size
    mango.position.set(0, -1.5, 0); // Center mango
    scene.add(mango);
    function animate(interval) {
      if (boom) {
        createParticleExplosion(0, 0, 0);
        riseMangoLevel();
        scene.remove(mango);
      }
      if (heating) {
        mango.traverse((child) => {
          if (child.isMesh && child.material) {
            if (!child.material.emissive) {
              child.material.emissive = new THREE.Color("#ff9900"); // Set emissive color
            }
            child.material.emissiveIntensity = Math.min(
              (child.material.emissiveIntensity || 0) + 1,
              100,
            );
            if (child.material.emissiveIntensity >= 100) {
              console.log("hi");
              heating = false;
              boom = true;
            }
          }
        });
      }

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
    });
    mangoLoaded = true;
  });
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener("click", onMouseClick, false);
function onMouseClick(event) {
  // Calculate normalized mouse coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Get intersecting objects
  const intersects = raycaster.intersectObjects(scene.children, true); // true for recursive check

  // Check if any objects were intersected
  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    // Perform default actions for other objects
    if ((clickedObject.Name = "mango")) {
      clickedObject.material.color.set("#FFC300"); // Set the base color
      clickedObject.material.emissive.set("#FFC300"); // Add glow effect
      heating = !heating;
    }
  }
}
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

init();
