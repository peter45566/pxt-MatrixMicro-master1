namespace ADS1015{

    const ADS1015_ADDRESS = 0x48

    const ADS1015_AIN0 = 0x40
    const ADS1015_AIN1 = 0x50
    const ADS1015_AIN2 = 0x60
    const ADS1015_AIN3 = 0x70

    const ADS1015_GAIN_05 = 0x06
    const ADS1015_GAIN_1 = 0x04
    const ADS1015_GAIN_2 = 0x02
    const ADS1015_GAIN_3 = 0x00

    function i2cwrite(addr: number, reg: number): void {
        let buf = pins.createBuffer(1);
        buf[0] = reg;
        pins.i2cWriteBuffer(addr, buf);
    }

    function i2cwrite2(addr: number, reg: number, value1: number, value2: number): void {
        let buf = pins.createBuffer(3);
        buf[0] = reg;
        buf[1] = value1;
        buf[2] = value2;
        pins.i2cWriteBuffer(addr, buf);
    }


	/**
     *ReadData From ADS1015
     *Data Format = 3mV/FS
	 * @param channel [0-3] choose ADC channel; eg: 0, 1
	*/
    export function readPin(channel: number): number {

        let val = 0x00;

        switch (channel) {
            case 0:
                val += ADS1015_AIN0;
                break;
            case 1:
                val += ADS1015_AIN1;
                break;
            case 2:
                val += ADS1015_AIN2;
                break;
            case 3:
                val += ADS1015_AIN3;
                break;
        }
        //set gain in 3mV/FS
        val += ADS1015_GAIN_3;

        i2cwrite2(ADS1015_ADDRESS, 0x01, val, 0x83);

        control.waitMicros(5000);

        pins.i2cWriteNumber(ADS1015_ADDRESS, 0x00, NumberFormat.UInt8LE)

        control.waitMicros(500);

        let adc = pins.i2cReadBuffer(ADS1015_ADDRESS, 2);
        let data = ((parseInt("0x" + adc.toHex())) / 16)

        if (data > 2048) {
            return (data-4096)
        }
        else {
            return data
        }
        
    }   
}