function findAuthorById(authors, id) {
  let authorID = authors.find((author) => author.id === id);
  return authorID;
}

function findBookById(books, id) {
  let bookID = books.find((book) => book.id === id);
  return bookID;
}


function partitionBooksByBorrowedStatus(books) {
  let byFalse = [];
  let byTrue = [];
  for (let i = 0; i < books.length; i++){
    let book = books[i];
    if (book.borrows[0].returned === false){
      byFalse.push(book);
    }
    else{
      byTrue.push(book);
    }
  }
  let combined = [[...byFalse], [...byTrue]];
  return combined;
}

function getBorrowersForBook(book, accounts) {
  let borrowedBooks = [];
  const borrowed = book.borrows;
  borrowed.forEach((book) => {
    let accountMatch = accounts.find((account) => account.id === book.id);
    let matchingObject = accountMatch;
    matchingObject['returned'] = book.returned;
    borrowedBooks.push(matchingObject);
  }
  )
  let topTen = borrowedBooks.slice(0, 10);
  return topTen;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
