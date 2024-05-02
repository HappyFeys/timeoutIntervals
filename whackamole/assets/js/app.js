const body = document.querySelector("body")
const section = document.createElement("section")
body.appendChild(section)

for (let i = 0; i < 12; i++) {
    const div = document.createElement('div')
    div.classList.add('hole')
    section.appendChild(div)
}

const hole = document.querySelectorAll(".hole");

function randomMole(hole) {
    let index = Math.floor(Math.random()*12)
    setInterval(()=>{
        index = Math.floor(Math.random()*12)
        hole[index].classList.add('mole')
    },1000)
    setInterval(()=>{
        hole[index].classList.remove('mole')
    },1400)
}

randomMole(hole)
let score = 0
const sectionScore = document.createElement("section")
body.appendChild(sectionScore)
sectionScore.innerText=`Votre score : ${score}`
for (const element of hole) {
    element.addEventListener('click', (e)=>{
        if (e.target.classList.contains('mole')) {
            e.target.classList.remove('mole')
            score++
            sectionScore.innerText=`Votre score : ${score}`
        }
    })
}

