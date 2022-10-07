import React from 'react'
import '../styles/BookDetails.css'

function BookDetails() {
    const book = {
        "id": 1,
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "https://github.com/benoitvallon/100-best-books/blob/master/static/images/things-fall-apart.jpg?raw=true",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958,
        "extract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
      }
  return (

    <div className='container'>
        <div className='bookDetailCard' key={book.id}>
            <img className='bookImg' src={book.imageLink}/>
            <div className='bookDetail'>
                <div className='bookDetailBody'>
                    <h3 className='bookTitle'>{book.title}</h3>
                    <h5 className='bookAuthor'>{book.author}</h5>
                    <h5 className='bookAuthor'>extract: {book.extract}</h5>
                    <a className='bookAuthor' href={book.link} target='_blank'>More info</a>
                </div>
                <div className='bookDetailFooter'>
                    <h5 className='pages'>Pages: {book.pages}</h5>
                    <h5 className='country'>Country: {book.country}</h5>
                    <h5 className='isbn'>ISBN: {book.id}</h5>
                </div>
                <div className='buttonContainer'>
                    <button className='btnUpdate'>Update</button>
                    <button className='btnDelete'>Delete</button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default BookDetails