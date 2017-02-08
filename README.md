# CSC373

## Layout:

`docs` contains the `.html` files.
`notes` contains the `.md` notes.

## Contribution

You need to have [pandoc](http://pandoc.org/installing.html) installed. You can run `brew install pandoc` on Mac OS.

Make a fork of the repo or go on a branch.

Add files to the `notes` folder, link them in `notes/index.md` in the same way other files are linked, and then run `make` and submit a pull request.

All the notes are written in markdown. If you've never used markdown, here's a lot of what you'd need to know:

```
# big header
## not as big header
### a slighly less big header
#### headers are starting to get small
##### a pattern!

`inline code`.

    ```
      multiline
      code!
    ```
    
*this would be in italics*
**this is bolded**

- this
- is
- a
- list

1. this
2. is
3. also
4. a list!

```

Inline math is done like `$x + y$`, and centered math on its own line is surrouned by two `$`, like so:
```
$$
x + y
$$
