import React, { useState } from 'react';
import { motion } from "framer-motion";


import { Helmet } from "react-helmet";


const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;
  return (
    <motion.div>

      <model-viewer
          className="mx-auto w-full max-w-md"
          src='https://res.cloudinary.com/shopmodels/image/upload/v1624354066/models/xzdwcwvweaqwhg4bvkua.glb'
          alt=""
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
        ></model-viewer>
      
    </motion.div>
      
   
    
    
  );
};

export default Slider;
