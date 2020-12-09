//Comando para establecer la comunicacion
let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al server');
});

socket.on('disconnect', () => {
    console.log('Desconectado...');
});

socket.on('estadoActual', (data) => {
    label.text(data.actual);
});

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.text(siguienteTicket);

    });

});