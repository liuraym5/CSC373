# use `:=` instead of `=` to expand right away,
# see https://www.gnu.org/software/make/manual/make.html#Flavors
MD_FILES:=$(wildcard notes/*.md)
HTML_FILES:=$(addprefix docs/,$(notdir $(MD_FILES:.md=.html)))

# pandoc stuff
CSS=--css=css/main.css --katex-stylesheet=https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css
TEMPLATE=--template=templates/_layout
LATEX=--katex=https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.js

# notes/*.md -> docs/*.html
all: $(HTML_FILES)

docs/%.html: notes/%.md
	pandoc -s $(TEMPLATE) $(LATEX) $(CSS) --toc -f markdown+emoji -t html5 -o $@ $<

# push to gh-pages
online:
	make clean && make
	git add .
	git commit -m 'Updated Docs'
	git push

clean:
	rm -rf docs/*.html

init:
	# check pandoc is installed
	command -v pandoc >/dev/null 2>&1 || echo "Please install pandoc"
	mkdir tempates notes docs docs/css
	touch docs/css/main.css notes/index.md
	echo "Place your css in `docs/css/main.css`"
	echo "Place your notes inside the `notes` directory"
	echo "always have an index.md if you are going ot be using github pages"  
