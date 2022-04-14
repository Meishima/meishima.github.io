const months = document.querySelector(".months")
const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

const end = new Date(2022, 5, 22, 0, 0, 1)
const oneMonth = 30 * 24 * 60 * 60 * 1000
const oneDay = 24 * 60 * 60 * 1000
const oneHour = 60 * 60 * 1000
const oneMinute = 60 * 1000

function timer() {
    const today = new Date().getTime()
    let remainingTime = end.getTime() - today

    months.textContent = Math.floor(remainingTime / oneMonth) + "m"
    days.textContent = Math.floor((remainingTime % oneMonth) / oneDay) + "d"
    hours.textContent = Math.floor((remainingTime % oneDay) / oneHour) + "h"
    minutes.textContent = Math.floor((remainingTime % oneHour) / oneMinute) + "m"
    seconds.textContent = Math.floor((remainingTime % oneMinute) / 1000) + "s"
}

let timerTime = setInterval(timer, 1000)
timer()