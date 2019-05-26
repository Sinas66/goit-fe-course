"use strict";

const test = document.querySelector(`.test`);
const css = document.styleSheets[0].rules[1].style;

console.log(css);

const magic = () => {
  let w = css.width.match(/\d/g).join(``);
  const width = window.innerWidth - w;
  let h = css.width.match(/\d/g).join(``);
  const height = window.innerHeight - h;
  const randW = Math.floor(Math.random() * width + 1);
  const randH = Math.floor(Math.random() * height + 1);
  css.marginLeft = `${randW}px`;
  css.marginTop = `${randH}px`;
};

test.addEventListener(`mouseover`, magic);
