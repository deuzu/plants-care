# Plants Monitoring

## Moisture level
### Modules

- NodeMCU v3 (esp8266): [Documentation](https://docs.zerynth.com/latest/official/board.zerynth.nodemcu3/docs/index.html)
- Analog multiplexer: [Data sheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT4051.pdf)
- Soil moisture sensor: Funduino [Data sheet](https://www.emartee.com/Attachment.php?name=42241.pdf)

### Schema

### Box & Connectics

### Code

to do schema / uml

Example of sent metrics of plants moisture level:

```console
cat <<EOF | curl --data-binary @- localhost:5092/metrics/job/plantcare/instance/a
# HELP moisture level in percentage
# TYPE moisture_level gauge
moisture_level{sensor="0"} 12
moisture_level{sensor="1"} 74.605713
moisture_level{sensor="2"} 42
EOF
```

[Arduino CLI](https://arduino.github.io/arduino-cli/getting-started/)

```
arduino-cli core update-index
arduino-cli core install esp8266:esp8266
arduino-cli board list
arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 MoistureLevel && \
arduino-cli upload -p /dev/ttyUSB0 --fqbn esp8266:esp8266:nodemcuv2 MoistureLevel && \
stty -F /dev/ttyUSB0 raw 9600 && \
cat /dev/ttyUSB0
```

### To do

- [ ] Battery
- [ ] Box and connectics
- [ ] Schemas
- [ ] Rewrite it in Rust
- [ ] automatic watering & leafs watering
- [x] [arduino-cli](https://github.com/brendandburns/arduino-air-quality-exporter/blob/master/arduino-cli.yaml)
- [x] [example post request](https://randomnerdtutorials.com/esp8266-nodemcu-http-get-post-arduino/#http-post)