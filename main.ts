let SPEED = 0
OLED.init(128, 64)
let distance1 = 0
let distance2 = 0
basic.forever(function () {
    distance1 = SmartCity.read_distance_sensor(SmartCity.DistanceUnit.Centimeters, DigitalPin.P14, DigitalPin.P15)
    basic.pause(500)
    distance2 = SmartCity.read_distance_sensor(SmartCity.DistanceUnit.Centimeters, DigitalPin.P14, DigitalPin.P15)
    SPEED += (distance1 - distance2) / 0.5
    if (SPEED >= 0) {
        led.plotBarGraph(
        SPEED,
        20
        )
        OLED.clear()
        OLED.writeStringNewLine("Distance1:" + distance1)
        OLED.writeStringNewLine("Distance1:" + distance2)
        OLED.writeStringNewLine("SPEED" + SPEED)
    }
})
