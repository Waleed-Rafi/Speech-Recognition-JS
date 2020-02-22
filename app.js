const start = document.querySelector('#start')
const content = document.querySelector('#content')
const read = document.querySelector('#read')

let message = 'firstly record something'

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

//not necessary but just for developing purpose
recognition.onstart = function () {
    console.log('microphone is activated');
}

//when user stop speaking , silence
recognition.onresult = function (event) {
    content.textContent = event.results[0][0].transcript
    message = event.results[0][0].transcript
    greetings(message)
}

start.addEventListener('click', () => {
    recognition.start()
})

//send some messages depends upon the sentences set below
const greetings = function (message) {
    const speech = new SpeechSynthesisUtterance()
    if (message.includes('how are you')) {
        speech.text = 'I am fine what about you'
    } else if (message.includes('hello')) {
        speech.text = 'Hy'
    } else if (message.includes("what's your name")) {
        speech.text = 'My name is waleed rafi'
    } else if (message.includes("how old are you")) {
        speech.text = 'I am 19 years old'
    } else if (message.includes("programming")) {
        speech.text = 'Programming is an art of creating a set of instructions that tell a computer how to perform a task'
    } else {
        speech.text = ''
    }
    speech.volume = 0.5
    window.speechSynthesis.speak(speech)
}

//read your message
const readMessage = function (message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 0.5
    window.speechSynthesis.speak(speech)
}

read.addEventListener('click', () => {
    readMessage(message)
})