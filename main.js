document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    gsap.to(".bst-animation__left-border", {
      duration: 2,
      opacity: 1,
      width: "140px",
      height: "214px",
    });

    gsap.to(".mask1-img", {
        duration: 2,
        x:0,
    });

    gsap.to(".mask1", {
        duration: 2,
        width: "214px",
        height: "237px",
    });

    gsap.to(".mask2-img", {
        duration: 2,
        x:"-210px",
        y:"-105px"
    });

    gsap.to(".mask2", {
        duration: 2,
        width: "211px",
        height: "243px",
        y:"0"
    });

    gsap.to(".mask3-img", {
        duration: 2,
        x:"-412px",
        y:"-105px"
    });

    gsap.to(".mask3", {
        duration: 2,
        width: "212px",
        height: "46px",
        x:"0"
    });

    gsap.to(".mask4-img", {
        duration: 2,
        x:"-475px",
        y:"-180px"
    });

    gsap.to(".mask4", {
        duration: 2,
        width: "55px",
        height: "170px",
        x:"0"
    });

    gsap.to(".bst-animation__right-blur", {
        duration: 2,
        opacity: 1,
        x:0,
      });


  }, "1000");
});
