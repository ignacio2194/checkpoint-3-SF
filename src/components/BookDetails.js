import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/book/bookSlice";
import "../styles/BookDetails.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookDetails() {
  const params = useParams();
  const books = useSelector((state) => state.book);
  const book = books.find((book) => book.ISBN === params.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = () => {
    toast.warn(" Successfully deleted book!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  //Implement alert with messaje of action-confirmation like "Successfully deleted book!"
  const deleteBookSelected = (id) => {
    dispatch(deleteBook(id));
    navigate("/");
    notify();
  };

  return (
    <div className='container'>
        <div className='bookDetailCard' key={book.ISBN}>
            <img className='bookImg' alt='Book' src={book.imageLink}/>
            <div className='bookDetail'>
                <div className='bookDetailBody'>
                    <h3 className='bookTitle'>{book.title}</h3>
                    <h5 className='bookAuthor'>Author: {book.author}</h5>
                    <h5 className='bookAuthor'>Extract: {book.description}</h5>
                </div>
                <div className='bookDetailFooter'>
                    <h5 className='isbn'>ISBN: {book.ISBN}</h5>
                </div>
                <div className='buttonContainer'>
                    <Link className='btnUpdate' to={`/updatebook/${book.ISBN}`} >Update</Link>
                    <button className='btnDelete' onClick={() => deleteBookSelected(book.ISBN)}>Delete</button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default BookDetails