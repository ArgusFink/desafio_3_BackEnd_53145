import { Server } from 'socket.io';

//Configuracion de socket
//Recibimos el httpServer como parametro
export const socketConf = (httpServer) => {
	//Creamos el servidor de socket
	const io = new Server(httpServer);

	//Escuchamos cuando alguien se conecta.
	io.on('connection', (socket) => {
		console.log('Cliente conectado');
	});
    
	return io;
};