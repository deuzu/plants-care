# Home monitoring

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
