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

//? mensagem de erro formulário de contato
const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", exibirMensagem);

function exibirMensagem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;
    const msgProcessForm = document.querySelector("#msg-process-form");
    const validarForm = nome === "" || email === "" || titulo === "" || mensagem === "";

    if(validarForm){
        msgProcessForm.classList.toggle("erro");
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Falha ao enviar mensagem.';
    }
    else{
        msgProcessForm.classList.toggle("sucess");
        msgProcessForm.style.display = "block";
        msgProcessForm.innerHTML = 'Mensagem enviada com sucesso.';
    }
}
