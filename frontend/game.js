var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth*.60, window.innerHeight*.60);

dom = document.getElementById("MainContainer");
dom.appendChild(renderer.domElement);

var sphereGeometry = new THREE.DodecahedronGeometry(0.2, 1);
var sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xe5f2f2, shading: THREE.FlatShading })
jumping = false;
heroSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
heroSphere.receiveShadow = true;
heroSphere.castShadow = true;
scene.add(heroSphere);
heroSphere.position.y = 0.08;
heroSphere.position.z = 4.8;
currentLane = 0;
heroSphere.position.x = currentLane;

camera.position.z = 10;

var animate = function () {
    requestAnimationFrame(animate);

    heroSphere.rotation.x += 0.01;
    heroSphere.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

