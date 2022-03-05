namespace PCA9633{

    const PCA9633_ADDRESS = 0x62

    const PCA9633_MODE1 = 0x00
    const PCA9633_MODE2 = 0x01

    const PCA9633_PWM0 = 0x02
    const PCA9633_PWM1 = 0x03
    const PCA9633_PWM2 = 0x04
    const PCA9633_PWM3 = 0x05

    const PCA9633_PWMOUT = 0x08
      
    /**
     *Set PWM to PCA9633
    * @param channel [0-3] choose PWM channel; eg: 0, 1
    * @param duty [0-255] pulse of servo; eg: 1, 2, 4
    */
    export function setPWM(channel: number, duty: number): void {

        MXi2c.i2cWrite(PCA9633_ADDRESS, PCA9633_PWM0 + channel, duty);
    }

    export function init(): void {

        MXi2c.i2cWrite(PCA9633_ADDRESS, PCA9633_MODE1, 0x00); //Turn On All LED Output

        MXi2c.i2cWrite(PCA9633_ADDRESS, PCA9633_MODE2, 0x04); //Set Output in Push-pull Mode

        MXi2c.i2cWrite(PCA9633_ADDRESS, PCA9633_PWMOUT, 0xAA); //Set Output in Individual Mode

        setPWM(0, 0); // Reset All channel to 0;
        setPWM(1, 0);
        setPWM(2, 0);
        setPWM(3, 0);

    }
}