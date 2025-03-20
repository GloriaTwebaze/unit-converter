/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterUnit = 3.281
const literUnit = 0.264
const kgUnit = 2.204
const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
const convertedLength = document.getElementById('convert-length')
const convertedVol = document.getElementById('convert-vol')
const convertedMass = document.getElementById('convert-mass')

convertBtn.addEventListener('click', ()=>{
    let value = inputEl.value
    convertedLength.textContent =`${value} meters = ${(value*meterUnit).toFixed(3)} feet | ${value} feet = ${(value/meterUnit).toFixed(3)} meters`
    convertedVol.textContent =`${value} liters = ${(value*literUnit).toFixed(3)} gallons | ${value} gallons = ${(value/literUnit).toFixed(3)} liters`
    convertedMass.textContent =`${value} kilos = ${(value*kgUnit).toFixed(3)} pounds | ${value} pounds = ${(value/kgUnit).toFixed(3)} kilos`

    inputEl.value = ''
})