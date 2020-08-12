import React from 'react';
import './App.scss';

// setup react three fiber  canvas
import { Canvas } from 'react-three-fiber'
import Box from './components/Box';



function App() {
  return (
    <div className='wrapper'>
    <Canvas id='canv'>

      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Box />
    </Canvas>
    <div className='heading'>
      <h1> 3D scene for a Box Geometry </h1> 
     
    </div>
    </div>



  );
}

export default App;
