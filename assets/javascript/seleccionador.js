document.addEventListener("DOMContentLoaded", function() {
  

    /*
    let instruction; 
        btnSI.addEventListener("click", function() {
      btnSI.classList.add("d-none");
      gameContainer.classList.remove("d-none");
      instruction = document.getElementById("instruction"); 
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      
      if (instruction) {
        instruction.textContent = "Piensa en un número del 1 al 100.";
      }
      noBtn.remove("d-none");
      linkBtn.remove("d-none");
      titleGame.remove("d-none")
    });
  */
  
    

  });
    const btnSI = document.getElementById("BtnSI");
    const btnNO = document.getElementById("BtnNO");
    const gameContainer = document.getElementById("gameContainer");
    const gameContainer2 = document.getElementById("gameContainer2");
    const BtnStart = document.getElementById("BtnStart");
    
     btnSI.addEventListener("click", function() {
    btnSI.classList.add("d-none");
    btnNO.classList.add("d-none");
    gameContainer.classList.remove("d-none");
    document.getElementById("titleGame").remove("d-none")
    });
    btnNO.addEventListener("click", function() {
    btnNO.classList.add("d-none");
    document.getElementById("titleGame").innerHTML = "Vamos a jugar un juego"
    document.getElementById("BtnSI").innerHTML = "Vale"
    });

    BtnStart.addEventListener("click", function() {
        gameContainer2.classList.remove("d-none");
        BtnStart.classList.add("d-none");
        document.getElementById("texto1").innerHTML = "el numero que elegiste es";
        document.getElementById("texto2").innerHTML = `¿${NumAleatorio}?`;
    });
    
    // Este es el contenedor que se modifica a lo largo de las iteraciones
    let NumAleatorio = Math.floor(Math.random() * 100) + 1;
    let UltimoDatoMayor = 100;
    let ultimoDatoMenor = 1;
    let UltimoDatoEnMemoria = NumAleatorio;   
    
    function BinarySearch(high, low) {
        return Math.floor((high + low) / 2);
    }
    
    function AdivinadorMenor() {
        UltimoDatoMayor = NumAleatorio;
        NumAleatorio = BinarySearch(NumAleatorio, ultimoDatoMenor);
        document.getElementById("texto2").innerHTML = `¿${NumAleatorio}?`;
    }
    
    function AdivinadorMayor() {
        ultimoDatoMenor = NumAleatorio;
        NumAleatorio = BinarySearch(UltimoDatoMayor, NumAleatorio);
        document.getElementById("texto2").innerHTML = `¿${NumAleatorio}?`;
    }
    
    function NumeroElegido() {
        document.getElementById("texto1").innerHTML = `Tu número es el ${NumAleatorio}, excelente decisión`;
        document.getElementById("texto2").innerHTML = `<img src="./assets/img/bailefestejo.gif" alt="baile de la victoria">`
        gameContainer2.classList.add("d-none");
        gameContainer3.classList.remove("d-none");
    
    }

    function reiniciarPagina(){
        location.reload();
    }