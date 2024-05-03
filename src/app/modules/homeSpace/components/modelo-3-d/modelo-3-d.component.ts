import { AfterViewInit, Component, ElementRef } from '@angular/core';

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-modelo-3-d',
  standalone: true,
  imports: [],
  templateUrl: './modelo-3-d.component.html',
  styleUrl: './modelo-3-d.component.css',
  providers:[
    {provide:window, useValue:window}
  ]
})
export class Modelo3DComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit(): void {

    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.z = 0.27;

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    scene.fog = new THREE.FogExp2(0x000106, 0.002);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement);

     //Luzes da cena
     var directionalLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 1);
     scene.add(directionalLight);

    var loader = new GLTFLoader();
    loader.load('assets/models/frank.glb', function (gltf) {
        scene.add(gltf.scene);
    })

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate()
  }
}
