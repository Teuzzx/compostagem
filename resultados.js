document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoProgresso').getContext('2d');

    let grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Progresso da Compostagem',
                data: [10, 20, 30, 40],
                borderColor: 'rgba(39, 174, 96, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    window.atualizarGrafico = function() {
        grafico.data.datasets[0].data = [15, 25, 35, 50];
        grafico.update();
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoProgresso').getContext('2d');

    let grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Progresso da Compostagem',
                data: [10, 20, 30, 40],
                borderColor: 'rgba(39, 174, 96, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    window.atualizarGrafico = function() {
        grafico.data.datasets[0].data = [15, 25, 35, 50];
        grafico.update();
    };

    // Animação das bordas das imagens
    const imagens = document.querySelectorAll('.imagem-interativa');

    imagens.forEach(imagem => {
        imagem.addEventListener('mouseover', () => {
            imagem.style.borderColor = '#27ae60';
        });

        imagem.addEventListener('mouseout', () => {
            imagem.style.borderColor = 'transparent';
        });
    });
});
