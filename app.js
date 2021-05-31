const kick = document.querySelector("#kick");
const snare = document.querySelector("#snare");
const hihat = document.querySelector("#hihat");
const ride = document.querySelector("#ride");
const clappo = document.querySelector("#clappo");
const cowbell = document.querySelector("#cowbell");
const hopen = document.querySelector("#hopen");
const splash = document.querySelector("#splash");
const tomhi = document.querySelector("#tomhi");

const obj = {
    1: 'kick',
    2: 'snare',
    3: 'hihat',
    4: 'ride',
    5: 'clappo',
    6: 'cowbell',
    7: 'hopen',
    8: 'splash',
    9: 'tomhi',

}

for (i = 0; i < 9; i++) {
    const kits = document.querySelectorAll(".kits")[i];
    kits.addEventListener('click', (e) => {
        //console.log(e.target.innerHTML);
        let kit = e.target.id.toLowerCase().replace(" ", "");
        //console.log(kit);
        playAudio(kit)

    })


}

document.addEventListener('keypress', (e) => {
    let keyName = e.key.toLocaleLowerCase();
    // let tune = obj;

    //console.log(obj[keyName]);

    let tuneName = obj[keyName];
    if (tuneName) {
        //console.log(tuneName);
        let box = document.querySelector("#" + tuneName)
        box.classList.add("active");
        playAudio(tuneName);
        setTimeout(() => {
            box.classList.remove("active")
        }, 50)



    }




})


//function to play Audio
const playAudio = (kitName) => {

    let audiolocation = "kits/" + kitName + ".wav";
    //console.log(audiolocation);
    let sound = new Audio(audiolocation)

    sound.play();

}