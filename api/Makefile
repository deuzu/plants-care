.PHONY: all install publish

all: all install publish

install:
	@npm install
	@docker-compose up -d

publish:
	@docker build . -t deuzu/plants-care-api:alpha
	@docker push deuzu/plants-care-api:alpha
