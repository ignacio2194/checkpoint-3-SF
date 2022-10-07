import React from 'react'
import { useSelector } from "react-redux"
import '../styles/BookCard.css'


function BookCard() {
    const state = useSelector((state) => state)
    const books = useSelector((state) => state.book)
    //console.log('state in Task', state);
    console.log('books in book', books)
    console.log('state in book', state)
  return (
    <div className='listContainer'>
        {books.map((book) => {
        return (
            <div className='bookCardContainer' key={book.id}>
                <img className='bookImg' src={book.imageLink}/>
                <h3 className='bookTitle'>{book.title}</h3>
                <h5 className='bookAuthor'>{book.author}</h5>
            </div>
        )
    })}
    </div>
  )
}

export default BookCard