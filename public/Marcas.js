const marcasWrapper = document.getElementById('marcasWrapper');
        const marcasItens = document.querySelectorAll('.marca-item');
        let currentIndex = 0;
        const transitionTime = 4000; // Tempo de exibição de cada item (em milissegundos)

        function showItem(index) {
            marcasItens.forEach(item => {
                item.classList.remove('active', 'prev');
            });

            const currentItem = marcasItens[index];
            currentItem.classList.add('active');

            const prevIndex = (index - 1 + marcasItens.length) % marcasItens.length;
            marcasItens[prevIndex].classList.add('prev');
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % marcasItens.length;
            showItem(currentIndex);
        }

        // Exibe o primeiro item inicialmente
        showItem(currentIndex);

        // Inicia o ciclo automático
        setInterval(nextItem, transitionTime);