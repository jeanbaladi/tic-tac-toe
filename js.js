let points = document.getElementsByClassName('select-points');
let exOrCircle = false;
let playWithComputer = false;
let noPlayComputer;
let noPlayComputer2;
let userPoints = 0;
let arrWin1 = [];
let arrWin2 = [];
let arrWin3 = [];
let arrWin4 = [];
let arrWin5 = [];
let arrWin6 = [];
let arrWin7 = [];
let arrWin8 = [];
let arrAllPoints = [];
let arrFull = [];
let arrId = ['1','2','3','4','5','6','7','8','9'];
document.getElementById('playerOne').addEventListener('keyup', () => {
    document.getElementById('namePlayerOne').innerText = `${document.getElementById('playerOne').value}`;
    startGame();
});
document.getElementById('playerTwo').addEventListener('keyup', () => {
    document.getElementById('namePlayerTwo').innerText = ` ${document.getElementById('playerTwo').value}`;
    startGame();
});

let btnComputer = document.getElementById('playComputer');
btnComputer.addEventListener('click', () => {
    playWithComputer = true;
    startGame();
})
function startGame(){
    if (document.getElementById('namePlayerOne').innerText.length > 0 && document.getElementById('namePlayerTwo').innerText.length > 0 || playWithComputer == true){
        if(playWithComputer == true){
            document.getElementById('tableGame').classList.remove('hide');
            document.getElementById('tableGame').classList.add('show');
            document.getElementById('menuId').classList.add('hide');
            showTable()
        };
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
                        userPoints = userPoints + 1;
                        if (playWithComputer == true){                            
                            noPlayComputer = points[i].id;
                            let findIdFromArr = arrId.indexOf(noPlayComputer);
                            let deleteNumberFromArr = arrId.splice(findIdFromArr,1);
                            let arrStringToNumber = arrId.map((item) => parseInt(item));
                            let ramdon;
                            let n = 0;
                            getRandomArbitrary(arrStringToNumber[0],arrStringToNumber.pop());
                            function getRandomArbitrary(min, max) {
                                ramdon = Math.floor(Math.random() * (max - min) + min );    
                            } 
                            while (true) {
                                let findPosibility = arrStringToNumber.indexOf(parseInt(ramdon));
                                    n++
                                    if (findPosibility != -1){
                                        break
                                    }else {
                                        if(arrStringToNumber.length >= 2 || arrStringToNumber.length <= 4){
                                            ramdon = arrStringToNumber.pop();
                                            break
                                        }
                                        // getRandomArbitrary(arrStringToNumber[0],arrStringToNumber.pop()); 
                                        ramdon = Math.floor(Math.random() * (arrStringToNumber.pop() - arrStringToNumber[0] + 1) + arrStringToNumber[0] ); 
                                        if (n == 20){
                                            break
                                        };
                                        continue
                                    }
                                }
                                if (isNaN(ramdon)){
                                    
                                }else if(arrStringToNumber.length >= 2 || arrStringToNumber.length <= 4){
                                    let aleatorio = document.getElementById(ramdon);
                                    noPlayComputer2 =aleatorio.id;
                                    let findIdFromArr2 = arrId.indexOf(noPlayComputer2);
                                    let deleteNumberFromArr2 = arrId.splice(findIdFromArr2,1);
                                    let arrStringToNumber2 = arrId.map((item) => parseInt(item));
                                    aleatorio.classList.add('ex');
                                    aleatorio.classList.remove('circle');
                                    exOrCircle = false;
                                    let audio = document.getElementById('sound');
                                    audio.innerHTML = `<audio id="soundControl" autoplay >
                                    <source src="./sound_effects/POL-cinematic-boom-01.wav">
                                    </audio>`;
                                    document.getElementById('soundControl').volume = 0.2;
                                    
                                }else if(arrStringToNumber[ramdon] == undefined){
                                    ramdon = arrStringToNumber.pop();
                                    let aleatorio = document.getElementById(ramdon);
                                    noPlayComputer2 =aleatorio.id;
                                    let findIdFromArr2 = arrId.indexOf(noPlayComputer2);
                                    let deleteNumberFromArr2 = arrId.splice(findIdFromArr2,1);
                                    let arrStringToNumber2 = arrId.map((item) => parseInt(item));
                                    aleatorio.classList.add('ex');
                                    aleatorio.classList.remove('circle');
                                    exOrCircle = false;
                                    let audio = document.getElementById('sound');
                                    audio.innerHTML = `<audio id="soundControl" autoplay >
                                    <source src="./sound_effects/POL-cinematic-boom-01.wav">
                                    </audio>`;
                                    document.getElementById('soundControl').volume = 0.2;
                                    
                                }else if (arrStringToNumber[ramdon] != undefined) {
                                    let aleatorio = document.getElementById((arrStringToNumber[ramdon]));
                                    noPlayComputer2 = aleatorio.id;
                                    let findIdFromArr2 = arrId.indexOf(noPlayComputer2);
                                    let deleteNumberFromArr2 = arrId.splice(findIdFromArr2,1);
                                    let arrStringToNumber2 = arrId.map((item) => parseInt(item));
                                    aleatorio.classList.add('ex');
                                    aleatorio.classList.remove('circle');
                                    exOrCircle = false;
                                    let audio = document.getElementById('sound');
                                    audio.innerHTML = `<audio id="soundControl" autoplay >
                                    <source src="./sound_effects/POL-cinematic-boom-01.wav">
                                    </audio>`;
                                    document.getElementById('soundControl').volume = 0.2;
                                    
                                }
                        }
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
                    let nameClassComputer;
                    let computerId;
                    if(playWithComputer == true){
                        nameClassComputer = document.getElementById(noPlayComputer2).classList[2];
                        computerId = document.getElementById(noPlayComputer2).id;
                    }
                    if(pointsId  <= 3 || computerId <= 3){
                        if(pointsId <= 3){
                            arrWin1.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                            arrFull.push(nameClass[2]);
                        }else if (computerId <= 3){
                            arrWin1.push(nameClassComputer);
                        }
                    };
                    if(pointsId >= 4 && pointsId <= 6 || computerId >= 4 && computerId <= 6 ){
                        if (pointsId >= 4 && pointsId <= 6){
                            arrWin2.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                            arrFull.push(nameClass[2]);
                        }else if (computerId >= 4 && computerId <= 6){
                            arrWin2.push(nameClassComputer);
                        }
                    };
                    if(pointsId >= 7 && pointsId <= 9 || computerId >= 7 && computerId <= 9){
                        if (pointsId >= 7 && pointsId <= 9 ){
                            arrWin3.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                            arrFull.push(nameClass[2]);
                        }else if(computerId >= 7 && computerId <= 9){
                            arrWin3.push(nameClassComputer);
                        }
                    };
                    if(pointsId == 1 ||pointsId == 4 ||pointsId == 7 ||computerId == 1 ||computerId == 4 ||computerId == 7  ){
                        if(pointsId == 1 ||pointsId == 4 ||pointsId == 7 ){
                            arrWin4.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                        }else if(computerId == 1 ||computerId == 4 ||computerId == 7){
                            arrWin4.push(nameClassComputer);
                        }
                    };
                    if(pointsId == 2 ||pointsId == 5 ||pointsId == 8 || computerId == 2 ||computerId == 5 ||computerId == 8){
                        if(pointsId == 2 ||pointsId == 5 ||pointsId == 8){
                            arrWin5.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                        }else if(computerId == 2 ||computerId == 5 ||computerId == 8){
                            arrWin5.push(nameClassComputer);
                        }
                    };
                    if(pointsId == 3 ||pointsId == 6 ||pointsId == 9 || pointsId == 3 ||pointsId == 6 ||pointsId == 9 ){
                        if(pointsId == 3 ||pointsId == 6 ||pointsId == 9){
                            arrWin6.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                        }else if( pointsId == 3 ||pointsId == 6 ||pointsId == 9){
                            arrWin6.push(nameClassComputer);
                        }
                    };
                    if(pointsId == 1 ||pointsId == 5 ||pointsId == 9 || pointsId == 1 ||pointsId == 5 ||pointsId == 9){
                        if(pointsId == 1 ||pointsId == 5 ||pointsId == 9){
                            arrWin7.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                        }else if( pointsId == 1 ||pointsId == 5 ||pointsId == 9){
                            arrWin7.push(nameClassComputer);
                        }
                    };
                    if(pointsId == 3 ||pointsId == 5 ||pointsId == 7 || pointsId == 3 ||pointsId == 5 ||pointsId == 7){
                        if(pointsId == 3 ||pointsId == 5 ||pointsId == 7){
                            arrWin8.push(nameClass[2]);
                            arrAllPoints.push(nameClass[2]);
                        }else if( pointsId == 3 ||pointsId == 5 ||pointsId == 7){
                            arrWin8.push(nameClassComputer);
                        }
                    };
                    //CONDICIONES PARA GANAR
                    if (arrWin1[0] == 'circle' && arrWin1[1] == 'circle' && arrWin1[2] == 'circle' || arrWin1[0] == 'ex' && arrWin1[1] == 'ex' && arrWin1[2] == 'ex'){
                        if (arrWin1[0] == 'circle' && arrWin1[1] == 'circle' && arrWin1[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){
                                    alert(`${playerOne} a ganado en la linea 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la linea 1 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin1[0] == 'ex' && arrWin1[1] == 'ex' && arrWin1[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){
                                    alert(`${playerTwo} a ganado en la linea 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`perdiste`);
                                }
                                location.reload(true)
                            }, 100)
                        };
                    }else if (arrWin2[0] == 'circle' && arrWin2[1] == 'circle' && arrWin2[2] == 'circle' || arrWin2[0] == 'ex' && arrWin2[1] == 'ex' && arrWin2[2] == 'ex'){
                        if (arrWin2[0] == 'circle' && arrWin2[1] == 'circle' && arrWin2[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la linea 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la linea 2 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin2[0] == 'ex' && arrWin2[1] == 'ex' && arrWin2[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la linea 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Perdiste`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin3[0] == 'circle' && arrWin3[1] == 'circle' && arrWin3[2] == 'circle' || arrWin3[0] == 'ex' && arrWin3[1] == 'ex' && arrWin3[2] == 'ex'){
                        if (arrWin3[0] == 'circle' && arrWin3[1] == 'circle' && arrWin3[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la linea 3 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la linea 3 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin3[0] == 'ex' && arrWin3[1] == 'ex' && arrWin3[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la linea 3 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Perdiste`);
                                }
                                alert(`${playerTwo} a ganado en la linea 3 ¡Felicidades 🎉!`);
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin4[0] == 'circle' && arrWin4[1] == 'circle' && arrWin4[2] == 'circle' || arrWin4[0] == 'ex' && arrWin4[1] == 'ex' && arrWin4[2] == 'ex'){
                        if (arrWin4[0] == 'circle' && arrWin4[1] == 'circle' && arrWin4[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la columna 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la columna 1 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin4[0] == 'ex' && arrWin4[1] == 'ex' && arrWin4[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la columna 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`¡Perdiste!`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin5[0] == 'circle' && arrWin5[1] == 'circle' && arrWin5[2] == 'circle' || arrWin5[0] == 'ex' && arrWin5[1] == 'ex' && arrWin5[2] == 'ex'){
                        if (arrWin5[0] == 'circle' && arrWin5[1] == 'circle' && arrWin5[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la columna 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la columna 2 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin5[0] == 'ex' && arrWin5[1] == 'ex' && arrWin5[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la columna 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`¡Perdiste!`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin6[0] == 'circle' && arrWin6[1] == 'circle' && arrWin6[2] == 'circle' || arrWin6[0] == 'ex' && arrWin6[1] == 'ex' && arrWin6[2] == 'ex'){
                        if (arrWin6[0] == 'circle' && arrWin6[1] == 'circle' && arrWin6[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la columna 3 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la columna 3 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin6[0] == 'ex' && arrWin6[1] == 'ex' && arrWin6[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la columna 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`¡Perdiste!`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin7[0] == 'circle' && arrWin7[1] == 'circle' && arrWin7[2] == 'circle' || arrWin7[0] == 'ex' && arrWin7[1] == 'ex' && arrWin7[2] == 'ex'){
                        if (arrWin7[0] == 'circle' && arrWin7[1] == 'circle' && arrWin7[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la formacion equis 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste en la formacion equis 1 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin7[0] == 'ex' && arrWin7[1] == 'ex' && arrWin7[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la equis 1 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`¡Perdiste!`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if (arrWin8[0] == 'circle' && arrWin8[1] == 'circle' && arrWin8[2] == 'circle' || arrWin8[0] == 'ex' && arrWin8[1] == 'ex' && arrWin8[2] == 'ex'){
                        if (arrWin8[0] == 'circle' && arrWin8[1] == 'circle' && arrWin8[2] == 'circle'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerOne} a ganado en la formacion equis 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`Ganaste la formacion equis 2 ¡Felicidades 🎉!`);
                                }
                                location.reload(true)
                            }, 100)
                        }else if (arrWin8[0] == 'ex' && arrWin8[1] == 'ex' && arrWin8[2] == 'ex'){
                            setTimeout(() => {
                                if(playWithComputer == false){ 
                                    alert(`${playerTwo} a ganado en la formacion equis 2 ¡Felicidades 🎉!`);
                                }else {
                                    alert(`¡Perdiste!`);
                                }
                                location.reload(true)
                            }, 100)
                        }
                    }else if(arrAllPoints.length == 24 || arrFull.length == 5){ //EMPATE
                        setTimeout(() => {
                            alert('Empate');
                            location.reload(true);
                        }, 100)
                    }
                }
                setTimeout(() => {
                    console.log(arrFull);
                }, 200)
            });
        }
    }
}