.PHONY: install compile upload tty ouput

all: install compile upload tty ouput

install:
	@test -d ".arduino15/" || arduino-cli core update-index
	@test -d ".arduino15/" || arduino-cli core install esp8266:esp8266

compile:
	@arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 MoistureLevel

upload:
	@arduino-cli upload -p /dev/ttyUSB0 --fqbn esp8266:esp8266:nodemcuv2 MoistureLevel

tty:
	@stty -F /dev/ttyUSB0 raw 9600

ouput:
	@cat /dev/ttyUSB0
