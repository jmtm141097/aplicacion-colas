//Comando para establecer la comunicacion
let socket = io();

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let label = $('small');

$('h1').text('Escritorio: ' + escritorio);

$('button').on('click', () => {

    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);

    });

});