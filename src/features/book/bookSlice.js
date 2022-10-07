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
    reducers: {}
})
// export const {  } = bookSlice.actions
export default bookSlice.reducer