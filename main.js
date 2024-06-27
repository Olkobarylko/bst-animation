document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    let tl = gsap.timeline();

    tl.to(".bst-animation__left-border", {
      duration: 2,
      opacity: 1,
      width: "140px",
      height: "214px",
    });

    tl.to(
      ".mask1-img",
      {
        duration: 2,
        x: 0,
        y: "-90.6px",
      },
      "<"
    );

    tl.to(
      ".mask1",
      {
        duration: 2,
        width: "214px",
        height: "237px",
      },
      "<"
    );

    tl.to(
      ".mask2-img",
      {
        duration: 2,
        x: "-235px",
        y: "-92px",
      },
      "<"
    );

    tl.to(
      ".mask2",
      {
        duration: 2,
        width: "211px",
        height: "243px",
        y: "0",
      },
      "<"
    );

    tl.to(
      ".mask3-img",
      {
        duration: 2,
        x: "-463px",
        y: "-83px",
      },
      "<"
    );

    tl.to(
      ".mask3",
      {
        duration: 2,
        width: "212px",
        height: "46px",
        x: "0",
      },
      "<"
    );

    tl.to(
      ".mask4-img",
      {
        duration: 2,
        x: "-534px",
        y: "-160px",
      },
      "<"
    );

    tl.to(
      ".mask4",
      {
        duration: 2,
        width: "55px",
        height: "170px",
        x: "0",
      },
      "<"
    );

    tl.to(
      ".bst-animation__right-blur",
      {
        duration: 2,
        opacity: 1,
        x: 0,
      },
      "<"
    );

    tl.to(".bst-animation__main-image img", {
      duration: 2,
      width: "100%",
      height: "100%",
      borderTopRightRadius: "90px",
    });

    tl.to(
      ".bst-animation__left-border",
      {
        duration: 2,
        x: "30px",
        y: "-50px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__right-blur",
      {
        duration: 2,
        y: "-70px",
        x: "20px",
      },
      "<"
    );

    tl.to(".bst-animation__big-main-image", {
      duration: 2,
      opacity: 1,
      scale: 1.292,
    });

    tl.to(
      ".bst-animation__main-image",
      {
        duration: 2,
        opacity: 0,
        scale: 1.292,
      },
      "<"
    );

    tl.to(
      ".bst-animation__right-blur",
      {
        duration: 2,
        height: "222px",
        width: "305px",
        x: "230px",
        y: "-120px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__left-border",
      {
        duration: 2,
        width: "140px",
        height: "301px",
        x: "-80px",
        y: "-120px",
      },
      "<"
    );

    tl.to(".bst-animation__container", {
      duration: 2,
      maxWidth: "1240px",
    });

    tl.to(
      ".bst-animation__block",
      {
        duration: 2,
        width: "545px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__big-main-image",
      {
        duration: 2,
        scale: 1,
        width: "100%",
        borderTopRightRadius: "180px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__big-main-image img",
      {
        duration: 2,
        borderTopRightRadius: "180px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__left-border",
      {
        duration: 2,
        width: "96px",
        height: "204px",
        x: "20px",
        y: "-60px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__right-blur",
      {
        duration: 2,
        height: "121px",
        width: "207px",
        x: "100px",
        y: "270px",
      },
      "<"
    );

    tl.to(
      ".bst-animation__decor",
      {
        duration: 1,
        opacity: 1,
        x: "80px",
        y: "-40px",
      },
      "<"
    );
  }, 1000);
});
