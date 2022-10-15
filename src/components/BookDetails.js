import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteBook } from '../features/book/bookSlice'
import '../styles/BookDetails.css'

function BookDetails() {
    const params = useParams();
    
    const books = useSelector((state) => state.book)
    const book = books.find(book => book.ISBN === params.id )
    // console.log('Initial array: ',books);
    console.log('Book Detail: ',book.ISBN);
    // console.log(params.id);
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //Implement alert with messaje of action-confirmation like "Successfully deleted book!"
    const deleteBookSelected = (id) => {
        dispatch(deleteBook(id))
        navigate('/')
    }
    console.log('After delete array: ',books);
    
  return (
    <div className='container'>
        <div className='bookDetailCard' key={book.ISBN}>
            <img className='bookImg' alt='Book' src={book.imageLink}/>
            <div className='bookDetail'>
                <div className='bookDetailBody'>
                    <h3 className='bookTitle'>{book.title}</h3>
                    <h5 className='bookAuthor'>{book.author}</h5>
                    <h5 className='bookAuthor'>extract: {book.description}</h5>
                </div>
                <div className='bookDetailFooter'>
                    <h5 className='isbn'>ISBN: {book.ISBN}</h5>
                </div>
                <div className='buttonContainer'>
                    <Link to={`/updatebook/${book.ISBN}`} className='btnUpdate'>Update</Link>
                    <button className='btnDelete' onClick={() => deleteBookSelected(book.ISBN)}>Delete</button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default BookDetails