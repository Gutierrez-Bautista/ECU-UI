type Sensors = 'sonda_lambda' | 'rpm' | 'engine_temp'

type SensorsValuesItem = Record<Sensors, number>

type SensorValues = SensorsValuesItem[]