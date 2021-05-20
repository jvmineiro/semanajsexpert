import { constants } from "./constants.js"

export default class SocketBuilder {
    constructor({ socketUrl }) {
        this.socketUrl = socketUrl
    }

    setOnUserConnected(fn) {

    }

    setOnUserDisconnected(fn) {
        
    }

    build() {
        const socket = globalThis.io.connect(this.socketUrl, {
            withCredentials: false
        })

        socket.on('connection', () => console.log('conectei!'))
        socket.on(constants.events.USER_CONNECTED, () => console.log())
        socket.on(constants.events.USER_DISCONNECTED, () => console.log())

        return socket
    }
}