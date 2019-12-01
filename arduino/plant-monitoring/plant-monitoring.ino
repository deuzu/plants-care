#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <InfluxDb.h>

#define SensorPin A0
// #define WIFI_SSID "deuzu"
// #define WIFI_PASS "N9HD@DKje@k5B&84M$%h"
#define WIFI_SSID "Virson"
#define WIFI_PASS "VirsonWifi123"
#define INFLUXDB_HOST "deuzu.com"
#define INFLUXDB_DB "home"

ESP8266WiFiMulti WiFiMulti;
Influxdb influx(INFLUXDB_HOST);

void setupWifi() {
  WiFiMulti.addAP(WIFI_SSID, WIFI_PASS);
  Serial.print("Connecting to WIFI");

  while (WiFiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
  }

  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(9600);
  Serial.println("### Setup started ###");

  setupWifi();

  influx.setDb(INFLUXDB_DB);

  Serial.println("### Setup done ###");
}

float readMoistureSensor() {
  float moistSensorValue = 0;

  for (int i = 0; i <= 100; i++) {
    moistSensorValue = moistSensorValue + analogRead(SensorPin);
    delay(1);
  }

  moistSensorValue = moistSensorValue / 100.0;
  // Serial.println(moistSensorValue);

  return moistSensorValue;
}

float readAirTemperatureSensor() {
  float airTemperatureSensorValue = 0.00;

  return airTemperatureSensorValue;
}

float readAirHumiditySensor() {
  float airHumiditySensorValue = 0.00;

  return airHumiditySensorValue;
}

float readLightSensor() {
  float lightSensorValue = 0.00;

  return lightSensorValue;
}

void writeSensorsValues(float moistureSensorValue, float airTemperatureSensorValue, float airHumiditySensorValue, float lightSensorValue) {
  InfluxData measurement("plants");
  measurement.addTag("plant", "livingroom_lavandula_1");
  measurement.addValue("moisture", moistSensorValue);
  measurement.addValue("air_temperature", airTemperatureSensorValue);
  measurement.addValue("air_humidity", airHumiditySensorValue);
  measurement.addValue("light", lightSensorValue);
  influx.write(measurement);
}

void loop() {
  float moistureSensorValue = readMoistureSensor();
  float airTemperatureSensorValue = readAirTemperatureSensor();
  float airHumiditySensorValue = readAirHumiditySensor();
  float lightSensorValue = readLightSensor();

  writeSensorsValues();

  delay(5000);
}
