


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
    });
}