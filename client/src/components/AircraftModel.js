import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function AircraftModel() {
  const containerRef = useRef();
  const [selectedDot, setSelectedDot] = useState(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Get container dimensions
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Set renderer size and add to container
    renderer.setSize(width, height);
    renderer.setClearColor('#e0e0e0'); // Light grey background
    container.appendChild(renderer.domElement);

    // Add grid helper
    const gridHelper = new THREE.GridHelper(50, 50); // Size 50x50 units, 50 divisions
    scene.add(gridHelper);

    // Setup raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const markers = []; // Store markers for raycasting

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create defect marker function with hover state
    const createDefectMarker = (position, index) => {
      const geometry = new THREE.SphereGeometry(0.25, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        metalness: 0.5,
        roughness: 0.5
      });
      const marker = new THREE.Mesh(geometry, material);
      marker.position.copy(position);
      marker.userData.index = index; // Store index for identification
      marker.userData.defaultColor = 0xff0000;
      marker.userData.hoverColor = 0xff6666;
      marker.userData.selectedColor = 0xff3333;
      markers.push(marker); // Add to markers array for raycasting
      return marker;
    };

    // Handle mouse move for hover effect
    function onMouseMove(event) {
      // Calculate mouse position in normalized device coordinates
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(markers);

      // Reset all markers to default color except selected one
      markers.forEach(marker => {
        if (marker !== selectedDot) {
          marker.material.emissive.setHex(marker.userData.defaultColor);
        }
      });

      // Change color of hovered marker
      if (intersects.length > 0 && intersects[0].object !== selectedDot) {
        intersects[0].object.material.emissive.setHex(intersects[0].object.userData.hoverColor);
      }
    }

    // Handle mouse click
    function onClick(event) {
      // Calculate mouse position in normalized device coordinates
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(markers);

      if (intersects.length > 0) {
        const clickedMarker = intersects[0].object;
        
        // Reset previously selected dot
        if (selectedDot && selectedDot !== clickedMarker) {
          selectedDot.material.emissive.setHex(selectedDot.userData.defaultColor);
        }

        // Toggle selection of clicked dot
        if (selectedDot === clickedMarker) {
          clickedMarker.material.emissive.setHex(clickedMarker.userData.defaultColor);
          setSelectedDot(null);
        } else {
          clickedMarker.material.emissive.setHex(clickedMarker.userData.selectedColor);
          setSelectedDot(clickedMarker);
        }

        console.log('Clicked dot index:', clickedMarker.userData.index);
        
        // Disable OrbitControls temporarily
        controls.enabled = false;
        setTimeout(() => {
          controls.enabled = true;
        }, 100); // Re-enable after 100ms
        
        return false;
      }
    }

    // Add event listeners to renderer's domElement instead of container
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    // Load 3D model
    const loader = new GLTFLoader();
    
    loader.load(
      process.env.PUBLIC_URL + '/models/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        
        // Get model size and adjust scale
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 30 / maxDim; // Base scale
        
        // Create a group to hold model and markers
        const group = new THREE.Group();
        
        // Apply transformations to the model
        model.scale.set(scale, scale * 1.1, scale); // Slightly taller in Y axis
        model.position.set(-center.x * scale, -center.y * scale * 1.1, -center.z * scale);
        model.rotation.set(0, 0, 0);
        model.position.y += 10; // Move model up by 10 units
        
        group.add(model);

        // Add defect markers relative to model size
        const defectPositions = [
          new THREE.Vector3(0, 12, 12),      // Aft fuselage (rear) - moved inward on Z axis
          new THREE.Vector3(12, 9.5, 3),      // Wing (right) - adjusted Y
          new THREE.Vector3(0, 9, -14)       // Radome (front) - moved down 3 units
        ];

        defectPositions.forEach((position, index) => {
          const marker = createDefectMarker(position, index);
          group.add(marker);
        });

        // Add the group to the scene
        scene.add(group);

        // Position camera based on model's new scale
        const scaledSize = size.multiplyScalar(scale);
        const maxScaledDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z);
        camera.position.set(maxScaledDim * 0.8, maxScaledDim * 0.5, maxScaledDim * 0.8);
        camera.lookAt(0, 0, 0);
        
        // Update controls
        controls.target.set(0, 0, 0);
        controls.update();

        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        }
        animate();
      },
      (progress) => {
        const percentComplete = (progress.loaded / progress.total * 100);
        console.log('Loading progress: ', percentComplete.toFixed(2) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Handle resize
    function handleResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('click', onClick);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      controls.dispose();
    };
  }, [selectedDot]); // Add selectedDot to dependency array

  return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />;
}

export default AircraftModel; 