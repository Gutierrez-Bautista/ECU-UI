type Sensors = 'sonda_lambda' | 'rpm' | 'temp_admin' | 'temp_ref'

type SensorsValuesItem = Record<Sensors, number>

type SensorValues = SensorsValuesItem[]