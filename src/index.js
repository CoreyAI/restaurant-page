import { pageLoad } from "./page-load";

pageLoad.background("./pasta_bowl.jpg");

const test = document.createElement("div");
test.innerText = "Test123";
pageLoad.appendContent(test);

pageLoad.clearContent();

const test2 = document.createElement("h1");
test2.innerText = "content was cleared";
pageLoad.appendContent(test2);