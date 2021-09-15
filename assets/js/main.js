window.onload = function () {
  let hash = document.location.hash;
  let idRel = hash === "" ? "#home" : hash;
  console.log(idRel);
  document.getElementById(idRel).parentElement.classList.add("active");
};

window.addEventListener(
  "hashchange",
  function (event) {
    // console.log();

    let itemNav = document.querySelectorAll(".nav__item");
    itemNav.forEach((value) => value.classList.remove("active"));

    let hash = event.target.location.hash;
    let idRel = hash === "" ? "#home" : hash;
    console.log(idRel);
    document.getElementById(idRel).parentElement.classList.add("active");
  },
  false
);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 0) {
    let header = document.getElementById("header");
    header.classList.add("shadow");
    header.firstElementChild.classList.add("mg-0-5");
  } else {
    let header = document.getElementById("header");
    header.classList.remove("shadow");
    header.firstElementChild.classList.remove("mg-0-5");
  }
});

const nodes = Array.from(document.querySelectorAll(".card"));
const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
const classNames = ["in", "out"]
  .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
  .reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - (width / 2) * (width > height ? height / width : 1);
  const y = t - (height / 2) * (height > width ? width / height : 1);
  // debugger;
  return Math.round(Math.atan2(y, x) / Math.asin(1) + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseover", (ev) => this.update(ev, "in"));
    this.element.addEventListener("mouseout", (ev) => this.update(ev, "out"));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(
      `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
    );
  }
}

nodes.forEach((node) => new Item(node));

// class NavItem {
//   constructor(element) {
//     this.element = element;
//     this.itemNavs = Array.from(document.querySelectorAll(".nav__item"));
//     this.element.addEventListener("click", (ev) =>
//       this.handleClick(ev, "active")
//     );
//   }

//   handleClick(ev, className) {
//     for (let i of this.itemNavs) {
//       i.classList.remove(className);
//     }
//     this.element.classList.add(className);
//   }
// }

// itemNav.forEach((itemNav) => new NavItem(itemNav));

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  // reset: true,
});

sr.reveal(`.person__box`, { delay: 600 });
sr.reveal(`.nav`, { delay: 300, origin: "top" });
sr.reveal(`.home__slogan`, { delay: 200, origin: "left" });
sr.reveal(`.home__text`, { delay: 300, origin: "right" });
sr.reveal(`.home__btn`, { delay: 400, origin: "bottom" });
sr.reveal(`.home__img`, { delay: 400, origin: "top" });
sr.reveal(`.about__container`, { delay: 200 });
sr.reveal(`.card`, { delay: 200 });
sr.reveal(`.tools__images__item`, { delay: 200 });
sr.reveal(`#thang`, { delay: 500, origin: "bottom" });
sr.reveal(`#phat`, { delay: 500, origin: "bottom" });
