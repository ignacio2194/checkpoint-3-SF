import '../styles/CreateForm.css'
import React from "react";
import { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addBook,editBook} from '../features/book/bookSlice'
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const CreateForm = () => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        date: '',
        image: '',
        description: '',
        ISBN: '',
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const books = useSelector(state => state.book)

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
        navigate('/home')
    }

    useEffect(() => {
        if(params.id) {
            setBook(books.find((book) => book.id === params.id))
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
                <label  className="form-label">Date of Publication</label>
                <div className="mb-3">
                    <input
                        type="date"
                        className="form-control"
                        name='date'
                        onChange={handleChange}
                        value={book.date}
                    />
                </div>
                <label  className="form-label">Image</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='image'
                        onChange={handleChange}
                        value={book.image}
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
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateForm;