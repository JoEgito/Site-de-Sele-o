const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Adicione seus eventos de botões aqui
const addTrainBtn = document.getElementById("addTrainBtn");
const listTrainBtn = document.getElementById("listTrainBtn");
const deleteTrainBtn = document.getElementById("deleteTrainBtn");

addTrainBtn.addEventListener("click", () => {
  // Lógica para adicionar treino
  console.log("Adicionar treino...");
});

listTrainBtn.addEventListener("click", () => {
  // Lógica para listar treinos
  console.log("Listar treinos...");
});

deleteTrainBtn.addEventListener("click", () => {
  // Lógica para apagar treino
  console.log("Apagar treino...");
});
