<br />
<p align="center">
  <h3 align="center">Plants Care</h3>

  <p align="center">
    <a href="https://github.com/deuzu/plants-care/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/deuzu/plants-care/issues">Report Bug</a>
    ·
    <a href="https://github.com/deuzu/plants-care/issues">Request Feature</a>
    ·
    <a href="https://github.com/deuzu/plants-care/pulls">Send a Pull Request</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About the Project

Plants Care is a system that automatically takes care of plants.  
It controls soils moisture and trigger watering based on configured rules  

### Built With

- [Arduino](https://www.arduino.cc/)
- [NodeJS](https://nodejs.org/en/) & [TypeScript](https://www.typescriptlang.org/)

## Getting Started

![plants care diagram](./plants-care-diagram.png)

<!-- edit diagram: https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7VnbcqM4EP0aP2aLi8H40XYSz1TFO6l4azOzbzII0EQgVghf8vXbMpIB4ziOQ5KtmaRcFdRqCanPaelI9OxJsp5ylMUzFmDas4xg3bMve5ZlGa4F%2F6RlU1pMY9AvLREngbJVhjl5xNpRWQsS4LzhKBijgmRNo8%2FSFPuiYUOcs1XTLWS0%2BdYMRbhlmPuItq33JBCxsrqGUVV8wSSK1auHumKB%2FIeIsyJV7%2BtZdrj9K6sTpPtS%2FnmMAraqmeyrnj3hjInyKVlPMJXB1WEr210%2FUbsbN8epOKUBGc2mo9kXvr6mfeMO%2FVjf%2FxxdmHbZzRLRQgVkRnzOINqCM0oxV4MXGx2wfEUSilIojUPwmqsaA8p%2BTGhwgzaskCPKBURIl8Yx4%2BQR%2FBGFKhMMUM2F4oPlyt4IpRNGGd%2B%2Bx17YwTAYNlrOZY%2FqXRzn0PZWT9%2FcM83QuuF4g3KhRwnzQllOFttxy4YJ4hFJx0wIliinHKb%2FgGvDMZEXeIEapp50jPy44DIU%2BQMWfqz6a0Oj0FpiLvC6ZlJQTTFLsOAbcFG1nmKNTitTZdWq4qilmRjX6GnayohUXkS7rituwIOix0uo0m9RhWMUSHIwIlsnjORCRgMsOM0Zz1vcgcmLVnBTVpKpBr8yIUqiFIq8nN9Yho9A6o6UXbBM9pYhn6TRDQ5lDPqV5U6FRZoYtA3pNv9iEgQ4lcxgAgm02NE3YyQV27A5Y%2FhBICfGH07PgZFPoGxWZfhJdy4mLIXJILLFGQPHVjgXz9PheC4%2BTxLFCkibk0ih%2FbrnhNPiBEAvOSH7J%2F4nA96YAY71fgyYZJOxMNZkFGcX8d18gS6%2F%2FnnRJgCXyOOlXAZWSGAOMJTbd0iigiNBWPrJirdlxcD7YFa4LVYAJ6JIqomSFHLeRZJ9EuFtiWAaJ8qGN2OCabUwxgEIcFWECMUsYimiV5V1vFXVOFBRr3xumMRzG7KfWIiNUo%2BoEEzqRJFobQlx5Jvvsj3AoYo%2F6nWXWh2WpY1WfXVU9vRo6PnY9w9Jw4Xn9B3jmO7LWcF9fCxM6uQDQhSLI36KATKER%2FHnmMJKu2yecboHt5XmPculkt4BWcJjJB%2Fh4BiiFOkaeFGtsk0OSuHkJ0mwionAc0hUWbOC02cT4n10QuweRicYDBdGC9wOJLpjNTW6ZTutZDOtA8nmdSDRD%2BJhnYLHbZHHF1NYhFdo0zUox%2FInQNgLDyLk%2Bh5ehN2A0rf3Dk7GO4JCwzy6p%2F9k1LRH3x4vIee%2FLnSSvO8CeG7s9xaW8xYz%2B8TFzPrItat98XHLZdcxLtqnlk4S4DUbyOkJ4FofmAAHI%2B19rAKo7%2F81OXCGAnjNClZPmqNH6dOypksJsG064lxuBzsHJXWrnm%2BloaKZbezRbDCsE%2BV5%2F76zR6xyBBXNdlN5hT6xfxXqnSBvzl%2BvT2We%2Bb9knmU4L2Ke1TeO%2Bjuv9R%2B8B7Pbl7Fay8lLeagJkcLc%2FbeQnxjGf2MelDpcGXaC8Nv8r57cEa53l3Y7VVh29oQsVIf1%2Bvb3wnO7D1zF%2FMDBPYEjOH1qv21maNey3ja85kqlN8v6Bmoe2EC7uHk%2FDHb7ku1ssKdXCuvqbg6GNiJpLlAKnfze0OsNQ6fyga8upjvoBHooVt%2F%2BymWh%2BsJqX%2F0H -->

### Microcontroller

- NodeMCU Lol1n v3 ESP8266 (ESP-12E) Wi-FI CH340: [Documentation](https://www.instructables.com/Getting-Started-With-ESP8266LiLon-NodeMCU-V3Flashi/)
- Analog multiplexer 74HC4051_8-Mux: [Data sheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT4051.pdf)
- Soil moisture sensor: Funduino [Data sheet](https://www.emartee.com/Attachment.php?name=42241.pdf)
- Water pump: to do
- Battery: [LiFePO4 18650](https://www.all-batteries.fr/accus-lithium-fer-phosphate-ifr18650-lifepo4-3-2v-1-8ah-ft-acl9073.html)

![schematic](./arduino/PlantsCare/schematic.png)

#### Arduino

1. Rename [Secrets.h.dist](./arduino/PlantsCare/Secrets.h.dist) to `Secrets.h` and replace its values.

```c++
#define PUSH_GATEWAY_BASEURL "https://ip:9091/metrics/job/plantcare/instance/a"
#define PLANTS_CARE_BASEURL "https://plants-care.example.org/api/watering/a"
```

`a` at the end of the URLs represent a microcontroller, name it as you want.  
You can install how many microcontroller as needed.  

2. Compile & Upload (see [Makefile](./arduino/Makefile))
3. Bury soi moisture sensor in plants
4. Plug a battery
5. ???
6. Profit!

#### Box, Connectics & PCB

To do

### API, Grafana, Prometheus & Push-Gateway

*Using Docker-Compose*

*docker-compose.yaml*
```yaml
services:
  plants-care-api:
    image: deuzu/plants-care-api:alpha
    environment:
      ALERT_BASE_URL: https://grafana.example.org/api/alerts
      ALERT_AUTH_TOKEN: Bearer eyL0R3m1p5um... # Grafana > Configuration > API keys
    ports:
      - 5080:80

  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yaml:/etc/prometheus/prometheus.yml
      - prometheus:/prometheus
    ports:
      - 5090:9090

  push-gateway:
    image: prom/pushgateway
    volumes:
      - pushgateway:/data
    ports:
      - 5091:9091

  grafana:
    image: grafana/grafana
    volumes:
      - grafana:/var/lib/grafana
    ports:
      - 5030:3000
      
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

## Roadmap

- [ ] How to waterproof moisture sensor? Silicon?
- [ ] [Power consumption savings](https://diyi0t.com/how-to-reduce-the-esp8266-power-consumption/) with [deep sleep](https://randomnerdtutorials.com/esp8266-deep-sleep-with-arduino-ide/): [gist examples](https://github.com/thingforward/esp8266-deep-sleep-examples)
- [ ] Handle HTTPS properly
- [ ] automatic watering [e.g.](https://how2electronics.com/iot-smart-agriculture-automatic-irrigation-system-with-esp8266/)
- [ ] PCB [how to](https://riton-duino.blogspot.com/2018/11/concevoir-un-pcb.html) & [Phil's lab youtube channel](https://www.youtube.com/channel/UCVryWqJ4cSlbTSETBHpBUWw)
- [ ] Box and connectics
- [ ] Solar panels
- [ ] [Rewrite it in Rust](https://blog.cecton.com/posts/rust-and-arduino-part1/) + [Tonari examle](https://blog.tonari.no/rust-simple-hardware-project)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **extremely appreciated**.  
Please read [those guidelines](./.github/CONTRIBUTING.md) before contributing to this repository.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat-amazing-feature`)
3. Commit your Changes (`git commit -m 'feat(scope): Add some AmazingFeature' -m "Closes #42"`)
4. Push to the Branch (`git push origin feat-amazing-feature`)
5. Open a Pull Request

### Development

#### Arduino

`cd arduino & make`

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

Example soil moisture level sent:

```console
cat <<EOF | curl --data-binary @- localhost:5092/metrics/job/plantcare/instance/a
# HELP moisture level in percentage
# TYPE moisture_level gauge
moisture_level{sensor="0"} 12
moisture_level{sensor="1"} 74.605713
moisture_level{sensor="2"} 42
moisture_level{sensor="3"} 654
EOF
```

#### API

`cd api && make`

## License

[MIT](./LICENSE)
