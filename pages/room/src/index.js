import { constants } from "../../_shared/constants.js";
import SocketBuilder from "../../_shared/socketBuilder.js";

const socketBuilder = new SocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected(() => console.log('user connected!', user))
    .setOnUserDisconnected(() => console.log('user disconnected', user))
    .build()

const room = {
    id: Date.now(),
    topic: 'JS expert é nois'
}

const user = {
    img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png',
    username: 'JvMineiro'
}