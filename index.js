class HelloWoird extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<h1> Seja Bem-vindo</h1>";
  }
}

customElements.define("card-new", HelloWoird);
