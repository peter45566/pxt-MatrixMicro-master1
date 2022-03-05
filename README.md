# MATRIX Micro controller

The extension allows to control MATRIX Micro on PXT for micro:bit with block-based programming and Python. This library is as a bridge connecting [MATRIX Robotics system](https://matrixrobotics.com/) alongside with [micro:bit](https://microbit.org/).

## Introduction

MATRIX Micro is an integrated robot controller. Provide to bridge between micro:bit and robotics control. Use MATRIX Micro as the core to easily drive motors to fit various robotics application scenarios!

## Basic usage

* Set Motor to 100% speed

```blocks
    Matrix.motor(M_PORT.M1, 100);
    Matrix.motor(M_PORT.M2, 100);
```

* Set RGB LED 

```blocks
    Matrix.showLED(LED.RGB1, 255, 255, 255);
    Matrix.showLED(LED.RGB2, 255, 255, 255);
```

* Get 10-bits analog voltage data from port A1

```blocks
    Matrix.readADC(A_PORT.A1)
```

* Get digital logic from port D2

```blocks
    Matrix.dread(D_PORT.D2)
```


* Set RC Servo Angle to 90

```blocks
    Matrix.servo(RC_PORT.RC1, 90);
    Matrix.servo(RC_PORT.RC2, 90);
```

* Get distance data from port D1

```blocks
    Matrix.ultrasonic(D_PORT.D1)
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* Open [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/)
* Click on **New Project**
* Click on **Extensions** under the gearwheel menu
* Search for **https://github.com/Matrix-Robotics/pxt-MatrixMicro/** and import

## License

MIT

## Supported targets

* for PXT/microbit

```package
MatrixMicro=github:Matrix-Robotics/pxt-MatrixMicro
```
