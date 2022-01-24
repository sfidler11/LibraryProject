function findAccountById(accounts, id) {
  let accountOwner = accounts.find((account) => account.id === id);
  return accountOwner;
}

function sortAccountsByLastName(accounts) {
  let lastNameSort = accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1)
  return lastNameSort;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const accId = account.id;
  for (let i = 0; i < books.length; i ++){
    let book = books[i]
    for (let j = 0; j < book.borrows.length; j++){
      if (book.borrows[j].id === accId){
        total++;
      }
    }
  
  }
return total;
}


//helper function
function booksCheckedOut(account, books){
  let checkedOut = [];
  books.forEach((book) => {
    const borrow = book.borrows;
    if (borrow[0].id === account.id && borrow[0].returned === false){
      checkedOut.push(book);
    } 
  })
  return checkedOut;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = booksCheckedOut(account, books);
  checkedOut.forEach((book) => {
    let theAuthor = authors.find((author) => author.id === book.authorId);
    book["author"] = theAuthor;
  })
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
