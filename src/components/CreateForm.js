import '../styles/CreateForm.css'
import React from "react";
import { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addBook,editBook} from '../features/book/bookSlice'
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const CreateForm = () => {

    const [book, setBook] = useState({
        ISBN: '',
        author: '',
        country: '',
        imageLink: '',
        language: '',
        link: '',
        pages:'',
        title: '',
        year: '',
        description: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const books = useSelector((state) => state.book)

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            dispatch(editBook(book))
        }else{
            dispatch(addBook({
                ...book,
                ISBN: uuid()
            }))

        }
        navigate('/')
    }

    useEffect(() => {
        if(params.id) {
            setBook(books.find((book) => book.ISBN === params.id))
        }
    }, [])

    return (
        <div className='d-flex justify-content-center w-100'>
            <form className='form' onSubmit={handleSubmit}>

                <h1 className='title'>Create Book</h1>
                <label  className="form-label">Title</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='title'
                        onChange={handleChange}
                        value={book.title}
                    />
                </div>
                <label  className="form-label">Author</label>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='author'
                        onChange={handleChange}
                        value={book.author}
                    />
                </div>
                <label  className="form-label">Country</label>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='country'
                        onChange={handleChange}
                        value={book.country}
                    />
                </div>
                <label  className="form-label">Year of Publication</label>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        name='year'
                        onChange={handleChange}
                        value={book.year}
                    />
                </div>
                <label  className="form-label">Language</label>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='language'
                        onChange={handleChange}
                        value={book.language}
                    />
                </div>
                <label  className="form-label">Total Pages</label>

                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        name='pages'
                        onChange={handleChange}
                        value={book.pages}
                    />
                </div>
                <label  className="form-label">Image</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='imageLink'
                        placeholder='add link to imagen'
                        onChange={handleChange}
                        value={book.imageLink}
                    />
                </div>
                <label  className="form-label">Description</label>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        name='description'
                        onChange={handleChange}
                        value={book.description}
                    />
                </div>
                <label  className="form-label">More info</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='link'
                        placeholder='add link to more information'
                        onChange={handleChange}
                        value={book.link}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateForm;