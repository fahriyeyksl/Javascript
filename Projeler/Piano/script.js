const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".valume-slider input "),
keysCheckbox = document.querySelector(".checked-slider input");

let allKeys = [],
audio = new Audio('tunes/a.wav');

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    console.log(clickedKey);
    if (clickedKey) {
        clickedKey.classList.add('active');
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    } 
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);

    key.addEventListener("click",() => playTune(key.dataset.key));
});

const handVolume = (e) =>{
    audio.volume = e.target.value;
}

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) =>{
    if (allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handVolume);
document.addEventListener("keydown",pressedKey);