const imgUser = document.getElementById('imgUser')
const roomTopic = document.getElementById('pTopic')
export default class View {
    static updateUserImage({img, username}) {
        imgUser.src= img
        imgUser.al = username
    }

    static updateRoomTopic({topic}) {
        roomTopic.innerHTML = topic
    }
}