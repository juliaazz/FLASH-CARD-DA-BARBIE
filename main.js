function criaCartao(pergunta, resposta){
    let conteudo = document.getElementById ('conteudo')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = 
    <div class = "cartao--conteudo">
    <div class="cartao--pergunta"><p>${pergunta}</p> </div>
    <div class="cartao--resposta"><p>${resposta}</p></div>
    </div> 
    
    console.log (cartao)

    let respostaEstaVisivel = false 
    function viracartao () {


        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
        console.log ('teste')

    }

    cartao.addEventListener('click', viracartao)
    conteudo.appendChild(cartao)









    
}