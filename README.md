# Plants Care

## Moisture level

### Modules

- NodeMCU Lol1n v3 ESP8266 (ESP-12E) Wi-FI CH340: [Documentation](https://www.instructables.com/Getting-Started-With-ESP8266LiLon-NodeMCU-V3Flashi/)
- Analog multiplexer 74HC4051_8-Mux: [Data sheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT4051.pdf)
- Soil moisture sensor: Funduino [Data sheet](https://www.emartee.com/Attachment.php?name=42241.pdf)

### Schematic

![schematic](./MoistureLevel/schematic.png)

### Box, Connectics & PCB

To do

### Code

![moisture level diagram](./MoistureLevel/diagram.png)

<!-- edit diagram - https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#R7VhLb6MwEP41kbqHjXhDj0n6OjRS1Ry6PbrggLcGI%2BM00F%2B%2FY7ADhKRNu%2BlWq5ZGKjOeGXv8fWMbj%2BxZWl5ylCdzFmE6soyoHNlnI8sybdeAf1JTNRrfcxpFzEmkjFrFgjxjpVR%2B8YpEuOgZCsaoIHlfGbIsw6Ho6RDnbN03WzLa7zVHMR4oFiGiQ%2B0diUSitJ5htA1XmMSJ6vpUN6RIGytFkaCIrTsq%2B3xkzzhjonlLyxmmcvL0vDR%2BF3taNwPjOBOHOJDJ%2FHIyv%2BLlBXWMW3Rf3v2e%2FPSbKE%2BIrlTCBRarXI1YVHoaijVJKcpAmi5ZJhaqxQA5TAiNrlHFVnIYhUDho5amCePkGewRhSYTFNDMhULZ8mQ0QumMUcbrfuylK%2F96ngsZUfXFcQG%2BNzpnc0s1R2XP8BoVQo%2BSUYrygjzU45aOKeIxyaZMCJYqo0Jw9og7w%2FHqRyXd0TeP9HjEIkxURDWXmAtc7gXJ3EAPNYNZigWvwEQ5OIosVV9cd6indUmHdX6gGK%2FYHm8Ct4SAF8WJN%2FAjGPBjTZZkQA9IWAzmL2MNXzoIKxWiJM5ApHgp3eSMESi5iVILlstgOQpJFl%2FXNmdOq7lVeUsVA98lrcsqIVGEM4k9E0ighw1Bc0YyUU%2BMO4UfTN%2FMGLsjFwY%2BA9lsZfhJcw5QZ5ALIjVoGFi0xoV4F9z7q27IAQU61MVBoGu7o4N%2BOgA9J5lc2r9x%2F0jcXeuTcTftAfCUsS%2B7GXQxf%2FvOIHPRM5OgMFlxfJwtwgpe3SMsYwdtTMP5KN44A97IwCQsQFnLBscomjNSCJiGBc4KxouTH192OXn%2FCtKU6Fu2jp1c%2BLglxN1xoMyieUOHE0WLb%2BSPjvyOzeMfI%2B8NkIdvQVSdlPL5RvzoiOsz%2F%2BchPvx4HKAcrvgTjtQmCgvBRH6SgxhSVBQklHu7SPV5AJdE%2FJIIjM3AU%2FK9bBsbdqDkM72p10LVEW4wJ5AY5lqXQZK%2FNl2DcF%2FHdrXYhqolHavJAUeDe4GD4ILs2YqH%2BIBKgdNPjF%2BM6OwmQAdxdwfgWseh%2FAR56qexiwWqhxtJ%2BvacYZ72zxm2vsjQIZpElVf34mE7kGP3A5324zTzMIgDVEFVx0zV5N7xbq6MVDdmYLw4LMvv23s9c3hpBtDWxwaBvyiZ4ff0oGRerRLNa%2BPovDYPZHDwfxB466BsWlvEO5TAMKCxbxqeH5iwMLmO7%2FXi%2Bofx%2BXUOgdheBzbm7aWqff4H -->

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

To find the board:
```console
arduino-cli board list
```

If error "Could not open serial port /dev/ttyUSB0" is encountered:
```console
sudo usermod -a -G dialout <username>
# or
sudo adduser <username> dialout
```

### Monitoring server example

*docker-compose.yaml*
```yaml
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yaml:/etc/prometheus/prometheus.yml
      - prometheus:/prometheus

  push-gateway:
    image: prom/pushgateway
    volumes:
      - pushgateway:/data

  grafana:
    image: grafana/grafana
    volumes:
      - grafana:/var/lib/grafana
      
volumes:
  prometheus: ~
  pushgateway: ~
  grafana: ~
```

*prometheus.yaml*
```yaml
global:
  scrape_interval: 30s
  evaluation_interval: 30s

rule_files: ~

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: [localhost:9090]

  - job_name: push-gateway
    static_configs:
      - targets: [push-gateway:9091]
    honor_labels: true
```

### To do

- [ ] Moisture sensor signal ouput voltage can be up to 1.7v, Analog0 tolerate up to 1v. Is a resistor needed? [E.g. using RVD](https://www.esp8266.com/viewtopic.php?f=5&t=5556&start=5)
- [ ] Battery [LiFePO4 18650](https://www.all-batteries.fr/accus-lithium-fer-phosphate-ifr18650-lifepo4-3-2v-1-8ah-ft-acl9073.html)
- [ ] How to waterproof moisture sensor? Silicon?
- [ ] [Power consumption savings](https://diyi0t.com/how-to-reduce-the-esp8266-power-consumption/) with [deep sleep](https://randomnerdtutorials.com/esp8266-deep-sleep-with-arduino-ide/): [gist examples](https://github.com/thingforward/esp8266-deep-sleep-examples)
- [ ] Handle HTTPS properly
- [ ] automatic watering & leafs watering [e.g.](https://how2electronics.com/iot-smart-agriculture-automatic-irrigation-system-with-esp8266/)
- [ ] PCB [how to](https://riton-duino.blogspot.com/2018/11/concevoir-un-pcb.html) & [Phil's lab youtube channel](https://www.youtube.com/channel/UCVryWqJ4cSlbTSETBHpBUWw)
- [ ] Box and connectics
- [ ] Solar panels
- [ ] [Rewrite it in Rust](https://blog.cecton.com/posts/rust-and-arduino-part1/) + [Tonari examle](https://blog.tonari.no/rust-simple-hardware-project)
