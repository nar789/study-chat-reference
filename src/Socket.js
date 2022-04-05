


module.exports = (_g) => {

    const io = _g.io; 

    function init() {

        io.on('connection', (socket) => {

            console.log('a user connected.');

            socket.on('disconnect', () => {
                console.log('user disconnected.');
            });

            socket.on('chat message', ({name, msg}) => {
                io.emit('chat message', {name, msg});
            });
        });


    }

    return {
        init : init
    }
}