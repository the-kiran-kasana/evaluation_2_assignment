

const BorrowedTitles = ["1984","Pride and Prejudice"]

let book = [
        { title: "1984", status: "Available" },
        { title: "The Hobbit", status: "Available" },
        { title: "Pride and Prejudice", status: "Available" }
  ]



for(let i = 0;i<BorrowedTitles.length;i++)
{
  for(let j=0;j<book.length;j++)
  {
    if(book[j].title === BorrowedTitles[i])
    {
      book[j].status = "Borrowed"
    }
  }
}

let arr = []

for(let j=0;j<book.length;j++)
{
  if(book[j].status === 'Available')
  {
    arr.push(book[j].title)
  }
}

console.log(arr)
