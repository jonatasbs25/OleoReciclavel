//? formatando a horário de 1 para 01
const formatarZeros = (n) => {
    return ("0" + n).slice(-2);
}

//? mostrando horário do sistema
const horaFormatada = setInterval(() => {
    let hora, mins, secs;
    const horaSistema = new Date();

    hora = formatarZeros(horaSistema.getHours());
    mins = formatarZeros(horaSistema.getMinutes());
    secs = formatarZeros(horaSistema.getSeconds());

    document.getElementById("hora").innerHTML = hora + ":" + mins + ":" + secs;
}, 1000);

