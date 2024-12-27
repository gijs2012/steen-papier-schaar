let _1 = 0
let _2 = 0
radio.onReceivedValue(function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendNumber(2)
})
