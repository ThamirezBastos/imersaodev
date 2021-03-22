function capturarHoras() {
    let insereHoras = document.getElementById('valorHoras').value;
    let devolveMinutos = insereHoras * 60
    document.getElementById('conversaoHoras').innerHTML = `${insereHoras} hora(s) são ${devolveMinutos} minutos.`;
}

function capturarMinutos() {
    let insereMinutos = document.getElementById('valorMinutos').value;
    let devolveSegundos = insereMinutos * 60
    document.getElementById('conversaoMinutos').innerHTML = `${insereMinutos} minuto(s) são ${devolveSegundos} segundos.`;
}