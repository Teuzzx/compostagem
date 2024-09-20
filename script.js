document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const rua = document.getElementById('rua').value;
    const cep = document.getElementById('cep').value;

    if (nome && numero && rua && cep) {
        document.getElementById('mensagem').textContent = 'Coleta agendada com sucesso! Obrigado, ' + nome + '!';
        document.getElementById('form-agendamento').reset(); // Limpa o formulário
    } else {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
    }
});
/*TESTE*/
// Navegação suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,  // Ajuste se o cabeçalho estiver sobrepondo
                behavior: 'smooth'
            });
        }
    });
});

// Efeito ao rolar a página (shrink do cabeçalho)
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#216F35';  // Alterar a cor quando rolar
        header.style.transition = 'background-color 0.3s ease';  // Transição suave
    } else {
        header.style.backgroundColor = '#28a745';  // Cor original
    }
});

// Exemplo de alerta ao clicar no botão "Seja Nosso Parceiro"
document.querySelector('a[href="#servicos"]').addEventListener('click', function () {
    alert('Obrigado por querer ser nosso parceiro! Entre em contato para mais informações.');
});






let map;
let marker;

function initMap() {
    // Inicializa o mapa com um centro padrão
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -15.7942, lng: -47.8822 }, // Centro do Brasil
        zoom: 4
    });

    // Adiciona um ouvinte de evento para cliques no mapa
    map.addListener('click', function(event) {
        // Remove o marcador anterior, se existir
        if (marker) {
            marker.setMap(null);
        }
        // Cria um novo marcador na posição clicada
        marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'Local de Coleta'
        });
    });
}
