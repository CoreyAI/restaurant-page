import { pageLoad } from "./page-load";
import { Header } from "./header";
import { Footer } from "./footer";
import { content } from "./content";
import './style.css';

pageLoad.appendInnerHTML(Header.template);
pageLoad.appendInnerHTML(Footer.template);
pageLoad.appendElement(content.createContainerElement(content.home));

const headerLinks = document.querySelectorAll(".link");

headerLinks.forEach(link => {
    link.addEventListener("click", e => {
        Header.setActiveTab(e);
        content.setContainerElement(e);
    })
}); 