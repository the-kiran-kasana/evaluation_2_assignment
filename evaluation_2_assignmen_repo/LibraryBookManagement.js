// Problem: Library Book Management Create functions to manage a library book system. The library is an array of objects, each with properties for title, author, genre, year, and copies. Implement functions to:

let library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, copies: 5 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, copies: 7 },
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988, copies: 2 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, copies: 4 },
    { title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", year: 1976, copies: 1 },
    { title: "The Origin of Species", author: "Charles Darwin", genre: "Science", year: 1859, copies: 3 }
  ]

  let genre1 = 0
  let genre2 = 0
  let countbook1 = 0
  let countbook2 = 0
  let bookname1 = ""
  let bookname2 = ""
  let list = []
  let sum = 0;
  let avg = 0

  for(let i=0;i<library.length;i++)
  {
    if(library[i].genre == "Fiction"){
        genre1 = genre1 + library[i].copies ;
        bookname1 = library[i].genre
        countbook1++
    }
    
    if(library[i].genre == "Science"){
            genre2 = genre2 + library[i].copies ;
            countbook2++
            bookname2 = library[i].genre

    }

    if(library[i].copies < 3)
    {
        list.push('"' + library[i].title + '"')
    }


    

    if(library[i].year){
        sum = sum + library[i].year
    }

    avg = sum/library.length;



    
  }


  if(genre1>genre2){
    console.log('Most popular genre: "' + bookname1 + '"(' + countbook1 + ' books) ')
  }
  else{
    console.log("Most popular genre: " + bookname2 + + " (" + countbook2 + " books)")
  }

  console.log("Average publication year:" + Math.floor(avg))

console.log('Books with low availability: [' + list + ']')


