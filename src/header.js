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

  return {template};
})();

export {Header};