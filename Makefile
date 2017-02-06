TEX=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML

%: %.md
	pandoc $@.md -t html -s -c splendor.css -o public/$@.html --mathjax=$TEX
	git checkout gh-pages
	git checkout origin/master -- docs
	pandoc graphs/shortest-path.md -t html -s -c splendor.css -o public/index.html 
	git add .
	git commit -m 'updated notes'
	git push origin gh-pages
	git checkout -
