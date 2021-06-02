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

//? links de navegação ativos
const link = document.querySelector(".menu-nav li");
link.addEventListener("click", linkAtivo)

function linkAtivo(){
    if(link === onclick){
        link.style.bgColor = red;
    }
}