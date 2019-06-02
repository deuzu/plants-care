# TICK

## Prerequisites

- docker
- docker-compose

## Install

```sh
docker-compose build
docker-compose up -d
```

## InfluxDB

Test database with :

```sh
curl -i -XPOST 'http://localhost:8086/write?db=home' --data-binary 'plants,plant=livingroom_lavandula_1 moisture=0.64'
```

## Misc

batch instead of stream
fetch x min backward, check if most recent data is above level, check if most of values are above level (90%?)
https://github.com/influxdata/kapacitor/tree/master/examples
