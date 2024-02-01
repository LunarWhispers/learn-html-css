function getRandomColor() {
    return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}
const itemELs=document.querySelectorAll(".item")
for (const item of itemELs) {
    item.style.backgroundColor =getRandomColor()
}