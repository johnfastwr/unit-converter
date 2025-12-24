
const oneMeter = 3.281 //feet
const  oneLiter = 0.264 //gallon
const oneKilogram = 2.204 //pound
const oneFeet = 0.304//meter
const oneGallon = 3.785//liter
const onePound = 0.453// kg
const convertEl = document.querySelector('button')
const inputEl = document.querySelector('input');
convertEl.addEventListener("click",function (){
    let value = inputEl.value
    console.log("working")
    convert(value)
})
function convert(value){
    const lengthEl = document.getElementById("length-result")
    const volumeEl = document.getElementById("volume-result")
    const massEl = document.getElementById("mass-result")
    lengthEl.textContent = `${value} meter = ${(value*3.281).toFixed(3)} feet |${value} feet = ${(value*0.304).toFixed(3)} meter`
    volumeEl.textContent = `${value} liter = ${(value*0.264).toFixed(3)} gallon |${value} gallon = ${(value*3.785).toFixed(3)} liter`
    massEl.textContent = `${value} Kilogram = ${(value*2.204).toFixed(3)} pound |${value} pound = ${(value*0.453).toFixed(3)} kilogram`

}
