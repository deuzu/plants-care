#define MUX_A D4
#define MUX_B D3
#define MUX_C D2

#define ANALOG_INPUT A0

void setup() {
  Serial.begin(9600);

  pinMode(MUX_A, OUTPUT);
  pinMode(MUX_B, OUTPUT);
  pinMode(MUX_C, OUTPUT);
}

void changeMux(int c, int b, int a) {
  digitalWrite(MUX_A, a);
  digitalWrite(MUX_B, b);
  digitalWrite(MUX_C, c);

  Serial.println("Changing MUX...");
  Serial.println("MUX_A: " + a);
  Serial.println("MUX_B: " + b);
  Serial.println("MUX_C: " + c);
}

float readMoistureSensor() {
  delay(1000);
  float moistSensorValue = 0;

  for (int i = 0; i <= 100; i++) {
    moistSensorValue = moistSensorValue + analogRead(ANALOG_INPUT);
    delay(1);
  }

  moistSensorValue = moistSensorValue / 100.0;
  moistSensorValue= lightSensorValue / 1023 * 100;

  return moistSensorValue;
}

float readLightSensor() {
  delay(1000);
  float lightSensorValue = 0;

  for (int i = 0; i <= 100; i++) {
    lightSensorValue = lightSensorValue + analogRead(ANALOG_INPUT);
    delay(1);
  }

  lightSensorValue = lightSensorValue / 100.0;
  lightSensorValue = 100 - (lightSensorValue / 1023 * 100);

  return lightSensorValue;
}

float readTemperatureHumidityValues(byte* temperature, byte* humidity) {
  delay(1000);
  int err = SimpleDHTErrSuccess;

  if ((err = dht11.read(&temperature, &humidity, NULL)) != SimpleDHTErrSuccess) {
    Serial.print("Read DHT11 failed, err=");
    Serial.println(err)
    delay(1000);

    return false;
  }

  return true;
}

void loop() {
  Serial.println("=================================");
  Serial.println("Starting loop...");

  changeMux(LOW, LOW, LOW);
  float moistureSensorValue = readMoistureSensor();
  Serial.println("Moisture sensor value: " + String(moistureSensorValue));

  changeMux(LOW, HIGH, HIGH);
  byte temperature = 0;
  byte humidity = 0;
  if (!readTemperatureHumidityValues(&temperature, &humidity)) {
    return;
  }
  Serial.print("Temperature / Hunidity sensor value: ");
  Serial.print((int)temperature); Serial.print(" *C, ");
  Serial.print((int)humidity); Serial.println(" H");

  changeMux(LOW, HIGH, LOW);
  float lightSensorValue = readLightSensor();
  Serial.println("Light sensor value: " + String(moistureSensorValue));
}
