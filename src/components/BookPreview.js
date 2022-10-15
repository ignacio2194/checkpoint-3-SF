import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router'
import '../styles/BookPreview.css'

function BookPreview() {

    const state = useSelector((state) => state)
    const books = useSelector((state) => state.book)
    
    const navigate = useNavigate()

    const showDetails = (id) => {
      navigate(`/${id}`)
    }

  return (
    <div className='listContainer'>
        {books.map((book) => {
          return (
            <div className='previewCardContainer' key={book.ISBN} onClick={() => showDetails(book.ISBN)}>
              <img className='previewImg' alt='Book' src={book.imageLink}/>
              <h3 className='previewTitle'>{book.title}</h3>
              <h5 className='previewAuthor'>{book.author}</h5>
            </div>)
        })}
     
    </div>
  )
}
export default BookPreview;