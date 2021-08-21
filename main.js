TweenMax.to(
    ".loadcon",
    2, {
      y: "-100%",
      ease: Expo.easeInOut,
      delay: 6,
    },
  );
  
  
  TweenMax.staggerFrom(
    ".loadtext",
    1, {
      x: "-80",
      ease: Power3.easeInOut,
      opacity: "0",
    },
    2
  );
  TweenMax.staggerTo(
    ".loadtext",
    0.8, {
      x: "80",
      ease: Power3.easeInOut,
      delay: 1.2,
      opacity: "0",
    },
    2
  );
  