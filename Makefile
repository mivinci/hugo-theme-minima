source=exampleSite
themeDir=../..

.PHONY: dev, build, clean

dev:
	-rm -r exampleSite/resources
	hugo server -D -s $(source) --themesDir $(themeDir) --disableFastRender

build:
	hugo -D --gc --minify -s $(source) --themesDir $(themeDir)

clean:
	rm -r $(source)/public