---
layout: base
search_exclude: true
menu: nav/home.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exploding Mango</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128/examples/js/loaders/GLTFLoader.js"></script>
    <style>
        body { margin: 0; overflow: hidden; background: #FFDD57; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script>
        let scene, camera, renderer, mango, explosionPieces = [];
        let mangoLoaded = false;

        function init() {
            // Create Scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffdd57);

            // Camera
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 1.5, 5);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Global soft light
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            // Load Mango Model
            const loader = new THREE.GLTFLoader();
            loader.load("mango/scene.gltf", (gltf) => {
                mango = gltf.scene;
                mango.scale.set(1.5, 1.5, 1.5); // Adjust size
                mango.position.set(0, 0, 0);  // Center mango
                scene.add(mango);
                function animate() {
                    mango.rotation.y += 0.5;
                    renderer.render(scene, camera)
                }
                renderer.setAnimationLoop(animate)
                mangoLoaded = true;
            });

        }

        window.addEventListener("resize", () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        init();
    </script>
</body>
</html>