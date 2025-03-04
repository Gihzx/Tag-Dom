//maneira profissional de fazer

class Cardnews extends HTMLElement {
    // execultado primeiro
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
      //ser submisso na e herarquia/ invoca o resultado do build
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles);
    }
    //contrui toda parte de html
    build() {
      // div maior
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
      //div que serão manipulados oela div maior
  
      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__Left");

      const autor = document.createElement("span");
      autor.textContent = "By" + this.getAttribute("autor");

      const linkTitle = document.createElement("a");

      const newsContent = document.createElement("p");
  
      cardLeft.appendChild(autor);
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsContent);
  
      const cardRight = document.createElement("div");
  
      cardRight.setAttribute("class", "card__right");
      const newImg = document.createElement("img");
      cardRight.appendChild(newImg);
      //fazendo as ligaçoes das divs menores para ser manipulada pea div maior
      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);
  
      return componentRoot;
    }
    //vai aplicar os estilos
    styles() {}
  }
  customElements.define("card-new", Cardnews);
  