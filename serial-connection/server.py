import websockets
import json
import asyncio
from random import randint
from typing import Literal, TypedDict, Union

type Sensors = Literal['sonda_lambda', 'rpm', 'engine_temp']

class SensorsValuesSet(TypedDict):
  sonda_lambda: Union[int, float]
  rpm: Union[int, float]
  engine_temp: Union[int, float]

connected_clients = set[websockets.ServerConnection]()

async def send_test_data (client: websockets.ServerConnection):
  await asyncio.sleep(2)

  data: SensorsValuesSet = {
    "sonda_lambda": randint(0, 100),
    "rpm": randint(0, 100),
    "engine_temp": randint(0, 100)
  }

  print('{}'.format(data))
  await client.send(json.dumps(data))
  await send_test_data(client)

async def handle_client (websocket: websockets.ServerConnection):
  connected_clients.add(websocket)

  try:
    await send_test_data(websocket)
  except:
    pass
  finally:
    connected_clients.remove(websocket)

async def main ():
  server = await websockets.serve(handle_client, 'localhost', 12345)
  await server.wait_closed()

if __name__ == '__main__':
  asyncio.run(main())