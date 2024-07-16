import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

if (window.innerWidth > 1200) {
  gsap.fromTo(
    "#home",
    {
      height: 758,
      borderRadius: 70,
      paddingLeft: 52,
      paddingRight: 52,
    },
    {
      scrollTrigger: {
        trigger: "#trigger",
        start: "top 150px",
        end: "300px 200px",
        scrub: 1,
      },
      borderRadius: "0px 0px 0px 291px",
      maxWidth: "100vw",
      height: 1042,
      padding: 0,
      duration: 0.7,
    },
  )
}
