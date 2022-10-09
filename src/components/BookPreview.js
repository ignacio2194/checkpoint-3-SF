import React, { useState } from 'react'
import { useSelector } from "react-redux"
import '../styles/BookPreview.css'


function BookPreview() {
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
          return (
            <div className='previewCardContainer' key={book.id} onClick={showDetails}>
              <img className='previewImg' src={book.imageLink}/>
              <h3 className='previewTitle'>{book.title}</h3>
              <h5 className='previewAuthor'>{book.author}</h5>
            </div>)
        })}
    </div>
  )
}

export default BookPreview