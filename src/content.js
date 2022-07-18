const content = (() => {

    const createContainerElement = (arg) => {
        const element = document.createElement("div");
        element.setAttribute("class", "content");

        if (arg) {
            element.innerHTML = arg;
        }
        return element;
    }

    const setContainerElement = (e) => {
        const elementContainer = document.getElementsByClassName("content");
        switch (e.target.outerText) {
            case "Home": 
                return elementContainer[0].innerHTML = content.home;
            case "Menu": 
                return elementContainer[0].innerHTML = content.menu;
            case "Contact": 
                return elementContainer[0].innerHTML = content.contact;
        }
    }

    const getContainerElement = () => {
        const container = document.getElementsByClassName("content");
        return container;
    }

    const home = `
        <div>Home content goes here</div>
    `;

    const menu = `
        <div>Menu content goes here</div>
    `;
    
    const contact = `
        <div>Contact content goes here</div>
    `;

    return {home, menu, contact, createContainerElement, getContainerElement, setContainerElement};
})();

export {content};