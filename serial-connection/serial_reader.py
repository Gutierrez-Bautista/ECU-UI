import serial
import asyncio

# Configuración del puerto serie
puerto, baud_rate, timeout = "COM3", 9600, 2

#conectar el puerto serie
async def read_port(puerto: str, baud_rate: int, timeout: int) -> None:
    try:
        with serial.Serial(port=puerto, baudrate=baud_rate, timeout=timeout) as ser:
            print(f"Conectado al puerto {puerto} a {baud_rate} baudios.")
            await asyncio.sleep(timeout)

            #leer el puerto
            while True:
                if ser.in_waiting > 0:
                    linea = ser.readline().decode('utf-8').strip()
                    print(f"Dato recibido: {linea}")
                    await asyncio.sleep(2)

    #excepción si hay un error
    except serial.SerialException as e:
        print(f"Error abriendo el puerto serie: {e}")
