# use `:=` instead of `=` to expand right away,
# see https://www.gnu.org/software/make/manual/make.html#Flavors
MD_FILES:=$(wildcard notes/*.md)
HTML_FILES:=$(addprefix docs/,$(notdir $(MD_FILES:.md=.html)))

# pandoc stuff
CSS=--css=css/main.css
TEMPLATE=--template=templates/_layout
LATEX=--mathjax=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML 

# notes/*.md -> docs/*.html
all: $(HTML_FILES)

docs/%.html: notes/%.md
	pandoc -s $(TEMPLATE) $(LATEX) $(CSS) -f markdown -t html5 -o $@ $<

# push to gh-pages
online:
	git add .
	git commit -m 'Updated Docs'

clean:
	rm -rf docs/*.html
