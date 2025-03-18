let count = sessionStorage.getItem("counter")
  ? Number(sessionStorage.getItem("counter"))
  : 0

document.getElementById("timer").textContent = count

setInterval(() => {
  count++
  document.getElementById("timer").textContent = count
  sessionStorage.setItem("counter", count)
}, 1000)
