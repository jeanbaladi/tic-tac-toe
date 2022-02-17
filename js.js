let points = document.getElementsByClassName('select-points');
let exOrCircle = false;
let arrWin1 = [];
let arrWin2 = [];
let arrWin3 = [];
let arrWin4 = [];
let arrWin5 = [];
let arrWin6 = [];
let arrWin7 = [];
let arrWin8 = [];
document.getElementById('playerOne').addEventListener('keyup', () => {
    document.getElementById('namePlayerOne').innerText = `${document.getElementById('playerOne').value}`;
    startGame();
});
document.getElementById('playerTwo').addEventListener('keyup', () => {
    document.getElementById('namePlayerTwo').innerText = ` ${document.getElementById('playerTwo').value}`;
    startGame();
});
function startGame(){
    if (document.getElementById('namePlayerOne').innerText.length > 0 && document.getElementById('namePlayerTwo').innerText.length > 0){
        let btn = document.getElementById('btn');
        btn.classList.add('show');
        btn.classList.remove('hide');
        btn.addEventListener('click', () => {
            document.getElementById('tableGame').classList.remove('hide');
            document.getElementById('tableGame').classList.add('show');
            document.getElementById('menuId').classList.add('hide');
            showTable()
        })
    }
    function showTable(){
        let playerOne = document.getElementById('playerOne').value;
        let playerTwo = document.getElementById('playerTwo').value;
        console.log(playerOne);
        for (let i = 0; i < points.length; i++){
            let pointsId = parseInt(document.getElementById(`${i + 1}`).id);
            points[i].addEventListener('click', (e) => {
                let nameClass = e.target.classList;
                // CONDICIONAL PARA NO CAMBIAR LA EQUIS POR UN CIRCULO O VICEVERSA
                if(nameClass.length == 2){
        
                    // CONDICIONIONAL PARA MARCAR EQUIS O CIRCULO
                    if (exOrCircle == false){
                        points[i].classList.add('circle');
                        points[i].classList.remove('ex');
                        exOrCircle = true;
                        let audio = document.getElementById('sound');
                        audio.innerHTML = `<audio id="soundControl" autoplay >
                                                <source src="./sound_effects/POL-cinematic-boom-01.wav">
                                            </audio>`;
                        document.getElementById('soundControl').volume = 0.2;
                    }else {
                        points[i].classList.add('ex');
                        points[i].classList.remove('circle');
                        exOrCircle = false;
                        let audio = document.getElementById('sound');
                        audio.innerHTML = `<audio id="soundControl" autoplay >
                                                <source src="./sound_effects/POL-cinematic-boom-01.wav">
                                            </audio>`;
                        document.getElementById('soundControl').volume = 0.2;
                    };
                    // PUSH DE LINEAS DE PUNTOS
                    if(pointsId <= 3){
                        arrWin1.push(nameClass[2])
                    };
                    if(pointsId >= 4 && pointsId <= 6){
                        arrWin2.push(nameClass[2])
                    };
                    if(pointsId >= 7 && pointsId <= 9){
                        arrWin3.push(nameClass[2])
                    };
                    if(pointsId == 1 ||pointsId == 4 ||pointsId == 7){
                        arrWin4.push(nameClass[2])
                    };
                    if(pointsId == 2 ||pointsId == 5 ||pointsId == 8){
                        arrWin5.push(nameClass[2])
                    };
                    if(pointsId == 3 ||pointsId == 6 ||pointsId == 9){
                        arrWin6.push(nameClass[2])
                    };
                    if(pointsId == 1 ||pointsId == 5 ||pointsId == 9){
                        arrWin7.push(nameClass[2])
                    };
                    if(pointsId == 3 ||pointsId == 5 ||pointsId == 7){
                        arrWin8.push(nameClass[2])
                    };
                    console.log(arrWin4);
                    //CONDICIONES PARA GANAR
                    if (arrWin1[0] == 'circle' && arrWin1[1] == 'circle' && arrWin1[2] == 'circle' || arrWin1[0] == 'ex' && arrWin1[1] == 'ex' && arrWin1[2] == 'ex'){
                        console.log("ganaste en linea 1");
                        if (arrWin1[0] == 'circle' && arrWin1[1] == 'circle' && arrWin1[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la linea 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin1[0] == 'ex' && arrWin1[1] == 'ex' && arrWin1[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la linea 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin2[0] == 'circle' && arrWin2[1] == 'circle' && arrWin2[2] == 'circle' || arrWin2[0] == 'ex' && arrWin2[1] == 'ex' && arrWin2[2] == 'ex'){
                        console.log('ganaste en linea 2');
                        if (arrWin2[0] == 'circle' && arrWin2[1] == 'circle' && arrWin2[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la linea 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin2[0] == 'ex' && arrWin2[1] == 'ex' && arrWin2[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la linea 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin3[0] == 'circle' && arrWin3[1] == 'circle' && arrWin3[2] == 'circle' || arrWin3[0] == 'ex' && arrWin3[1] == 'ex' && arrWin3[2] == 'ex'){
                        console.log('ganaste en linea 3');
                        if (arrWin3[0] == 'circle' && arrWin3[1] == 'circle' && arrWin3[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la linea 3 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin3[0] == 'ex' && arrWin3[1] == 'ex' && arrWin3[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la linea 3 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin4[0] == 'circle' && arrWin4[1] == 'circle' && arrWin4[2] == 'circle' || arrWin4[0] == 'ex' && arrWin4[1] == 'ex' && arrWin4[2] == 'ex'){
                        console.log('ganaste en columna 1');
                        if (arrWin4[0] == 'circle' && arrWin4[1] == 'circle' && arrWin4[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la columna 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin4[0] == 'ex' && arrWin4[1] == 'ex' && arrWin4[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la columna 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin5[0] == 'circle' && arrWin5[1] == 'circle' && arrWin5[2] == 'circle' || arrWin5[0] == 'ex' && arrWin5[1] == 'ex' && arrWin5[2] == 'ex'){
                        console.log('ganaste en columna 2');
                        if (arrWin5[0] == 'circle' && arrWin5[1] == 'circle' && arrWin5[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la columna 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin5[0] == 'ex' && arrWin5[1] == 'ex' && arrWin5[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la columna 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin6[0] == 'circle' && arrWin6[1] == 'circle' && arrWin6[2] == 'circle' || arrWin6[0] == 'ex' && arrWin6[1] == 'ex' && arrWin6[2] == 'ex'){
                        console.log('ganaste en columna 3');
                        if (arrWin6[0] == 'circle' && arrWin6[1] == 'circle' && arrWin6[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la columna 3 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin6[0] == 'ex' && arrWin6[1] == 'ex' && arrWin6[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la columna 3 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin7[0] == 'circle' && arrWin7[1] == 'circle' && arrWin7[2] == 'circle' || arrWin7[0] == 'ex' && arrWin7[1] == 'ex' && arrWin7[2] == 'ex'){
                        console.log('ganaste en la formacion equis 1');
                        if (arrWin7[0] == 'circle' && arrWin7[1] == 'circle' && arrWin7[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la formacion equis 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin7[0] == 'ex' && arrWin7[1] == 'ex' && arrWin7[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la formacion equis 1 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin8[0] == 'circle' && arrWin8[1] == 'circle' && arrWin8[2] == 'circle' || arrWin8[0] == 'ex' && arrWin8[1] == 'ex' && arrWin8[2] == 'ex'){
                        console.log('ganaste en la formacion equis 2');
                        if (arrWin8[0] == 'circle' && arrWin8[1] == 'circle' && arrWin8[2] == 'circle'){
                            setTimeout(() => {
                                alert(`${playerOne} a ganado en la formacion equis 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }else if (arrWin8[0] == 'ex' && arrWin8[1] == 'ex' && arrWin8[2] == 'ex'){
                            setTimeout(() => {
                                alert(`${playerTwo} a ganado en la formacion equis 2 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }
                }
            });
        }
    }
}