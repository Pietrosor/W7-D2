let count = sessionStorage.getItem("counter")
  ? Number(sessionStorage.getItem("counter"))
  : 0

// Mostra il valore iniziale
document.getElementById("timer").textContent = count

// Aggiorna il contatore ogni secondo
setInterval(() => {
  count++
  document.getElementById("timer").textContent = count
  sessionStorage.setItem("counter", count) // Salva il valore aggiornato
}, 1000)
