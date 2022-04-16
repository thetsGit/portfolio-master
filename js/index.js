
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
const modeControl = document.getElementById("mode-wrap");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const profileImage = document.getElementById("profile-img");
const sheets = document.querySelectorAll(".sheet-me");
const education = document.getElementById("internships");

  // toggle state
  loadingState.style.display = "none";
  mainContent.style.display = "block";

  // night mode controller
  modeControl.addEventListener("click", () => {
    if (modeControl.dataset.mode === "night")
    {
      document.querySelector("link[href='assets/css/mdb/mdb.dark.min.css']").href = "assets/css/mdb/mdb.min.css";
      sun.classList.add("d-none");
      moon.classList.remove("d-none");
      modeControl.style.backgroundColor = "#000";
      modeControl.style.color = "#fff";
      modeControl.dataset.mode = "day";
    } else {
      document.querySelector("link[href='assets/css/mdb/mdb.min.css']").href = "assets/css/mdb/mdb.dark.min.css";
      sun.classList.remove("d-none");
      moon.classList.add("d-none");
      modeControl.style.backgroundColor = "#ffc10720";
      modeControl.style.color = "#ffc107";
      modeControl.dataset.mode = "night";
    }
  });

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
    // translateY: -80,
    translateX: 120,
    scale: 1.2,
    delay: anime.stagger(30, { start: 0 }),
  })
  .add({
    targets: "#email-me>span,#phone-me>span",
    // translateY: -100,
    translateX: 100,
    scale: 1.2,
    delay: anime.stagger(30, { start: 0 }),
  });

  sheets.forEach((sheet, index, listObj) => {
    new Waypoint({
      element: sheet,
      handler: (direction) => {
        if (direction === "down") {
          anime({
            targets: sheet,
            translateX: ["-100%", 0],
            rotateX: ["-360deg", 0],
            rotateY: ["-360deg", 0]
            
          })
        }
        // this.destroy();
      },
      offset: "75%"
    })
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
            700
          )
          .add(
            {
              targets: `#project-${index + 1} .project-btns`,
              opacity: [0, 1],
              translateY: [100, 0],
            },
            700
          )
          .add(
            {
              targets: `#project-${index + 1} .project-date`,
              rotate: "360deg",
              opacity: [0,1],
              translateX: [500, 0],
            },
            700
          );
      }
      this.destroy();
    },
    offset: "75%",
  });
  });


  console.log("Hello! This is Thethan.");
  console.log("I'm a passionate Web Developer.");
  console.log("Nice to meet ya.");
  console.log("You can get this website's source code via my github<3");
  console.log("Contact me via email || linkedin");
  console.log("Have a good day.");

  new VenoBox({
    selector: ".venobox",
    spinner: "wander",
    maxWidth: "100%"
  });

};
