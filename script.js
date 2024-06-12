document.addEventListener("DOMContentLoaded", () => {
    let turn = "X";
    let gameover = false;
    let tp = document.getElementsByClassName('turn');
    let res = document.getElementById('result');
    

    function checkWin() {
        const text = document.getElementsByClassName('boxtext');
        const winstates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winstates.forEach(e => {
            if (
                text[e[0]].innerText !== '' &&
                text[e[0]].innerText === text[e[1]].innerText &&
                text[e[1]].innerText === text[e[2]].innerText
            ) {
                res.innerHTML = text[e[0]].innerText + " Won";
                gameover = true;
            }
        });

        let flag = true;

        Array.from(text).forEach(e => {
            if(e.innerText === ''){
                flag = false;
            }
        });

        if (flag){
            res.innerHTML = "Tie";
            gameover = true;
        }
    }

    function changeTurn() {
        return turn === "X" ? "O" : "X";
    }

    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '' && !gameover) {
                boxtext.innerText = turn;
                checkWin();
                if (!gameover) {
                    turn = changeTurn();
                    tp[0].innerHTML = `${turn}'s turn`;
                }
            }
        });
    });
});
