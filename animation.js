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


const parent = document.querySelector('.section_5');
const cursor = document.querySelector(".cursor");

parent.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    opacity: 1
  });
});

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

gsap.to(".sponsors", {
  x: -100,
  duration: 3,
  repeat: -1,
  // z-index
  scrollTrigger: {
    trigger: ".section_7",
    scroller: "body",
    start: "top 0%",
    end: "top 100%"
  }
})

// gsap.to(".section_6", {
//   overflowY: "scroll",
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section_6",
//     scroller: "body",
//     start: "top 0%",
//     end: "top 100%",
//     scrub: false
//   }
// });

// gsap.to(".history_sections", {
//   // width: "200px",
//   scale: 0.5,
//   borderRadius: "15px",
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section_3",
//     scroll: "body",
//     start: "top 100%",
//     end: "top 0%",
//     scrub: true
//   }
// })

// const tl = gsap.timeline();
const section3 = document.querySelector(".section_3");

gsap.to(".history_sections", {
  overflowY: "scroll",
  scrollTrigger: {
    trigger: ".section_3",
    scoll: "body",
    // markers: true,
    start: "top 0%",
    end: "top 0%",
  }
})