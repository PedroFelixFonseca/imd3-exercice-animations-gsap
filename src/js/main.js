import { gsap } from "gsap";
<<<<<<< HEAD
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
=======
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


>>>>>>> 02b829d09561662f22c486ab8115c35ed4afb585
import animations from "./animations";
import scrollTriggerFunc from "./scroll-trigger";
import timelineExercices from "./timeline";

document.addEventListener("DOMContentLoaded", () => {
  animations();
  timelineExercices();
  scrollTriggerFunc();
});
