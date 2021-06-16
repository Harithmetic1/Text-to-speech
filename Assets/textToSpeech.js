// let volume = document.querySelector('#volume');
// let volumeValue = document.querySelector(".volume-value")
// let pitch = document.querySelector('#pitch');
// let pitchValue = document.querySelector(".pitch-value");
let text = document.querySelector("#text-input");
let playBtn = document.querySelector(".play");
let pauseBtn = document.querySelector(".pause");
let resumeBtn = document.querySelector(".resume");
let voiceSelect = document.querySelector("#voices");

let voiceArray = []
let talk;

let speech = new SpeechSynthesisUtterance;
// speech.lang = "en-US"


window.speechSynthesis.onvoiceschanged = () => {
    let voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    voices.forEach((voice, key) => {    
        voiceSelect.innerHTML += `<option value="voices">${voice.name}</option>`;
        voiceArray.push(voice);
    })
    console.log(voiceArray);
}

voiceSelect.addEventListener("change", (() => {
    let selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].text;
    console.log(selectedVoice);
    // speech.voice = selectedVoice;
}))

playBtn.addEventListener("click", (() => {
    // console.log(text.value, window.speechSynthesis.getVoices());
    // speech.text = text.value;
    talk = new SpeechSynthesisUtterance(text.value)
    let selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].text;
    for(i = 0; i < voiceArray.length; i++){
        if(voiceArray[i].name == selectedVoice){
            talk.voice = voiceArray[i];
            talk.lang = voiceArray[i].lang;
        }
    }
    window.speechSynthesis.speak(talk);
    console.log("Testing");
}))

pauseBtn.addEventListener("click", (() => {
    window.speechSynthesis.pause();
    console.log("E suppose work oo");
}))

resumeBtn.addEventListener("click", (() =>{
    window.speechSynthesis.resume();
    console.log("No be juju be this?");
}))

// volume.addEventListener("change", (() => {
//     volumeValue.innerHTML = volume.value;
// }))

// pitch.addEventListener("change", (() => {
//     pitchValue.innerHTML = pitch.value;
// }))

