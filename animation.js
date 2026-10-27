// console.log("hello wrld");

const nav = document.querySelector(".nav_parent");

nav.addEventListener("mouseenter", () => {
  gsap.to("header hr", {
    width: "100%",
    duration: 0.3,
    delay: 0.2
  })
});

nav.addEventListener("mouseleave", () => {
  gsap.to("header hr", {
    width: "0%",
    duration: 0.3,
    delay: 0.2
  })
})

// function underline{}

parent.addEventListener("mouseleave", (e) => {
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.5
  });
});

gsap.to(".why", {
  y: "-100%",
  duration: 5,
  scrollTrigger: {
    trigger: ".section_6",
    scroller: "body",
    start: "top 0%",
    end: "top 100%",
    // ease: "back.out(2)",
    scrub: true,
    // pin: true,
  }
});

