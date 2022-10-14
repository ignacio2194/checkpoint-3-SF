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
        <div className='d-flex justify-content-center w-100  '>
            <form className='form p-4 m-4 rounded shadow-lg' onSubmit={handleSubmit}>

                <h1 className='title'>Add Book</h1>
                <label  className="form-label ">Title</label>
                <div className="mb-1 ">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='title'
                        onChange={handleChange}
                        value={book.title}
                    />
                </div>
                <label  className="form-label">Author</label>

                <div className="mb-1">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='author'
                        onChange={handleChange}
                        value={book.author}
                    />
                </div>
                <label  className="form-label">Country</label>

                <div className="mb-1">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='country'
                        onChange={handleChange}
                        value={book.country}
                    />
                </div>
                <label  className="form-label">Year of Publication</label>
                <div className="mb-1">
                    <input
                        type="number"
                        className="form-control-lg"
                        name='year'
                        onChange={handleChange}
                        value={book.year}
                    />
                </div>
                <label  className="form-label">Language</label>

                <div className="mb-1">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='language'
                        onChange={handleChange}
                        value={book.language}
                    />
                </div>
                <label  className="form-label ">Total Pages</label>

                <div className="mb-1">
                    <input
                        type="number"
                        className="form-control-lg"
                        name='pages'
                        onChange={handleChange}
                        value={book.pages}
                    />
                </div>
                <label  className="form-label">Image</label>
                <div className="mb-1">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='imageLink'
                        placeholder='add link to imagen'
                        onChange={handleChange}
                        value={book.imageLink}
                    />
                </div>
                <label  className="form-label">Description</label>
                <div className="mb-1 ">
                    <textarea                    
                        rows="5"
                        className="form-control-lg "
                        name='description'
                        onChange={handleChange}
                        value={book.description}
                    />
                </div>
                <label  className="form-label">More info</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control-lg"
                        name='link'
                        placeholder='add link to more information'
                        onChange={handleChange}
                        value={book.link}
                    />
                </div>
                <button type="submit" className="btn btn-primary col-5">Create</button>
            </form>
        </div>
    )
}

export default CreateForm;