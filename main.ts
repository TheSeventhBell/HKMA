input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello!")
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
