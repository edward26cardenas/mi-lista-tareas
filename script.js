let boton = document.getElementById("save");
boton.addEventListener("click", () => {

  let crearNota = document.createElement("li");
  let container = document.getElementById("container");
  let btnBorrar = document.createElement("button");
  crearNota.textContent = document.getElementById("content").value
  btnBorrar.textContent = "eliminar"

  if (document.getElementById("content").value != ("")) {

    container.appendChild(crearNota);
    crearNota.appendChild(btnBorrar);
  }

  btnBorrar.addEventListener("click", () => {

    crearNota.remove();

  });


});
