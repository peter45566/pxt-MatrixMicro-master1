namespace Serial_IT{

    export function pInt(str: string): number {
        for (let i = 0; i < 2; i ++) {
            let tryy = parseInt(str.charAt(i), 16)
            if (!(tryy) && (tryy != 0)) {
                return -1
            }
        }
        return parseInt(str, 16)
    }

    export function setMicro(func: number, para: number): void {
        switch (func)
        {
            case 1:
                if(para > 127){
                    Matrix.motor(M_PORT.M1, para-256)
                }
                else{
                    Matrix.motor(M_PORT.M1, para)
                }
                break;
            case 2:
                if(para > 127){
                    Matrix.motor(M_PORT.M2, para-256)
                }
                else{
                    Matrix.motor(M_PORT.M2, para)
                }
                break;
            case 3:
                pins.servoWritePin(AnalogPin.P13, para)
                break;
            case 4:
                pins.servoWritePin(AnalogPin.P2, para)
                break;
            case 5:
                control.waitMicros(150000)
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.P13, 0)
                control.waitMicros(500000)
                break;
        }
  
    }

    export function getMicro(func: number): void {
        let txbuf = -1
        switch (func)
        {
            case 128:
                txbuf = pins.digitalReadPin(DigitalPin.P12)
                break;
            case 129:
                txbuf = pins.digitalReadPin(DigitalPin.P14)
                break;
            case 130:
                txbuf = Matrix.readADC(A_PORT.A1)
                break;
            case 131:
                txbuf = Matrix.readADC(A_PORT.A2)
                break;
            case 132:
                txbuf = Math.round(Matrix.ultrasonic(D_PORT.D1))
                break;
            case 133:
                txbuf = Math.round(Matrix.ultrasonic(D_PORT.D2))
                break;
        }
        serial.writeLine(txbuf.toString())
    }
}