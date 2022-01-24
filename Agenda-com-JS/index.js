const bottom = document.querySelector("#bottom");
const tarefa = document.querySelector("#tarefa");
const horario = document.querySelector("#tarefa-horario");
const resultado = document.querySelector(".resultado");
resultado.style.display = "none"

bottom.addEventListener("click", () => {

    if (horario.value == "" || horario.value == "") {
        alert("Digite algo antes de anexar a agenda")
    } else {
        resultado.style.display = "flex";
        resultado.style.flexDirection = "column";

        let elemento = document.createElement("p");
        elemento.textContent = `• ás ${horario.value} tenho que ${tarefa.value}.`
        resultado.appendChild(elemento);
        horario.value = "";
        tarefa.value = "";
    }




})
