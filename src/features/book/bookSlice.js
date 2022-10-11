import { createSlice } from '@reduxjs/toolkit'
import dataBooks from '../../assets/dataBooks.json'

/* const getApi = async () => {
    const data = await fetch('https://github.com/benoitvallon/100-best-books/blob/master/books.json')
    console.log(data);  
} */

const initialState = dataBooks

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
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
export default bookSlice.reducer