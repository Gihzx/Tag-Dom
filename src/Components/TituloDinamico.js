class TituloDinamico extends HTMLElement {
  constructor() {
    //primeira coisa a ser execultada
    super(); //chamndo o construtor do HTMLElemnt

    const shadow = this.attachShadow({ mode: "open" });

    //base do component <h1>Gisele</h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    //estilização do component
    const style = document.createElement("style");
    style.textContent = `
    h1{
    color: red
    }
    `;
    //enviar para o shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}
customElements.define("titulo-dinamico", TituloDinamico); //como ele vai se chamar/ o - é necessario para diferenciar das tag padrão
