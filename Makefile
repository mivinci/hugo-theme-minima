source=exampleSite
themeDir=../..

.PHONY: dev, build, clean

dev:
	hugo server -D -s $(source) --themesDir $(themeDir) --disableFastRender

build:
	hugo --gc --minify -s $(source) --themesDir $(themeDir)

clean:
	rm -r $(source)/public
	rm -r exampleSite/resources