
document.addEventListener("DOMContentLoaded", function () {
    function validarTiempo() {
        const min = document.getElementById("inputEmail4").value;
        const seg = document.getElementById("inputPassword4").value;

        const estilo = document.getElementById("inputState").value;
        const metraje = document.getElementById("inputState2").value;
        const resultadoSpan = document.getElementById("resultado");

        // VERIFICACIONES
        const esCorrecto = min === "2" && seg === "45" && estilo === "crol" && metraje === "200";
        const unaOpcionesCorrectas = (min === "2" && seg !== "45" && estilo !== "crol" && metraje !== "200") || (min !== "2" && seg === "45" && estilo !== "crol" && metraje !== "200") || 
                                     (min !== "2" && seg !== "45" && estilo === "crol" && metraje !== "200") || (min !== "2" && seg !== "45" && estilo !== "crol" && metraje === "200");
        const dosOpcionesCorrectas = (min === "2" && seg === "45") || (min === "2" && estilo === "crol") 
                                     || (min === "2" && metraje === "200") || (seg === "45" && estilo === "crol") || (seg === "45" && metraje === "200") || (min === "2" && metraje === "200")
                                     || (estilo === "crol" && metraje === "200");
        const tresOpcionesCorrectas = (min === "2" && seg === "45" && estilo === "crol" && metraje !== "200") || (min === "2" && seg === "45" && estilo !== "crol" && metraje === "200") || 
                                      (min === "2" && seg !== "45" && estilo === "crol" && metraje === "200") || (min !== "2" && seg === "45" && estilo === "crol" && metraje === "200");

        if (esCorrecto) {
            resultadoSpan.textContent = "Correcto";
            resultadoSpan.style.color = "green";
        } else if (tresOpcionesCorrectas) {
            resultadoSpan.textContent = "Por poco";
            resultadoSpan.style.color = "yellow";
        }else if (dosOpcionesCorrectas) {
            resultadoSpan.textContent = "A medio Camino";
            resultadoSpan.style.color = "orange";
        }else if (unaOpcionesCorrectas) {
            resultadoSpan.textContent = "Casi";
            resultadoSpan.style.color = "pink";
        } else {
            resultadoSpan.textContent = "Error";
            resultadoSpan.style.color = "red";
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        validarTiempo();
    });
});

