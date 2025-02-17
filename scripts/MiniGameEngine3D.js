import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

document.addEventListener("DOMContentLoaded", function() {
    // ✅ Get the Game Container Div
    const container = document.getElementById('gameContainer');
    if (!container) {
        console.error("❌ ERROR: #gameContainer not found!");
        return;
    }

    // ✅ Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // ✅ Load OBJ Model
    const loader = new OBJLoader();
    let objModel = null;  // ✅ Store the object globally

    loader.load(
        './models/VideoShip.obj',  // ✅ Update this path if needed
        function (object) {
            objModel = object;  // ✅ Store in global variable
            objModel.scale.set(1, 1, 1);
            objModel.position.set(0, 0, 0);
            scene.add(objModel);
            console.log("🎉 OBJ Model Loaded!");
        },
        function (xhr) {
            console.log(`Loading: ${Math.round((xhr.loaded / xhr.total) * 100)}% complete`);
        },
        function (error) {
            console.error("❌ Error loading OBJ:", error);
        }
    );

    // ✅ Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // ✅ Camera Position
    camera.position.set(0, 10, 10);
    camera.lookAt(0, 0, 0);
    camera.rotation.x = -Math.PI / 4;

    // ✅ Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        // ✅ Rotate the object ONLY if it's loaded
        if (objModel) {
            objModel.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }
    animate();

    // ✅ Handle Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});
