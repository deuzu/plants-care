#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "Secrets.h"

#define MUX_A D1
#define MUX_B D2
#define MUX_C D3
#define ANALOG_INPUT A0

WiFiClientSecure client;
HTTPClient http;

typedef struct metric {
  float value;
  String sensor;
} metric;

void setupWifi() {
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("-- Connecting to WIFI");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("-- WiFi connected");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(9600);
  Serial.println("- Setup started");

  setupWifi();

  pinMode(MUX_A, OUTPUT);
  pinMode(MUX_B, OUTPUT);
  pinMode(MUX_C, OUTPUT);

  Serial.println("- Setup done");
}

void changeMux(int index) {
  String binary = String(index, BIN);

  if (binary.toInt() < 100) {
    binary = "0" + binary;
  }

  if (binary.toInt() < 10) {
    binary = "0" + binary;
  }

  int a = binary[0] == '1' ? HIGH : LOW;
  int b = binary[1] == '1' ? HIGH : LOW;
  int c = binary[2] == '1' ? HIGH : LOW;

  digitalWrite(MUX_A, a);
  digitalWrite(MUX_B, b);
  digitalWrite(MUX_C, c);
}

float readMoistureSensor() {
  float moistureSensorValue = 0;

  for (int i = 0; i <= 100; i++) {
    moistureSensorValue = moistureSensorValue + analogRead(ANALOG_INPUT);
    delay(1);
  }

  return moistureSensorValue / 100.0;
}

void sendMetrics(metric metrics[]) {
  String body = String("# TYPE moisture_level gauge\n# HELP moisture_level relative to the sensor\n");
  for (int i = 0; i < 8; i++) {
    body += String("moisture_level{sensor=\"" + String(metrics[i].sensor) + "\"} " + String(metrics[i].value) + "\n");
  }
  int contentLength = body.length();

  client.setInsecure();
  http.begin(client, PUSH_GATEWAY_BASEURL);
  http.addHeader("Content-Type", "text/plain; version=0.0.4");
  http.addHeader("Content-Length", String(contentLength));
  http.POST(body);
  http.end();
}

void loop() {
  Serial.println("=================================");
  Serial.println("- Starting loop...");

  metric metrics[8];
  for (int i = 0; i < 8; i++) {
    changeMux(i);
    Serial.println("-- MUX switched to #" + String(i));

    float moistureSensorValue = readMoistureSensor();
    Serial.println("-- Moisture sensor value: " + String(moistureSensorValue));

    metrics[i] = { value: moistureSensorValue, sensor: String(i) };
    delay(1000);
  }

  sendMetrics(metrics);
  Serial.println("-- Metrics sent to client");

  Serial.println("- End of the loop");
  delay(60000);
}
