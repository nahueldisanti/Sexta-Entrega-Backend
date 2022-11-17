const socket = io.connect();

function addMessage() {
    const mensaje = document.getElementById('mensajes').value;
    const nombre = document.getElementById('correo').value;

    const newMessage = {
        correo: correo, 
        mensaje: mensaje
    }
    socket.emit('new-message', newMessage);
    return false;
}

function render(data) {

    const html = data.map((elem, index) => {
        return (`
        <div>
            <strong>${elem.correo}</strong>
            <strong>[${elem.fecha}]:</strong>
            <strong>${elem.mensaje}</strong>
        </div>
        `);
    }).join('');

    document.getElementById('messeges').innerHTML = html;
}

socket.on('mensajes', function(data) {
    render(data);
});