import { pageLoad } from "./page-load";
import './style.css';

pageLoad.background("../src/pasta_bowl.jpg");

const test = document.createElement("div");
test.innerText = "Test123";
pageLoad.appendContent(test);

pageLoad.clearContent();

const test2 = document.createElement("h1");
test2.innerText = "content was cleared";
pageLoad.appendContent(test2);

pageLoad.clearContent()
