const pageLoad = (() => {

  const container = document.getElementById("content");
  
  const background = (link) => {
    const background = document.createElement("img");
    background.setAttribute("src", link)
    container.appendChild(background);
  }

  const appendContent = (element) => {
    container.appendChild(element);
  }

  const clearContent = () => {
    for (let i = 0; i <= container.childNodes.length; i++) {
      container.childNodes[0].remove();
    }
  }

  return {background, appendContent, clearContent};

})();

export {pageLoad};