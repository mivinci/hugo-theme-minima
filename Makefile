source=exampleSite

.PHONY: dev, build, clean

dev:
	hugo server -D -s $(source) --themesDir ../..

build:
	cd exampleSite
	hugo -D --gc --minify -s $(source) --themesDir ../..

clean:
	rm -r $(source)/public