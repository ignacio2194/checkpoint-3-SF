import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1", 
        title: "Book Title",
        author: "Author",
        year: "year publish",
        image: "https://cdn-icons-png.flaticon.com/512/3104/3104388.png",
        description:"Bla bla bla",
        isbn: "ISBN"
    },
]

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {}
})
// export const {  } = bookSlice.actions
export default bookSlice.reducer