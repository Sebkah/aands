'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Loading from './_components/Loading';

export default function Home() {
  return (
    <main>
      <Loading />
      <div className="presentation">
        {/*  <span>
          Baloo Studio vous accompagne dans la création de site web en vous
          offrant des solutions personnalisées et créatives pour répondre à vos
          besoins spécifiques. Composé d'un graphiste et d'une développeuse web,
          notre équipe travaille en étroite collaboration avec vous pour donner
          vie à votre vision. Nous accordons une grande importance à
          l'expérience utilisateur, à la performance du site et à son adaptation
          à tous les appareils.
        </span> */}
        {/*  <span>
          <h1 className="one">De quoi avez </h1>
          <h1 className="two"> vous besoin ?</h1>
        </span> */}
        <div className="call">De quoi avez vous besoin ?</div>
      </div>
      <div className="options">
        <div className="simple">
          <div className="grid-title">
            <motion.div className="main-title">UN SITE SIMPLE,</motion.div>
            <div className="description">
              Un site wordpress facile à construire et modifiable infiniment.
              Vous avez besoin d'un site facile à mettre en place ? C'est pour
              vous !
            </div>
            <div className="secondary-title">élégant</div>
          </div>
        </div>
        <div className="perso">
          <div className="grid-title">
            <div className="main-title">UN SITE SUR-</div>
            <div className="description">
              Un site créé de bout en bout par Baloo Studio qui mettra en valeur
              votre activité. Vous voulez un site esthétique et personnelle ?
              N'hésitez plus !
            </div>
            <div className="secondary-title">mesure</div>
          </div>
        </div>
      </div>
    </main>
  );
}
