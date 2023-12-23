
// OBJETIVO 1 -  QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM NA LISTAGEM, DEVEMOS SELECIONALO

// PASSO 1 - PEGAR OS PERSONAGENS NO JS PRA PODER VERIFICAR QUANDO O USUARIO PASSAR O 
// MOUSE EM CIMA DE UM DELES.

const personagens = document.querySelectorAll('.personagem');

// PASSO 2 - adicionar a classe selecionado no personagem que o usuário passar o cursos do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        // PASSO 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.


// OBJETIVO 2 -  QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM NA LISTAGEM, TROCAR A IMAGEM, O NOME E A DESCRIÇÃO DO PERSONAGEM GRANDE.

        // PASSO 1 - pegar o elemento do personagem grande para adicionar as informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // PASSO 2 - alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;      
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // PASSO 3 - alterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        // PASSO 4 - alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})




    

