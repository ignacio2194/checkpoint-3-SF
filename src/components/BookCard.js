import React from 'react'
import { useSelector } from "react-redux"


function BookCard() {
    const state = useSelector((state) => state)
    const books = useSelector((state) => state.book)
    //console.log('state in Task', state);
    console.log('books in book', books)
    console.log('state in book', state)
  return (
    <div>
        {books.map((book) => {
        return (
            <div key={book.id}>
                <img src={book.image}/>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
            </div>
        )
    })}
    </div>
  )
}

export default BookCard