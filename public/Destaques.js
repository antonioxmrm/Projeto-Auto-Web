const destaqueCards = document.querySelectorAll('.destaque-card');

destaqueCards.forEach(card => {
    card.addEventListener('click', function () {
        const link = this.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
    card.style.cursor = 'pointer'; // Indica que o card é clicável
});


// Simulação de dados vindo do banco de dados
const carrosData = [
    {
        nome: "NOME DO CARRO 1",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: false
    },
    {
        nome: "NOME DO CARRO 2",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: false
    },
    {
        nome: "NOME DO CARRO 3",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: false
    },
    {
        nome: "NOME DO CARRO 4",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: false
    },
    {
        nome: "NOME DO CARRO 5",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: false
    },
    {
        nome: "NOME DO CARRO 6",
        anoKm: "ANO DO CARRO - KM",
        valor: "Valor do carro",
        imagem: "images/png-1.svg",
        link: "Produto.html",
        blindado: true
    }
];

const destaquesGrid = document.getElementById('destaquesGrid');

carrosData.forEach(carro => {
    const card = document.createElement('div');
    card.classList.add('destaque-card');
    card.dataset.link = carro.link;
    card.style.cursor = 'pointer';

    if (carro.blindado) {
        const blindadoTag = document.createElement('div');
        blindadoTag.classList.add('blinado-tag');
        blindadoTag.textContent = 'BLINDADO';
        card.appendChild(blindadoTag);
        card.classList.add('blinado'); // Adiciona classe para estilos específicos
    }

    const imagem = document.createElement('img');
    imagem.src = carro.imagem;
    imagem.alt = carro.nome;
    card.appendChild(imagem);

    const info = document.createElement('div');
    info.classList.add('card-info');

    const nomeH3 = document.createElement('h3');
    nomeH3.textContent = carro.nome;
    info.appendChild(nomeH3);

    const anoKmP = document.createElement('p');
    anoKmP.textContent = carro.anoKm;
    info.appendChild(anoKmP);

    const valorP = document.createElement('p');
    valorP.textContent = `R$ ${carro.valor}`;
    info.appendChild(valorP);

    card.appendChild(info);
    destaquesGrid.appendChild(card);

    card.addEventListener('click', function () {
        const link = this.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});