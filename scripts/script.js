$(window).on("resize", function () {
  if ($(window).width() > 426) {
    $("#service").addClass("grid-imgs");
    $("#service").removeClass("glider");
    $("#glide-service").removeClass("glider-contain");
  } else {
    $("#service").addClass("glider");
    $("#glide-service").addClass("glider-contain");
    $("#service").removeClass("grid-imgs");
  }
  if ($(window).width() > 769) {
    $(".all-gliders-c").removeClass("glider-contain");
    $(".all-gliders").removeClass("glider");
  } else {
    $(".all-gliders-c").addClass("glider-contain");
    $(".all-gliders").addClass("glider");
  }
});
// new Glider(document.querySelector(".glider"), {
//   slidesToScroll: 1,
//   slidesToShow: 1.5,
//   draggable: true,
//   dots: ".dots",
//   arrows: {
//     prev: ".glider-prev",
//     next: ".glider-next",
//   },
//   responsive: [
//     {
//       // screens greater than >= 1024px
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1.5,
//         slidesToScroll: 1,
//         itemWidth: 150,
//         duration: 0.25,
//       },
//     },
//     {
//       // screens greater than >= 775px
//       breakpoint: 768,
//       settings: {
//         // Set to `auto` and provide item width to adjust to viewport
//         slidesToShow: 1.25,
//         slidesToScroll: "auto",
//         itemWidth: 150,
//         duration: 0.25,
//       },
//     },
//     {
//       // screens greater than >= 320px
//       breakpoint: 320,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         itemWidth: 150,
//         duration: 0.25,
//       },
//     },
//   ],
// });

// new Glider(document.querySelector(".glider"), {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   draggable: true,
//   dots: ".dots",
//   arrows: {
//     prev: ".glider-prev",
//     next: ".glider-next",
//   },
// });

window.addEventListener("load", function () {
  [].forEach.call(document.querySelectorAll(".glider"), function (ele) {
    ele.addEventListener("glider-slide-visible", function (event) {
      var glider = Glider(this);
      console.log("Slide Visible %s", event.detail.slide);
    });
    ele.addEventListener("glider-slide-hidden", function (event) {
      console.log("Slide Hidden %s", event.detail.slide);
    });
    ele.addEventListener("glider-refresh", function (event) {
      console.log("Refresh");
    });
    ele.addEventListener("glider-loaded", function (event) {
      console.log("Loaded");
    });
    new Glider(ele, {
      slidesToShow: 1,
      slidesToScroll: 1,
      scrollLock: true,
      draggable: true,
      dots: ele.parentNode.querySelector(".dots"),
      arrows: {
        prev: ele.querySelector(".glider-prev"),
        next: ele.querySelector(".glider-next"),
      },
      responsive: [
        {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25,
          },
        },
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1.25,
            slidesToScroll: "auto",
            itemWidth: 150,
            duration: 0.25,
          },
        },
        {
          // screens greater than >= 320px
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25,
          },
        },
      ],
    });
  });
});
function openMenu() {
  document.getElementById("ham").style.display = "grid";
}
function closeMenu() {
  document.getElementById("ham").style.display = "none";
}
