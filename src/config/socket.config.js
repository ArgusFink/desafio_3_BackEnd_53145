import { Server } from 'socket.io';

export const socketConf = (httpServer) => {

	const io = new Server(httpServer);

	io.on('connection', (socket) => {
		console.log('Cliente conectado');
	});
    
	return io;
};