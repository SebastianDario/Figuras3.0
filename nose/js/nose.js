//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);  
scene.fog = new THREE.Fog (0x76456c, 0.1, 8);
var loader = new THREE.TextureLoader();
loader.load('../Imagenes/gato.jpeg', function(texture){
    scene.background = texture; 
    });

//camaras
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 3 );
const material = new THREE.MeshBasicMaterial( {color: 0x175f50} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 5;

const geometry1 = new THREE.CapsuleGeometry( 1, 1, 4, 3 );
const material1 = new THREE.MeshBasicMaterial( {color: 0x175f50} );
const capsule1 = new THREE.Mesh( geometry, material );
scene.add( capsule1);

camera.position.z = 5;

const geometry2 = new THREE.CapsuleGeometry( 1, 1, 4, 3 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x175f50} );
const capsule2 = new THREE.Mesh( geometry, material );
scene.add( capsule2);

camera.position.z = 5;

const geometry3 = new THREE.CapsuleGeometry( 1, 1, 4, 3 );
const material3 = new THREE.MeshBasicMaterial( {color: 0x175f50} );
const capsule3 = new THREE.Mesh( geometry, material );
scene.add( capsule3 );

camera.position.z = 8;

/* var control = new THREE.OrbitControls(camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 8; */

/* const control = new THREE.PointerLockControls(  camera, renderer.domElement);
document.getElementById('button').onclick = () => {
    control.lock();
}; */
capsule.position.x = 2
capsule1.position.y = -2
capsule2.position.y = 2
capsule3.position.x = -2

const controls = new THREE.DragControls( [capsule, capsule1, capsule2, capsule3], camera, renderer.domElement );


//animation
function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.09;
    capsule1.rotation.x += 0.01;
    capsule1.rotation.y += 0.09;
    capsule2.rotation.x += 0.01;
    capsule2.rotation.y += 0.09;
    capsule3.rotation.x += 0.01;
    capsule3.rotation.y += 0.09;
	
}
animate();




