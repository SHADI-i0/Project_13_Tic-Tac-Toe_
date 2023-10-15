let title = document.querySelector(".title")
let turn = 'X'
let squares = [];

function game(id) {
    let box = document.getElementById(id)
    if (turn === 'X' && box.innerHTML == "") {
        box.innerHTML = 'X'
        turn = "O"
        title.innerHTML = "O"
    } else if (turn === "O" && box.innerHTML == "") {
        box.innerHTML = "O"
        turn = "X"
        title.innerHTML = "X"
    }
    winner()
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML
    }
    if (!squares.includes("")) {
        title.innerHTML = "No Winner",
            setInterval(function () {
                title.innerHTML += '.'
            }, 1000)
        setTimeout(function () {
            window.location.reload()
        }, 3500)
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        end(1, 2, 3)
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        end(4, 5, 6)
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        end(7, 8, 9)
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        end(1, 4, 7)
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        end(2, 5, 8)
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        end(3, 6, 9)
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        end(1, 5, 9)
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        end(3, 5, 7)
    }
}

function end(num1, num2, num3) {
    title.innerHTML = `${squares[1]} Winner`
    document.getElementById('item' + num1).style.backgroundColor = "black"
    document.getElementById('item' + num2).style.backgroundColor = "black"
    document.getElementById('item' + num3).style.backgroundColor = "black"
    setInterval(function () {
        title.innerHTML += '.'
    }, 1500)
    setTimeout(function () {
        window.location.reload()
    }, 5000)
}