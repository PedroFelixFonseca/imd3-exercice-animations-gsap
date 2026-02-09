import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import animations from "./animations";
import scrollTriggerFunc from "./scroll-trigger";
import timelineExercices from "./timeline";

document.addEventListener("DOMContentLoaded", () => {
  animations();
  timelineExercices();
  scrollTriggerFunc();
});
