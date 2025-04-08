gsap.fromTo(".square", 
    { opacity: 0, x: -200 }, 
    { opacity: 1, x: 0, duration: 5 }
  );
  
  const tl = gsap.timeline();
  
  tl.to(".circle", { scale: 1.7, rotation: 360, duration: 1, ease: "bounce.out" });

  tl.to(".triangle", { y: 100, backgroundColor: "#ffcc00", duration: 1, rotation: 360 }, "-=0.5");
  gsap.fromTo(".dot", 
    { scale: 0, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.5, stagger: 0.8}
  );
  