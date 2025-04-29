
async function validarCodigo() {
    const codigoIngresado = document.getElementById('codigo').value.trim().toUpperCase();
    const respuesta = await fetch('certificados.json');
    const certificados = await respuesta.json();
    const certificado = certificados.find(c => c.codigo === codigoIngresado);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (certificado && certificado.nombre) {
        resultadoDiv.innerHTML = `
            <h3 style="color: gold;">🎉 ¡Felicitaciones! 🎉</h3>
            <p><strong>Nombre:</strong> ${certificado.nombre}</p>
            <p><strong>Curso:</strong> ${certificado.curso}</p>
            <p><strong>Fecha de Emisión:</strong> ${certificado.fecha}</p>
            <p style="font-style: italic;">Gracias por estudiar con Bestiario360°</p>
        `;
    } else {
        resultadoDiv.innerHTML = `<p style="color: red;">❌ Código inválido o no registrado.</p>`;
    }
}
