from typing import Literal, TypedDict, Union
import serial
import asyncio
import json

type Sensors = Literal['sonda_lambda', 'rpm', 'temp_admin', 'temp_ref']

class SensorsValuesSet(TypedDict):
  sonda_lambda: Union[int, float]
  rpm: Union[int, float]
  engine_temp: Union[int, float]

from websockets import ServerConnection

def parse_data(data: str) -> dict[str, float]:
    #rpm, lambda, temp_admin, temp_ref
    da = data.split(',')

    return {
        'rpm': float(da[0]),
        'sonda_lambda': float(da[1]),
        'temp_admin': float(da[2]),
        'temp_ref': float(da[3])
    }

# Configuración del puerto serie
puerto, baud_rate, timeout = "COM8", 9600, 2

#conectar el puerto serie
# 
async def send_port_data(puerto: str, baud_rate: int, timeout: int, client: ServerConnection) -> None:
    try:
        with serial.Serial(port=puerto, baudrate=baud_rate, timeout=timeout) as ser:
            print(f"Conectado al puerto {puerto} a {baud_rate} baudios.")

            #leer el puerto
            while True:
                if ser.in_waiting > 0:
                    linea = ser.readline().decode('utf-8').strip()
                    data = parse_data(linea)
                    print(f"Dato recibido: {data}")
                    await client.send(json.dumps(data))
                print(f"------")
                await asyncio.sleep(2)

    #excepción si hay un error
    except serial.SerialException as e:
        print(f"Error abriendo el puerto serie: {e}")
