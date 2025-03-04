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
    autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("contet");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");

    cardRight.setAttribute("class", "card__right");
    const newImg = document.createElement("img");
    newImg.src = this.getAttribute("photo") || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
    newImg.alt = "Foto da noticia";
    cardRight.appendChild(newImg);
    //fazendo as ligaçoes das divs menores para ser manipulada pea div maior
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  //vai aplicar os estilos
  styles() {

    const style = document.createElement("style")`
    
    `

  }
}
customElements.define("card-new", Cardnews);
