radio.onReceivedString(function (receivedString) {
    if (receivedString == "10") {
        basic.showString("Left")
    } else if (receivedString == "9") {
        basic.showString("Right")
    } else if (receivedString == "8") {
        basic.showString("Forward")
    } else if (receivedString == "7") {
        basic.showString("Back")
    } else {
        basic.showString("Un-valid")
    }
})
basic.showIcon(IconNames.Asleep)
radio.setGroup(101)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 30) {
        radio.sendNumber(10)
    } else if (input.rotation(Rotation.Roll) > -30) {
        radio.sendNumber(9)
    } else if (input.rotation(Rotation.Pitch) > 30) {
        radio.sendNumber(8)
    } else if (input.rotation(Rotation.Pitch) > -30) {
        radio.sendNumber(7)
    }
})
