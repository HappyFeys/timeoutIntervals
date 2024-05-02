///// Exo 1 /////
const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)
const p = document.createElement('p')
div.appendChild(p)

function write(word) {
    let wordSplit = word.split('');
    let index = 0;

    let intervalId = setInterval(() => {
        if (index < wordSplit.length) {
            displayLetter(wordSplit[index]);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

function displayLetter(element) {
    p.innerText+=element
}

write('Keller')

///// Exo 2 /////

const pSecond = document.createElement('p')
div.appendChild(pSecond)
const pMinute = document.createElement('p')
div.appendChild(pMinute)

window.addEventListener("load", ()=>{
    let seconde = 0
    let minute = 0
    setInterval(()=>{
        seconde++
        pSecond.innerText=seconde
        if (seconde>=60 && seconde%60==0) {
            console.log("je rentre dedans");
            minute++
            pMinute.innerText=`${minute} minutes have passed`
            
        }
    },1000)
})
