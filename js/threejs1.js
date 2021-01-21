let container;
let camera;
let renderer;
let scene;
let house;

function init(){
    container = document.querySelector('.scene');

    // create scene
    scene = new THREE.Scene();
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    // Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(1, -7, 30);
    
    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x404040,5);
    scene.add(ambient);
     
    const light = new THREE.DirectionalLight(0xffffff,5);
    light.position.set(10,10,100);
    scene.add(light);
    // Load Model
    let loader = new THREE.GLTFLoader();
    
    loader.load('./3d/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        renderer.render(scene, camera);
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene, camera);
}

init();

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);

}

window.addEventListener('resize', onWindowResize);