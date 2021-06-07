//? formatando a horário de 1 para 01
const formatarZeros = (n) => {
    return ("0" + n).slice(-2);
}

//? mostrando horário do sistema
const horaFormatada = setInterval(() => {
    const horaSistema = new Date();
    let semana, meses, diaSemana, dia, mes, ano, hora, mins, secs;
    semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    diaSemana = horaSistema.getDay();
    dia = formatarZeros(horaSistema.getDate());
    mes = horaSistema.getMonth();
    ano = horaSistema.getFullYear();
    hora = formatarZeros(horaSistema.getHours());
    mins = formatarZeros(horaSistema.getMinutes());
    secs = formatarZeros(horaSistema.getSeconds());

    document.getElementById("data-hora").innerHTML = `${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano} | ${hora}:${mins}:${secs}`;
}, 1);

//? voltar ao topo
const btnTopo = document.querySelector("#btn-topo");
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }); 
});

//? mostrando ou ocultando o botão de voltar ao topo
function exibirBotao() {
    if(window.scrollY === 0){
        btnTopo.style.display = "none";
    }
    else{
        btnTopo.style.display = "block";
    }
}
window.addEventListener("scroll", exibirBotao);

//? menu de navegação fixo
const nav = document.querySelector(".menu-nav");
const fixo = nav.scrollTop;

window.onscroll = function() {
    menuFixo();
}

function menuFixo(){
    if(Window.pageYOffset >= fixo){
        nav.classList.add("fixo");
    }
    else{
        nav.classList.remove("fixo");
    }
}

//? mensagem de erro formulário de contato
const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", exibirMensagem);

function exibirMensagem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;
    const msgProcessForm = document.querySelector("#msg-process-form");

    if(nome === "" && email === "" && titulo === "" && mensagem === ""){
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Falha ao enviar mensagem.<span class="close-btn">X</span>';
        msgProcessForm.classList.add("erro");
    }
    else if(email === "" && titulo === "" && mensagem === ""){
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Falha ao enviar mensagem.<span class="close-btn">X</span>';
    }
    else if(titulo === "" && mensagem === ""){
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Falha ao enviar mensagem.<span class="close-btn">X</span>';
    }
    else if(mensagem === ""){
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Falha ao enviar mensagem.<span class="close-btn">X</span>';
    }
    else{
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Mensagem enviado com sucesso.<span class="close-btn">X</span>';
    }
}

//? fechar mensagem de erro
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", fecharMensagem);

function fecharMensagem(){
    const msgErro = document.querySelector("#msg-process-form");
    msgErro.style.visibility = "hidden";
}