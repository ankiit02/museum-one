import "./style.css";
import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import * as lilgui from 'lil-gui'
import gsap from "gsap";

//canvas
const canvas = document.querySelector("canvas");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    45, // field of view
    window.innerWidth / window.innerHeight, //ascept ratio
    0.1, //near
    1000 // far
);
//camera.position.z = 5; //move it back
//scene.add(camera);

camera.position.set(-4.9, 4.4, 1.9,)
camera.rotation.set(-0.9, -0.8, -0.8)

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDumping = true;  // sense of weight 

let position = 0;

// gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('/models/museum1/scene.gltf', (gltf)=>{ 
    console.log('our model here',gltf);
    const model = gltf.scene;
    scene.add(model);

    window.addEventListener("mouseup", function(){
        console.log(camera.position);
        console.log(camera.rotation);
    });

    window.addEventListener("mouseup", function(){
        switch(position){
            case 0:
            cameraMovement(-0.58,2.77,-3.455);
            cameraRotation(-2.629,-0.672,-2.804);
            position = 1;
            break;

            case 1:
            cameraMovement(1.071, 2.712,1.132);
            cameraRotation(0.211,-0.729, 0.141);
            position = 2;
            break;
   
            case 2:
            cameraMovement(4.997, 3.338, -2.556);
            cameraRotation(-2.398, 1.132, 2.447);
            position = 3;
            break;
    
            case 3:
            cameraMovement(0.803, 3.648,1.180);
            cameraRotation(-0.226,0.663,0.140);
            position = 4;
            break;
   
            case 4:
            cameraMovement(-0.631, 0.445, -0.439);
            cameraRotation(1.582, -0.006, 2.678);
            position = 5;
            break;
            
            case 5:
            cameraMovement(-0.813, 3.511, -0.920);
            cameraRotation(-2.374, -0.065, -3.078);
            position = 6;
            break;

            case 6:
            cameraMovement(-2.068, 2.039, 0.262);
            cameraRotation(-2.152, 1.389, 2.159);
            position = 7;
            break;

            case 7:
            cameraMovement(1.671, 3.800, -2.789);
            cameraRotation(-2.871, 0.876, 2.931);
            position = 8;
            break;
           
            case 8:
            cameraMovement(-3.041, 3.661, -2.446);
            cameraRotation(-2.984, -0.780, -3.030);
            position = 9;
            break;

            case 9:
            cameraMovement(-3.129, 3.593, 1.673);
            cameraRotation(-0.104, -0.727, -0.069);
            position = 10;
            break;

            case 10:
            cameraMovement(-2.875, 2.827, 5.033);
            cameraRotation(-0.207, -0.277, -0.057);
            position = 0;
            break;
        
        }
    })
});

function cameraMovement(x, y, z){
    gsap.to(camera.position, {
        x,
        y,
        z,
        duration:3,
    });
    }
    
    
    function cameraRotation(x, y, z){
    gsap.to(camera.rotation, {
        x,
        y,
        z,
        duration:3,
    });
    }
    

const animate = () => {
    renderer.render(scene, camera);

    // controls.update();
};

renderer.setAnimationLoop(animate);

animate();
