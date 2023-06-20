const APP_ID = "fb18a820a7f8457498d4895df9b31a69"
const CHANNEL = "mainChannel"
const TOKEN = "007eJxTYHhpryXD+6/r2IxIhfM8swtffVD/ZsT5RbjuyY9HOzrdk4QVGNKSDC0SLYwMEs3TLExMzU0sLVJMLCxNU9Isk4wNE80s332bkNIQyMiQPPMwMyMDBIL43Ay5iZl5zhmJeXmpOQwMAIKrI50="

console.log("Stream js is connected")



let UID;
const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async() =>{

   UID =  await client.join(APP_ID,CHANNEL,TOKEN,null)
   console.log("-------")
   localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
   console.log("LocalTracks",localTracks)

   let player = `<div class="video-container" id="user-container-${UID}">
   <div class="username-wrapper"> <span class="user-name">My Name is Annie</span></div>
   <div class="video-player" id="user-${UID}"></div>
</div>`
   document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)
  
  localTracks[1].play(`user-${UID}`)
await client.publish(localTracks[0],localTracks[1])


}
joinAndDisplayLocalStream()