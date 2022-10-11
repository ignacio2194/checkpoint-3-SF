import { createSlice } from '@reduxjs/toolkit'
import dataBooks from '../../assets/dataBooks.json'

const initialState = dataBooks

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
<<<<<<< HEAD
        editBook: (state, action) => {
            const {id,title,author,date,image,description,ISBN} = action.payload;
            const foundBook = state.find(book => book.id === id)
            if (foundBook) {
                foundBook.title = title;
                foundBook.author = author;
                foundBook.date = date;
                foundBook.image = image;
                foundBook.description = description;
                foundBook.ISBN = ISBN
            }
        }
    }
})
export const { addBook , editBook } = bookSlice.actions
=======
        editBook: (state,action) => {
            const {ISBN, title, author, extract, year} = action.payload
            const foundBook = state.find((book) => book.ISBN === ISBN)
            if (foundBook) {
                foundBook.title = title
                foundBook.author = author
                foundBook.extract = extract
                foundBook.year = year
            }
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.ISBN !== action.payload)
        }
    }
})
export const { addBook, deleteBook, editBook } = bookSlice.actions
>>>>>>> 4ae1e301f91ada2f16df0740f7bd1a00bf29a34d
export default bookSlice.reducer