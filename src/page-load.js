const pageLoad = (() => {

  const container = document.getElementById("content");
  
  const background = (link) => {
    const background = document.createElement("img");
    background.setAttribute("src", link)
    container.appendChild(background);
  }

  const appendElement = (element) => {
    container.appendChild(element);
  }

  const appendInnerHTML = (string) => {
    container.innerHTML += string;
  }

  const clearContent = () => {
    for (let i = 0; i <= container.childNodes.length; i++) {
      container.childNodes[0].remove();
    }
  }

  return {background, appendElement, appendInnerHTML, clearContent};

})();

export {pageLoad};