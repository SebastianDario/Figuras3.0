//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
var loader = new THREE.TextureLoader();
loader.load('../Como/img/agua.jpg', function(texture){
    scene.background = texture; 
    });

//camaras
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria
const geometry = new THREE.BoxGeometry( 4, 2, 3 );
const textureLoader = new THREE.TextureLoader;
const matcap = textureLoader.load('../Como/img/madera.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap
material.flatShading = true;
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 5;

//animation
function animate() {
	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.05;
	renderer.render( scene, camera );
}
animate();
