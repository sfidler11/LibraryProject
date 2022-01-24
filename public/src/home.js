
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let totalBorrowed = 0;
  for (let i = 0; i < books.length; i++){
    let book = books[i];
    if (book.borrows[0].returned === false){
      totalBorrowed++;
    }
  }
  return totalBorrowed;
}

function getMostCommonGenres(books) {
const bookGenres = books.map((book) => book.genre);
let sortedGenres = bookGenres.reduce((tally, book) => {
  if (tally[book]){
    tally[book]++;
  }
  else {
    tally[book] = 1;
  }
  return tally;
}, {})

  let genreArray =[];
  for (let genre in sortedGenres){
    const genreName = genre
    const theCount = sortedGenres[genre];
    let genreCount = {name: genreName, count: theCount};
    genreArray.push(genreCount);
  }

  let sortedBooks = genreArray.sort((bookA, bookB) => bookB.count - bookA.count);
  let topFive = sortedBooks.slice(0,5);
  return topFive;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
    let nameCount = {name: book.title, count: book.borrows.length};
    popularBooks.push(nameCount);
  });
  let sorted = popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
  let topFive = sorted.slice(0, 5);
  return topFive;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => {
    let theAuthor = {name: `${author.name.first} ${author.name.last}`, count: 0}
    let authorBooks = books.filter((book) => book.authorId === author.id);
    authorBooks.forEach((book) => theAuthor.count += book.borrows.length);
    popularAuthors.push(theAuthor);
  }
  )
  let sorted = popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  let topFive = sorted.slice(0, 5);
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
