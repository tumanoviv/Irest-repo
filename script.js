gsap.registerPlugin(ScrollTrigger);

// ---------------------------------
// Прелоадер
// ---------------------------------
// Анимация процентов в течении 8 сек

const TLLOAD = gsap.timeline();

TLLOAD.to(".loader-number", {
  innerText: 100,
  snap: "innerText",
  duration: 10
});

// Добавляем событие при загрузке и запускаем функцию loader.
window.addEventListener("DOMContentLoaded", master);

// ---------------------------------
// Изинги
// ---------------------------------

let Custom = CustomEase.create("custom", "M0,0 C0.16,0 0.03,1 1,1 ");
let easeIn = "power4.in";
let easeOut = "expo.out";

// ---------------------------------
// Главный таймлайн
// ---------------------------------

function master() {
  let tl = gsap.timeline();
  tl.add(loadHide());
  tl.add(heroVideo());
  tl.addLabel("startHero");
  tl.add(loopTimeline(), "<");
  tl.add(heroHeading(), "startHero");
}

function loadHide() {
  let tl = gsap.timeline();
  tl.add("startHide");
  tl.to(
    ".left-side",
    {
      xPercent: -100,
      duration: 1,
      delay: 1,
      ease: CustomEase.create("custom", "M0,0 C1,0 0.67,1 1,1 ")
    },
    "startHide"
  );
  tl.to(
    ".right-side",
    {
      xPercent: 100,
      duration: 1,
      delay: 1,
      ease: CustomEase.create("custom", "M0,0 C1,0 0.67,1 1,1 ")
    },
    "startHide"
  );

  tl.to(
    ".top-side",
    {
      yPercent: -100,
      duration: 1,
      delay: 1,
      ease: CustomEase.create("custom", "M0,0 C1,0 0.67,1 1,1 ")
    },
    "startHide"
  );
  tl.to(
    ".bottom-side",
    {
      yPercent: 100,
      duration: 1,
      delay: 1,
      ease: CustomEase.create("custom", "M0,0 C1,0 0.67,1 1,1 ")
    },
    "startHide"
  );

  tl.to(
    ".preloader-progress",
    {
      autoAlpha: 0,
      duration: 0.5
    },
    "<-20%"
  );

  tl.to(
    ".preloader-video",
    {
      opacity: 0,
      duration: 0.2
    },
    "startHide+10%"
  );

  tl.to(".preloader", {
    display: "none",
    duration: 0
  });

  return tl;
}

// ---------------------------------
// Анимация заголовка и текста для обложки.
// ---------------------------------

const h1Heading = document.querySelectorAll(".h1");
const SubHead = document.querySelectorAll(".subheading");
const HeroText = document.querySelectorAll(".hero-text-vrapper .text-20px");
const HeroSubText = document.querySelectorAll(".hero-text-vrapper .text-12px");
const starHero = document.querySelectorAll(".star-img");

const lineProgres = document.querySelectorAll(".hero-text-vrapper .text-12px");

function heroHeading() {
  let tl = gsap.timeline();

  tl.from(h1Heading, {
    x: 106,
    duration: 2.7,
    stagger: 0.2,
    ease: CustomEase.create("custom", "M0,0 C0.16,0 0.03,1 1,1 ")
  });

  tl.from(
    h1Heading,
    { autoAlpha: 0, delay: 0.2, stagger: 0.3, ease: "none" },
    "<"
  );

  tl.from(
    SubHead,
    {
      y: 50,
      duration: 1.2,
      stagger: 0.2,
      ease: CustomEase.create("custom", "M0,0 C0.16,0 0.03,1 1,1 ")
    },
    "<"
  );

  tl.from(
    SubHead,
    { autoAlpha: 0, duration: 0.2, stagger: 0.2, ease: "none" },
    "<"
  );

  tl.from(HeroText, { y: 30, duration: 1.2, stagger: 0.2 }, "<-=30%");

  tl.from(
    HeroText,
    { autoAlpha: 0, delay: 0.2, stagger: 0.2, ease: "none" },
    "<"
  );

  tl.from(HeroSubText, { y: 40, duration: 1.2, stagger: 0.2 }, "<");

  tl.from(HeroSubText, { autoAlpha: 0, stagger: 0.2, ease: "none" }, "<");
  return tl;
}

// ---------------------------------
// Функция включения видео
// ---------------------------------

let HeroVideoOne = document.querySelector("#hero-video-1");

function playHeroVideo() {
  HeroVideoOne.currentTime = 0;
  HeroVideoOne.play();
}

function heroVideo() {
  let tl = gsap.timeline();
  tl.call(playHeroVideo);
}

// ---------------------------------
// Анимация таймлайна, звезд, видео
// ---------------------------------

let delLine = 5; // Задержка линии
let durOpLine = 0; // Анимация прозрачности
let durLine = 5; // Длительность анимации линии
let stagLine = 5; // Промежуток переключения между линиями

let durStar = 0.1; // Длительность анимации звездочек

let heroLineOne = document.querySelector("[hero=line-1]");
let heroLineTwo = document.querySelector("[hero=line-2]");
let heroLineThree = document.querySelector("[hero=line-3]");

let heroStarOne = document.querySelector("[hero=star-1]");
let heroStarTwo = document.querySelector("[hero=star-2]");
let heroStarThree = document.querySelector("[hero=star-3]");

function loopTimeline() {
  let tl = gsap.timeline({ repeat: -1 });

  tl.add("lineOneStart");

  tl.to(heroLineOne, {
    width: "100%",
    duration: durLine,
    ease: "none"
  });

  tl.to(
    heroLineOne,
    {
      opacity: 0,
      duration: durOpLine,
      delay: delLine
    },
    "<"
  );

  tl.add("lineTwoStart");

  tl.to(heroLineTwo, {
    width: "100%",
    duration: durLine,
    ease: "none"
  });

  tl.to(
    heroLineTwo,
    {
      opacity: 0,
      duration: durOpLine,
      delay: delLine
    },
    "<"
  );

  tl.add("lineThreeStart");

  tl.to(heroLineThree, {
    width: "100%",
    duration: durLine,
    ease: "none"
  });

  tl.to(
    heroLineThree,
    {
      opacity: 0,
      duration: durOpLine,
      delay: delLine
    },
    "<"
  );

  // Star

  tl.from(
    heroStarOne,
    { autoAlpha: 0, width: 0, height: 0, duration: durStar, ease: Custom },
    "lineOneStart"
  );

  tl.to(
    heroStarOne,
    {
      width: 0,
      height: 0,
      duration: durStar,
      ease: Custom
    },
    "lineTwoStart"
  );

  tl.from(
    heroStarTwo,
    { autoAlpha: 0, width: 0, height: 0, duration: durStar, ease: Custom },
    "lineTwoStart"
  );

  tl.to(
    heroStarTwo,
    {
      width: 0,
      height: 0,
      duration: durStar,
      ease: Custom
    },
    "lineThreeStart"
  );

  tl.from(
    heroStarThree,
    { autoAlpha: 0, width: 0, height: 0, duration: durStar, ease: Custom },
    "lineThreeStart"
  );

  return tl;
}