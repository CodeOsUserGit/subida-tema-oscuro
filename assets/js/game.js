let iconos = [];
let selecciones = [];

generarTablero();

function cargarIconos() {
  iconos = [
      '<img src="https://cdn-icons-png.flaticon.com/512/616/616412.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/6583/6583483.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/5511/5511666.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/616/616430.png" width="50%">',
      '<img src="https://cdn-icons.flaticon.com/png/512/2977/premium/2977350.png?token=exp=1657811908~hmac=76a82f2f07396e6d5371cfe235af1ccb" width="50%">',
      '<img src="https://cdn-icons.flaticon.com/png/512/848/premium/848698.png?token=exp=1657811972~hmac=a082271bc57aca591ca8484c9b027a1d" width="50%">',
      '<img src="https://cdn-icons.flaticon.com/png/512/1797/premium/1797350.png?token=exp=1657812005~hmac=c2ce19696c2a6b7d539d13bd50204376" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/4026/4026829.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/1553/1553257.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/826/826963.png" width="50%">',
      '<img src="https://cdn-icons-png.flaticon.com/512/523/523442.png" width="50%">',
  ]
}

function generarTablero() {
  cargarIconos();
  selecciones = [];
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let i = 0; i < 24; i++) {
    tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }
}

function deseleccionar(selecciones) {
  setTimeout(() => {
    let trasera1 = document.getElementById("trasera" + selecciones[0]);
    let trasera2 = document.getElementById("trasera" + selecciones[1]);
    if (trasera1.innerHTML != trasera2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    } else {
      trasera1.style.background = "plum";
      trasera2.style.background = "plum";
    }
  }, 1000);
}
