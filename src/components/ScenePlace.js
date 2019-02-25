import React from 'react'
import 'aframe'
import 'babel-polyfill'
import {Entity, Scene} from 'aframe-react'

function ScenePlace() {
  return(
    <a-scene background="color: #ECECEC; transparent: true">
      <a-assets>
        <img id="skyTexture"
             src="img/sky1.jpg"
             alt="skyTexture"
        />
      </a-assets>


      <Entity primitive="a-sky" height="2048" radius="100" theta-length="90"
      width = "2048" src="#skyTexture" position="0 -30 0" scale="1 0.6 1" rotation="0 135 0"/>
      <a-box color="#4CC3D9" id="box000000" position="-1 0.5 -3" rotation="0 45 0" shadow/>
      <a-sphere color="#d4cec6" src ="img/SphericalHorseInVacuum.jpg"  id="sphere000000" position="0 1.25 -5" radius="1.25" shadow/>
      <a-cylinder
        color="#FFC65D"
        id="cylinder000000"
        position="1 0.75 -3"
        radius="0.5"
        height="0.2" shadow
        material="src: url(img\ring\OutLayer.png)"
        normal-map = "src: url(img\ring\Bottom.png)"
      />
      <a-plane position="0 -30 00" rotation="-90 0 0" width="1000" height="1000"  shadow
                src="img/ground.jpg" scale="0.2 0.2 1" intescity="0"/>
      <a-text position="-0.549 2.732 -4" rotation="0 0 0" width="4" height="4" color="#4437e6" shadow value="Happy-Users!"/>
      <Entity primitive="a-light" type="ambient" color="#abbfbb"/>
      <Entity primitive="a-light" type="point" intencity="1.5" position="2 4 4"/>
      <Entity primitive="a-camera"  position={{x: 0, y: 2, z: 5}}/>
      <a-assets>
        <a-asset-item position="1 2 -3" id="tree-obj" src="img/ring/ring.obj" ></a-asset-item>
        <img id="ringOuter"  src="img\ring\OutLayer.png" alt="OutLayer.png" />
      </a-assets>
      <a-entity
        obj-model="obj: #tree-obj"
        material="src: url(img\ring\OutLayer.png)"
        normal-map = "src: url(img\ring\Bottom.png)"wwwwwwwwwwww
        position="-0.42 0.3 -1"
        scale="0.3 0.3 0.3"
        rotation="15 -0.65 -0.25" shadow
        metalness="1"></a-entity>
      <a-entity animation="property: rotation; to: 0 360 0; dur: 10000; easing: linear; loop: true">
        <a-entity mixin="light" position="30 30 0" geometry="" material="" light=""></a-entity>
      </a-entity>
    </a-scene>
  // src/components/ScenePlace.js
  )
}
export default ScenePlace