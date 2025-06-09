import websockets
import asyncio
from serial_reader import send_port_data, Sensors
from random import randint
import json

def get_test_data() -> dict[Sensors, float]:
  return {
    'rpm': randint(1, 20),
    'sonda_lambda': randint(1, 110) / 100,
    'temp_admin': randint(10, 80),
    'temp_ref': randint(5, 70)
  }

async def test_data (client: websockets.ServerConnection):
  data = get_test_data()

  await asyncio.sleep(2)
  print(data)
  await client.send(json.dumps(data))
  await test_data(client)

connected_clients = set[websockets.ServerConnection]()

async def handle_client (websocket: websockets.ServerConnection):
  print(websocket)
  connected_clients.add(websocket)

  try:
    # await send_port_data("COM8", 9600, 2, websocket)
    await test_data(websocket)
  except:
    pass
  finally:
    connected_clients.remove(websocket)

async def main ():
  server = await websockets.serve(handle_client, 'localhost', 12345)
  await server.wait_closed()

if __name__ == '__main__':
  asyncio.run(main())