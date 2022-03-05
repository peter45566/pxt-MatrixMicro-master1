namespace SR04{

    function trigger(pin: DigitalPin): void {
        
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(pin, 0);
    }

	/**
	 *Read distance from module
	 * @param trig [1-15] choose trigger pin; eg: 1, 15
     * @param echo [1-15] choose echo pin; eg: 14, 12
	*/
    export function distance(trig: DigitalPin, echo: DigitalPin): number {
        let d = 0
        do {
            
            // trigger module
            trigger(trig);

            // read pulse
            d = pins.pulseIn(echo, PulseValue.High, 2945);  //timeout = 450cm
        }while(d==0)
        
        return (d*(340/2)/10000)
    }
}