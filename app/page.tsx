'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Loading from './_components/Loading';

export default function Home() {
  const choiceMade = () => {
    setChoice(true);
  };
  const [choice, setChoice] = useState(false);
  return (
    <main>
      {/* <Loading /> */}
      <AnimatePresence>
        {!choice ? (
          <motion.div
            key="1"
            exit={{ x: '-80vw' }}
            transition={{ ease: 'easeInOut' }}
            className="presentation"
          >
            <motion.div className="call">De quoi avez vous besoin ?</motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="2"
            initial={{ x: '80vw' }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="presentation"
          >
            <motion.div className="call">Excellent choix !</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="options">
        <div className="simple" onClick={choiceMade}>
          <div className="grid-title">
            <motion.div className="main-title">UN SITE SIMPLE,</motion.div>
            <div className="description">
              Un site wordpress facile à construire et modifiable infiniment.
              Vous avez besoin d&apos;un site rapide à mettre en place ?
              C&apos;est pour vous !
            </div>
            <div className="secondary-title">élégant</div>
          </div>
        </div>
        <div className="perso">
          <div className="grid-title" onClick={choiceMade}>
            <div className="main-title">UN SITE SUR-</div>
            <div className="description">
              Un site créé de bout en bout par Baloo Studio qui mettra en valeur
              votre activité. Vous voulez un site esthétique et personnel ?
              N&apos;hésitez plus !
            </div>
            <div className="secondary-title">mesure</div>
          </div>
        </div>
      </div>
    </main>
  );
}
