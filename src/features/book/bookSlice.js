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
        editBook: (state,action) => {
            const {ISBN, title, author, description, year} = action.payload
            const foundBook = state.find((book) => book.ISBN === ISBN)
            if (foundBook) {
                foundBook.title = title
                foundBook.author = author
                foundBook.description = description
                foundBook.year = year
            }
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.ISBN !== action.payload)
        }
    }
})
export const { addBook, deleteBook, editBook } = bookSlice.actions
export default bookSlice.reducer