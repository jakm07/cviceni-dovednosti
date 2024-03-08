const html = Number(prompt("Na škále od 0-100, jak zvládáš HTML?"))
const css = Number(prompt("Na škále od 0-100, jak zvládáš CSS?"))
const js = Number(prompt("Na škále od 0-100, jak zvládáš JavaScript?"))

let updateSkill = (html, css, js) => {
    const htmlZapis = document.querySelector("#skill1 .skill__value")
    const cssZapis = document.querySelector("#skill2 .skill__value")
    const jsZapis = document.querySelector("#skill3 .skill__value")

    htmlZapis.textContent = html + " / 100"
    cssZapis.textContent = css + " / 100"
    jsZapis.textContent = js + " / 100"
}
    
updateSkill(html, css, js)
