const Header = (() => {
  const template = `
    <nav class="header">
      <div class="restaurant-name">Uncle Tony's</div>
      <div class="header-links">
        <div class="link" id="active">Home</div>
        <div class="link">Menu</div>
        <div class="link">Contact</div>
      </div>
    </nav>
  `;

  const setActiveTab = (tabElement) => {
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
      if (link.id == "active") {
        link.removeAttribute("id");
      }
      if (link.innerText == tabElement.target.outerText) {
        link.setAttribute("id", "active");
      }
    });
  }

  return {template, setActiveTab};
})();

export {Header};