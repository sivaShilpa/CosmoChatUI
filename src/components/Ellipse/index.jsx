import React from 'react';
import { motion } from 'framer-motion';
import AllStyles from '../../styles';

function Ellipse() {
  return (
    <motion.Grid
      style={{ ...AllStyles.ellipse }}
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{
        repeat: Infinity,
        type: 'tween',
        repeatType: 'mirror',
        repeatDelay: 1,
        delay: 1,
        ease: 'linear',
      }}
    />
  );
}

export default Ellipse;
