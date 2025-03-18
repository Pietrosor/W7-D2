const nameInput = document.getElementById("name")
const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

saveButton.addEventListener("click", function () {
  let savedName = nameInput.value
  localStorage.setItem("index1", savedName)
})

deleteButton.addEventListener("click", function () {
  nameInput.value = " "
  localStorage.removeItem("index1")
})
