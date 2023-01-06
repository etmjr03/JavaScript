function randomDice() {
    let options = [
        1,
        2,
        3,
        4,
        5,
        6
    ]

    let option = Math.floor(Math.random() * options.length)
    console.log(options[option])
}

randomDice()