const abrirFormulario = document.querySelector("#abrir-formulario");
const fecharFormulario = document.querySelector("#fechar-formulario");
const formulario = document.querySelector("#form-orcamento");
const fundoFormulario = document.querySelector("#form-backdrop");

function abrirModal() {
    formulario.classList.add("is-open");
    fundoFormulario.classList.add("is-open");
    formulario.setAttribute("aria-hidden", "false");
    fundoFormulario.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    formulario.focus();
}

function fecharModal() {
    formulario.classList.remove("is-open");
    fundoFormulario.classList.remove("is-open");
    formulario.setAttribute("aria-hidden", "true");
    fundoFormulario.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    abrirFormulario.focus();
}

abrirFormulario.addEventListener("click", abrirModal);
fecharFormulario.addEventListener("click", fecharModal);
fundoFormulario.addEventListener("click", fecharModal);

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && formulario.classList.contains("is-open")) {
        fecharModal();
    }
});
