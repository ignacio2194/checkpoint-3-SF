import '../styles/CreateForm.css'
import { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addBook, editBook} from '../features/book/bookSlice'
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const CreateForm = () => {

    const [book, setBook] = useState({
        ISBN: 1,
        author: "Chinua Achebe",
        country: "Nigeria",
        imageLink: "https://github.com/benoitvallon/100-best-books/blob/master/static/images/things-fall-apart.jpg?raw=true",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        title: "Things Fall Apart",
        year: 1958,
        extract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
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
        navigate('/home')
    }

    useEffect(() => {
        if(params.id) {
            setBook(books.find((book) => book.ISBN === params.id))
        }
    }, [])

    return (
        <div className='formContainer'>
            <form className='form' onSubmit={handleSubmit}>

                <h1 className='title'>Create Book</h1>
                <label  className="form-label">Title</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='title'
                        onChange={handleChange}
                        value={books.title}
                    />
                </div>
                <label  className="form-label">Author</label>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='author'
                        onChange={handleChange}
                        value={books.author}
                    />
                </div>
                <label  className="form-label">Year</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='year'
                        onChange={handleChange}
                        value={books.year}
                    />
                </div>
                <label  className="form-label">Image</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='imageLink'
                        onChange={handleChange}
                        value={books.imageLink}
                    />
                </div>
                <label  className="form-label">Description</label>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        name='extract'
                        onChange={handleChange}
                        value={books.extract}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateForm;