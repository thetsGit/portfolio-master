
// transform state
window.onload = () => {

const mainContent = document.getElementById("main-content");
const name = document.getElementById("name");
const email = document.getElementById("email-me");
const phone = document.getElementById("phone-me");
const projectContents = document.querySelectorAll(".project-content");
const contactAnimates = document.querySelectorAll(".contact-animate");
const loadingState = document.getElementById("loading-state");
const projectDates = document.querySelectorAll(".project-date");

  // toggle state
  loadingState.style.display = "none";
  mainContent.style.display = "block";

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
          )
          .add(
            {
              targets: `#project-${index + 1} .project-date`,
              rotate: "360deg",
              opacity: [0,1],
              translateX: [500, 0],
            },
            1000
          );
      }
      this.destroy();
    },
    offset: "75%",
  });
  });

  console.log("Hello! This is Thethan.");
  console.log("Nice to meet ya.");
  console.log("You can get the source code via my github<3");
  console.log("Have a good day.");

  new VenoBox({
    selector: ".venobox",
    spinner: "wander",
    maxWidth: "100%"
  });

};
