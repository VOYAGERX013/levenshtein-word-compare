
## Installation

Install word-compare with npm

```bash
  npm i word-compare
```
    
## Documentation

You must import the authjs after installing the package:

```javascript
const word = require("word-compare");
```

Say we want to create a search bar that searches movie names stored in an array based on the input given in the bar.

You can now compare the similarity of words easily with word-compare

```javascript
const movies = ["Interstellar", "Inception", "Matrix", "Iron man", "Shawshank redemption", "Matrix 2"];
const stringInput = "Matrix";

const similarMovies = word.getClosests(stringInput, movies);

console.log(similarMovies); // The following output is logged: [ 'Matrix', 'Matrix 2', 'Iron man', 'Inception', 'Interstellar']
```
By default word-compare restricts the output to an array with a maximum of five elements. However, you can set this value as a third parameter:

```javascript
const movies = ["Interstellar", "Inception", "Matrix", "Iron man", "Shawshank redemption", "Matrix 2"];
const stringInput = "Matrix";

const similarMovies = word.getClosests(stringInput, movies, 6);

console.log(similarMovies); // The following output is logged: [ 'Matrix', 'Matrix 2', 'Iron man', 'Inception', 'Interstellar', 'Shawshank redemption' ]
```

## Authors
- [@aryaanhegde](https://www.github.com/VOYAGERX013)