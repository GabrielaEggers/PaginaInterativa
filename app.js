function categoria(categotia, pergunta, resposta) {
    let container = document.getELementetByI('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML =
    <div clas="cartao_conteuso">
        <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
            <p>${pergunta}</p>
    </div>
    <div class="cartao_conteu0_respota">
        <p>${resposta}</p>
    </div>
    </div>

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active' respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appenChil(cartao)