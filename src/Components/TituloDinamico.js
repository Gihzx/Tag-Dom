//maneira profissional de fazer

class Cardnews extends HTMLElement{
    // execultado primeiro
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        //ser submisso na e herarquia/ invoca o resultado do build
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles)
    }
    //contruir os elemntos que serão rederizado
    build(){
        // div maior
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")
        //div que serão manipulados oela div maior

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card__Left")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card__right")
        
        //fazendo as ligaçoes das divs menores para ser manipulada pea div maior
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        return componentRoot
    }
    //vai aplicar os estilos
    styles(){

    }
}
customElements.define("card-new", Cardnews)