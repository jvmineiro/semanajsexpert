import {constants} from "../../_shared/constants.js";

export default class RoomController{
    constructor({roomInfo, socketBuilder, view }) {
        this.socketBuilder = socketBuilder
        this.roomInfo = roomInfo
        this.view = view
        this.socket = {}
    }
    static async initialize(deps){
        return new RoomController(deps)._initialize()
    }
    async _initialize() {
        this._setupViewEvents()
        
        this.socket = this._setupSocket()

        this.socket.emit(constants.events.JOIN_ROOM, this.roomInfo)
    }

    _setupViewEvents() {
        this.view.updateUserImage(this.roomInfo.user)
        this.view.updateRoomTopic(this.roomInfo.room.topic)
    }

    _setupSocket() {
        return this.socketBuilder
            .setOnUserConnected(this.onUserConnected())
            .setOnUserDisconnected(this.onDisconnected())
            .setOnRoomUpdated((room) => this.onRoomUpdated())
            .build()
    }

    onRoomUpdated() {
        return console.log('room list!', room)
    }

    onDisconnected() {
        return (user) => console.log('user disconnected!', user)
    }

    onUserConnected() {
        return (user) => console.log('user connected!', user)
    }
}