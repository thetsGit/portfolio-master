const progressIndicator = document.getElementById("progress-indicator");
const mainContent = document.getElementById("main-content");
const name = document.getElementById("name");
const email = document.getElementById("email-me");
const phone = document.getElementById("phone-me");
const coffeeShopContent = document.getElementById("coffee-shop-content");
const projectContents = document.querySelectorAll(".project-content");
const blogContent = document.getElementById("blog-content");
const contactAnimates = document.querySelectorAll(".contact-animate");
const sendBtn = document.getElementById("send-btn");
const loadingState = document.getElementById("loading-state");

// transform state
window.onload = () => {
  loadingState.style.display = "none";
  mainContent.style.display = "block";
};

// animations
const splitChars = (text) =>
  text
    .split("")
    .map(
      (c) =>
        `<span class="name-char" style="display: inline-block">${c}</span>`
    )
    .join("");
name.innerHTML = splitChars(name.innerHTML);
email.innerHTML = splitChars(email.innerHTML);
phone.innerHTML = splitChars(phone.innerHTML);
const profileAnime = anime.timeline({
  direction: "alternate",
});
profileAnime
  .add({
    targets: "#profile-img",
    rotate: "3turn",
    scale: [{ value: 0.1 }, { value: 1 }],
    delay: 2000,
  })
  .add({
    targets: "#name>span",
    translateY: -180,
    translateX: 120,
    scale: 1.2,
    color: "#fff",
    delay: anime.stagger(50, { start: 0 }),
  })
  .add({
    targets: "#email-me>span,#phone-me>span",
    translateY: -200,
    translateX: 100,
    scale: 1.2,
    color: "#fff",
    delay: anime.stagger(50, { start: 0 }),
  });
projectContents.forEach((projectContent, index, listObj) => {
  new Waypoint({
    element: projectContent,
    handler: function (direction) {
      if (direction === "down") {
        anime
          .timeline({ duration: 800 })
          .add({
            targets: `#project-${index + 1} .project-img`,
            translateX: [-100, 0],
            opacity: [0, 1],
          })
          .add({
            targets: `#project-${index + 1} .project-content`,
            translateX: [100, 0],
            opacity: [0, 1],
          })
          .add(
            {
              targets: `#project-${index + 1} .project-tags>span`,
              opacity: [0, 1],
              translateY: [-100, 0],
              delay: anime.stagger(200),
            },
            1000
          )
          .add(
            {
              targets: `#project-${index + 1} .project-btns`,
              opacity: [0, 1],
              translateY: [100, 0],
            },
            1000
          );
      }
      this.destroy();
    },
    offset: "75%",
  });
});
let blogWaypoint = new Waypoint({
  element: blogContent,
  handler: function () {
    anime
      .timeline({ easing: "easeInOutBounce" })
      .add({
        targets: "#blog-img",
        translateY: [200, 0],
        translateX: [200, 0],
        duration: 1300, // opacity: [0.5, 1],
        scale: [3, 1],
      })
      .add({
        targets: "#blog-title",
        opacity: [0, 1],
        duration: 500,
      })
      .add({
        targets: "#blog-content",
        opacity: [0, 1],
        duration: 500,
      })
      .add({
        targets: "#blog-link",
        duration: 1000,
        translateX: [1000, 0],
        rotate: "3turn",
      });
    this.destroy();
  },
  offset: "75%",
});
contactAnimates.forEach((val, index, list) => {
  let waypoint = new Waypoint({
    element: val,
    handler: function () {
      anime({
        targets: `.contact-animate.animate-${index + 1}`,
        translateX: [1000, 0],
        opacity: [0, 1],
        duration: 3000,
        // delay: 300,
      });
      this.destroy();
      console.log(
        "hello",
        document.querySelector(`.contact-animate.animate-${index + 1}`)
      );
    },
    offset: "90%",
  });
});

setInterval(() => {
  anime({
    targets: "#send-btn",
    translateX: [0, -10],
    loop: true,
    direction: "alternate",
    easing: "easeOutBack",
    duration: 30,
    loop: 10,
  });
}, 5000);