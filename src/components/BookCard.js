import React, { useState } from 'react'
import { useSelector } from "react-redux"
import '../styles/BookCard.css'


function BookCard() {
    const [details, setDetails] = useState(false)

    const state = useSelector((state) => state)
    const books = useSelector((state) => state.book)
    //console.log('state in Task', state);
    console.log('books in book', books)
    console.log('state in book', state)
    
    const showDetails = () => {
        setDetails(!details)
    }
    console.log(details);

  return (
    <div className='listContainer'>
        {books.map((book) => {
        
        const preview = <div className='bookCardContainer' key={book.id} onClick={showDetails}>
                            <img className='bookImg' src={book.imageLink}/>
                            <h3 className='bookTitle'>{book.title}</h3>
                            <h5 className='bookAuthor'>{book.author}</h5>
                        </div>
        const detail = <div className='bookCardContainer' key={book.id} onClick={showDetails}>
                            <img className='bookImg' src={book.imageLink}/>
                            <h3 className='bookTitle'>{book.title}</h3>
                            <h5 className='bookAuthor'>{book.author}</h5>
                            <h5 className='bookAuthor'>{book.country}</h5>
                            <h5 className='bookAuthor'>Pages: {book.pages}</h5>
                            <a className='bookAuthor' href={book.link} target='_blank'>More info</a>
                        </div>
        return (details ? detail : preview)
    })}
    </div>
  )
}

export default BookCard