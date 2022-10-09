import '../styles/CreateForm.css'
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
                id: uuid()
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
        <div>
            <form onSubmit={handleSubmit}>

                <h1>Create Book</h1>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name='title'
                        onChange={handleChange}
                        value={book.title}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Author"
                        name='author'
                        onChange={handleChange}
                        value={book.author}
                    />
                </div>
                <label for="exampleFormControlTextarea1" className="form-label">Date of Publication: </label>
                <div className="mb-3">
                    <input
                        type="date"
                        className="form-control"
                        name='date'
                        onChange={handleChange}
                        value={book.date}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="image"
                        name='image'
                        onChange={handleChange}
                        value={book.image}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        name='description'
                        onChange={handleChange}
                        value={book.description}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ISBN"
                        name='ISBN'
                        onChange={handleChange}
                        value={book.ISBN}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateForm;