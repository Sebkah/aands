import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Loading({}): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            /*     opacity: 0, */
            y: '100vh',
          }}
          initial={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className="loading"
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 536.83 200.11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g
              style={{
                stroke: 'blue',
                fill: 'none',
                strokeWidth: 4,
              }}
            >
              <motion.path
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
                d="m197.56,4.96l98.96,190.2h-98.07l-10.4-20.51h-94.21l-10.1,20.51H.82L99.78,4.96h97.77Zm-56.46,74.89l-23.18,46.36h46.06l-22.88-46.36Z"
              />
              <motion.path
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
                onAnimationComplete={(definition) => {
                  setTimeout(() => {
                    setLoading(false);
                  }, 1000);
                  console.log('Completed animating', definition);
                }}
                d="m404.39,147.01c35.37,0,38.34-4.46,38.34-8.92,0-18.13-141.16,9.21-141.16-73.7,0-42.2,45.47-63.89,116.2-63.89s108.17,21.99,108.17,21.99l-11.59,48.14s-41.31-19.61-94.21-19.61c-21.69,0-24.96,2.97-24.96,6.54,0,21.4,141.16-5.65,141.16,76.38,0,42.79-35.66,65.68-125.71,65.68-69.84,0-112.63-23.18-112.63-23.18l11.89-49.93s41.01,20.5,94.5,20.5Z"
              />
            </motion.g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
