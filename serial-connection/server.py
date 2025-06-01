import websockets
import asyncio
from serial_reader import send_port_data

connected_clients = set[websockets.ServerConnection]()

async def handle_client (websocket: websockets.ServerConnection):
  print(websocket)
  connected_clients.add(websocket)

  try:
    await send_port_data("COM8", 9600, 2, websocket)
  except:
    pass
  finally:
    connected_clients.remove(websocket)

async def main ():
  server = await websockets.serve(handle_client, 'localhost', 12345)
  await server.wait_closed()

if __name__ == '__main__':
  asyncio.run(main())