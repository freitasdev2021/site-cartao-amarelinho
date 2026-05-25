// Função para exibir modal com mensagem personalizada
function showModal(title, message) {
    const modal = document.getElementById('actionModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMessage').innerHTML = message;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('actionModal').style.display = 'none';
}

// Função para simular "download" do app (consumidor)
function handleDownloadApp() {
    showModal(
        "📱 Baixe o App DescontoTop",
        "Você será redirecionado para a loja de aplicativos.<br><strong>Clique em OK e faça o download grátis.</strong><br><br>Por enquanto, simulamos o acesso: <a href='#' style='color:#FFC107;'>Clique aqui para baixar</a> (versão demo)."
    );
    // Opcional: rastrear evento de conversão
    console.log("Evento de download consumidor acionado");
}

// Função para adesão empresarial (R$390)
function handleBusinessSignup() {
    showModal(
        "💼 Parceria DescontoTop - R$390",
        "Ótima escolha! Você será direcionado para a área de pagamento seguro.<br><br>✅ Acesso até 31/12 ao painel<br>✅ Suporte prioritário<br><br><strong>Clique em OK para simular a adesão</strong> (ambiente de testes)."
    );
    console.log("Lead empresário - R$390");
}

// funções para abrir modal com QR code ou redirecionamento para lojas (simulação de alta conversão)
function simulateStore(storeName) {
    showModal(
        "📲 Baixe o App",
        `Você será redirecionado para ${storeName} e poderá instalar o aplicativo DescontoTop gratuitamente. <br><br> <i class="fas fa-gift"></i> Ganhe 15% off na primeira compra!`
    );
}

// eventos de todos os botões de download (consumidor) e empresário

// botões de download do app (vários)
const downloadButtons = [
    'btnBaixarHero', 'consumerGooglePlay', 'consumerAppStore', 'finalConsumerBtn',
    'btnMockAppStore', 'btnMockGooglePlay'
];
downloadButtons.forEach(id => {
    const btn = document.getElementById(id);
    if(btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(id === 'btnMockAppStore') simulateStore('App Store');
            else if(id === 'btnMockGooglePlay') simulateStore('Google Play');
            else if(id === 'consumerGooglePlay') simulateStore('Google Play');
            else if(id === 'consumerAppStore') simulateStore('App Store');
            else handleDownloadApp();
        });
    }
});

// botões empresariais
const businessBtns = ['btnAdesaoEmpresario', 'finalBusinessBtn'];
businessBtns.forEach(id => {
    const btn = document.getElementById(id);
    if(btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            handleBusinessSignup();
        });
    }
});

// link hero "sou empresário" -> scroll suave para seção empresários
const empresarioLink = document.querySelector('a[href="#para-empresarios"]');
if(empresarioLink) {
    empresarioLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('para-empresarios').scrollIntoView({ behavior: 'smooth' });
    });
}
// botão "Baixar App Grátis" hero e demais mantém modal de download, mas também pode scroll para seção app
const btnBaixarHero = document.getElementById('btnBaixarHero');
if(btnBaixarHero) {
    btnBaixarHero.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('baixar-app').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            handleDownloadApp();
        }, 400);
    });
}

// garantir que clique no modal fora não feche? apenas pelo botão, mas opcional:
window.onclick = function(event) {
    const modal = document.getElementById('actionModal');
    if (event.target === modal) {
        closeModal();
    }
}