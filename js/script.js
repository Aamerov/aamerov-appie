//////////////////////////////////////
// Make Mobile Navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".nav-main");

btnNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smoothing scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll Back to Top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // Close moblie navigation

    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
