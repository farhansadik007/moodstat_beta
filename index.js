let count = 0;

let heartBreak = document.getElementById("hb")
let displayCount = document.getElementById("digit")
let incrementElement = document.getElementById("increment")

count = Number(localStorage.getItem("count"))
displayCount.textContent = count

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        heartBreak.textContent = data.totalHeartbreak
    })

function increment() {
    count++;
    displayCount.textContent = count
    localStorage.setItem("count", count)

}

incrementElement.addEventListener("click", increment)