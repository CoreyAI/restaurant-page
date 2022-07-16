import { pageLoad } from "./page-load";
import { Header } from "./header";
import './style.css';
import { Footer } from "./footer";

// pageLoad.background("../src/pasta_bowl.jpg");

// const test = document.createElement("div");
// test.innerText = "Test123";
// pageLoad.appendElement(test);

// pageLoad.clearContent();

// const test2 = document.createElement("h1");
// test2.innerText = "content was cleared";
// pageLoad.appendElement(test2);

// pageLoad.clearContent();

// pageLoad.appendInnerHTML(Header());

// pageLoad.appendElement(test);

pageLoad.appendInnerHTML(Header.template);
pageLoad.appendInnerHTML(Footer.template);