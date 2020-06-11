// You have to think both in the shoes of peer1(you) as well as peer2(other)
// similtaneously!


// ========================================================================
// connection
// ========================================================================
var Peer = require('simple-peer')
const p = new Peer({
    initiator: location.hash === '#init', // know who is initiating con
    trickle: false
})

p.on('error', err => console.log('error', err))

// when itialized by one of peers (by going to `localhost:port/#init`)
// Note: continously refresh page if doesn't work
p.on('signal', (data) => {
    document.getElementById('yourId').innerHTML = JSON.stringify(data)
    // `data` is your ID in json that need to be sent to other peer.
})

// paste your ID in ANOTHER peer and connect by clicking `connect`
document.getElementById('connect').addEventListener('click', () => {
    // i. get id
    var otherId = JSON.parse(document.getElementById('otherId').value)
    // ii. notify ready to connect. sends `signal`
    p.signal(otherId)
    // disp on ui
    document.getElementById('connect').innerHTML="connected from your side!!"
})


// ========================================================================
// messages
// ========================================================================
// when clicked `send` take message in `message` and send it 
document.getElementById('send').addEventListener('click', ()=> {
    var yourMsg = document.getElementById('yourMsg').value
    // send
    p.send(yourMsg)
    // log
    document.getElementById('logs').textContent += "YOU: " + yourMsg + "\n"
})

// display sent messages in `logs`
p.on('data', (data)=>{
    document.getElementById('logs').textContent += "MESSAGE: " + data + "\n"
})