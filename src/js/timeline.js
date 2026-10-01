import { gsap } from "gsap";
<<<<<<< HEAD
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
=======
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

>>>>>>> 02b829d09561662f22c486ab8115c35ed4afb585
const timelineExercices = () => {
  if (document.querySelector("#exercice-timeline")) {
    /* -----------------------
    Importer GSAP dans ce fichier
    ----------------------- */
    /* -----------------------
    Exercice 1
   -----------------------
   Au chargement de la page, animez la boîte:
    1. Déplacement de 150px vers la droite (durée: 1s)
    2. Rotation de 180° (durée: 0.8s)
    3. Retour à la position et rotation d'origine (durée: 1.2s)
   ----------------------- */
    const timeline1 = gsap.timeline();

    timeline1.to("#js-timeline-1", {
      x: 150,
      duration: 1
    })
    .to("#js-timeline-1", {
      rotation: 180,
      duration: 0.8
    })
    .to("#js-timeline-1", {
      x: 0,
      rotation: 0,
      duration: 1.2
    } 
    // ,"-=0.8"
  );
    /* -----------------------
    Exercice 2
   -----------------------
    Au chargement de la page, animez la boîte avec des animations qui se chevauchent:
    1. Augmentation de l'échelle de 1 à 1.5 (durée: 1s)
    2. Changement de couleur vers le rouge (durée: 0.5s) - démarre 0.3s avant la fin de l'animation précédente
    3. Retour à la taille et couleur d'origine (durée: 0.8s)
   ----------------------- */
    const timeline2 = gsap.timeline();

    timeline2.to(".box-2", {
      scale: 1.5,
      duration: 1
    })
    .to(".box-2", {
      backgroundColor: "red",
      duration: 0.5
    }, "-=0.3")
    .to(".box-2", {
      scale: 1,
      backgroundColor: "white",
      duration: 0.8
    },);
    /* -----------------------
    Exercice 3
   -----------------------
    Au chargement de la page, animez la boîte avec des animations labellisées:
    1. Label "debut" - Déplacement vers le bas de 100px (durée: 0.8s)
    2. Label "milieu" - Rotation de 360° (durée: 1s)
    3. Animation supplémentaire qui démarre au "milieu" + 0.5s : opacity de 1 à 0.3 puis retour à 1 (durée: 1s)
   ----------------------- */
    const timeline3 = gsap.timeline();

    timeline3.to("#js-timeline-3", {
      y: 100,
      duration: 0.8
    }, "debut")
    .to("#js-timeline-3", {
      rotation: 360,
      duration: 1
    }, "milieu")
    .to("#js-timeline-3", {
      opacity: 0.3,
      duration: 0.5,
      yoyo: true,
      repeat: 1
    }, "milieu+=0.5");
    // .to("#js-timeline-3", {
    //   position: initial,}
    //   duration: 0.2
    // });
  }
};

export default timelineExercices;
