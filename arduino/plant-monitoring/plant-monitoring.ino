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

void setup() {
  Serial.begin(9600);
  Serial.println("### Hello ###");

  WiFiMulti.addAP(WIFI_SSID, WIFI_PASS);
  Serial.print("Connecting to WIFI");
  while (WiFiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  influx.setDb(INFLUXDB_DB);

  Serial.println("Setup done");
}

float moistSensorValue = 0;

void loop() {
  for (int i = 0; i <= 100; i++) {
    moistSensorValue = moistSensorValue + analogRead(SensorPin);
    delay(1);
  }

  moistSensorValue = moistSensorValue / 100.0;
  Serial.println(moistSensorValue);

  InfluxData measurement("plants");
  measurement.addTag("plant", "livingroom_lavandula_1");
  measurement.addValue("air_temperature", 0.00);
  measurement.addValue("air_moisture", 0.00);
  measurement.addValue("moisture", moistSensorValue);
  influx.write(measurement);

  delay(5000);
}
