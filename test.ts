function analogTest() {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `);
    basic.showString("A1:");
    basic.showNumber(Math.ceil(Matrix.readADC(A_PORT.A1) / 100));
    basic.showString("A2:");
    basic.showNumber(Math.ceil(Matrix.readADC(A_PORT.A2) / 100));
    Matrix.servo(RC_PORT.RC1, 180);
    Matrix.servo(RC_PORT.RC2, 0);
    basic.pause(100);
    basic.showString("A1:");
    basic.showNumber(Math.ceil(Matrix.readADC(A_PORT.A1) / 100));
    basic.showString("A2:");
    basic.showNumber(Math.ceil(Matrix.readADC(A_PORT.A2) / 100));
}
function motorTest() {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `);
    Matrix.motor(M_PORT.M1, 100);
    Matrix.motor(M_PORT.M2, 100);
    basic.pause(500);
    Matrix.motor(M_PORT.M1, -100);
    Matrix.motor(M_PORT.M2, -100);
    basic.pause(500);
    Matrix.motor(M_PORT.M1, 0);
    Matrix.motor(M_PORT.M2, 0);
    basic.pause(100);
}
function ultrasonicTest() {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `);
    basic.pause(500);
    if (Matrix.ultrasonic(D_PORT.D1) > 5) {
        basic.showLeds(`
        . . # # #
        . # # . .
        # . # # #
        . # . . #
        . . # # #
        `);
    }
}
function ledTest() {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . # . .
        # . . # .
        `);
    for (let index = 0; index <= 255; index++) {
        Matrix.showLED(LED.RGB1, index, 255 - index, 0);
        Matrix.showLED(LED.RGB2, index, 255 - index, 0);
        basic.pause(5);
    }
    for (let index = 0; index <= 255; index++) {
        Matrix.showLED(LED.RGB1, 255 - index, 0, index);
        Matrix.showLED(LED.RGB2, 255 - index, 0, index);
        basic.pause(5);
    }
    for (let index = 0; index <= 255; index++) {
        Matrix.showLED(LED.RGB1, 0, index, 255 - index);
        Matrix.showLED(LED.RGB2, 0, index, 255 - index);
        basic.pause(5);
    }
}
function servoTest() {
    basic.showLeds(`
        . # # # .
        # . . . .
        . # # # .
        . . . . #
        . # # # .
        `);
    Matrix.servo(RC_PORT.RC1, 90);
    Matrix.servo(RC_PORT.RC2, 90);
    basic.pause(500);
}
function releaseServoTest() {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . # .
        . # . . #
        `);
    Matrix.servoRelease();
    basic.pause(500);
}
function next() {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `);
    while (!Matrix.dread(IO_PORT.D2)) {}
    basic.pause(500);
}
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `);
next();
motorTest();
next();
servoTest();
next();
releaseServoTest();
next();
analogTest();
next();
ultrasonicTest();
next();
ledTest();
next();
basic.forever(function () {
    music.startMelody(
        music.builtInMelody(Melodies.PowerUp),
        MelodyOptions.Once
    );
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `);
    Matrix.showLED(LED.RGB1, 0, 0, 0);
    Matrix.showLED(LED.RGB2, 0, 0, 0);
    basic.pause(1000);
    while (true) {
        basic.showString("RESET");
    }
});
