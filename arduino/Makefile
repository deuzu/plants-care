.PHONY: install compile upload tty output

all: install compile upload tty output

install:
	@test -d ".arduino15/" || (arduino-cli core update-index && arduino-cli core install esp8266:esp8266)

compile:
	@arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 PlantsCare

upload:
	@arduino-cli upload -p /dev/ttyUSB0 --fqbn esp8266:esp8266:nodemcuv2 PlantsCare

tty:
	@stty -F /dev/ttyUSB0 raw 9600

output:
	@cat /dev/ttyUSB0
