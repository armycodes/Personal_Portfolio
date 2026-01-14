import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Canvas full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters for data stream (0s, 1s, and simple tech words)
    const chars = '10101001 DATA 0101 CONNECT 0011 SYSTEM 1100 NODE'; 
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);

    // Drops array
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random heights above screen
    }

    const draw = () => {
      // Background with very high transparency for "trail" effect
      // Matches the slate blue theme
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text Color: Professional Sky Blue
      ctx.fillStyle = '#38bdf8'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Draw the text
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Slower speed for professional look (50ms)
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="matrix-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, /* Content venuka undali */
        opacity: 0.08 /* Very subtle visibility */
      }}
    />
  );
};

export default MatrixBackground;