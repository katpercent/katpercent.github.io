import * as THREE from 'three';

class MiniGameEngine {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.objects = [];
        this.initLighting();
        this.animate();

        window.addEventListener('resize', () => this.onWindowResize());
    }

    initLighting() {
        const light = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(light);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        this.scene.add(dirLight);
    }

    addObject(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.objects.forEach(obj => obj.rotation.y += 0.01);
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

export default MiniGameEngine;

