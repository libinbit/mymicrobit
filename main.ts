makerobo.MotorStopAll()
makerobo.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
makerobo.rgb().show()
basic.forever(function () {
    TM1650.showNumber(9999)
    basic.showIcon(IconNames.Angry)
    makerobo.rgb().showColor(neopixel.rgb(0, 0, 0))
    makerobo.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
    makerobo.rgb().show()
    basic.pause(500)
    makerobo.rgb().showColor(neopixel.rgb(0, 0, 0))
    makerobo.rgb().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    makerobo.rgb().show()
    basic.pause(500)
    makerobo.rgb().showColor(neopixel.rgb(0, 0, 0))
    makerobo.rgb().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    makerobo.rgb().show()
    basic.pause(500)
    makerobo.rgb().showColor(neopixel.rgb(0, 0, 0))
    makerobo.rgb().setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
    makerobo.rgb().show()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        makerobo.MotorRunDual(
        makerobo.Motors.Left,
        100,
        makerobo.Motors.Right,
        100
        )
    } else if (input.buttonIsPressed(Button.B)) {
        makerobo.MotorRunDual(
        makerobo.Motors.Left,
        0,
        makerobo.Motors.Right,
        0
        )
    }
})
