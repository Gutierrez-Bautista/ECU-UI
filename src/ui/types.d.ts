type Sensors = 'lambda' | 'rpm' | 'engine-temp'

type SensorsValuesItem = Record<Sensors, number>

type SensorValues = SensorsValuesItem[]