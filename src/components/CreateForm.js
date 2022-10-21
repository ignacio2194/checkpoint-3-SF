import "../styles/CreateForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, editBook } from "../features/book/bookSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateForm = () => {
  const [book, setBook] = useState({
    ISBN: "",
    author: "",
    imageLink: "",
    title: "",
    year: "",
    description: "",
  });
  // change state of  submit button disable/ enable
  const [ErrorButton, setErrorButton] = useState(true);
  const notifyEdit = () => {
    toast.success(" Successfully updated book!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notifyCreate = () => {
    toast.success(" Successfully created book!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const books = useSelector((state) => state.book);
  const checkInputs = () => {
    const { title, author, description } = book;

    if (
      (title.length <= 1 || author.length <= 1 || description.length <= 1)
    ) {
      setErrorButton(true);
    } else {
      setErrorButton(false);
    }
  };
  const handleChange = (e) => {
    checkInputs();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editBook(book));
      notifyEdit();
    } else {
      dispatch(
        addBook({
          ...book,
          ISBN: uuid(),
        })
      );
      notifyCreate();
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setBook(books.find((book) => book.ISBN === params.id));
    }
  }, [params.id, books]);

  return (
    <div className="d-flex justify-content-center container-fluid">
      <form
        className="form p-4 m-4 rounded shadow-lg col-6 w-75 col-sm-6"
        onSubmit={handleSubmit}
      >
        <h1 className="title">Add Book</h1>
        <label className="form-label ">Title</label>
        <div className="mb-1 ">
          <input
            type="text"
            className="form-control-sm w-100"
            name="title"
            onChange={(e) => handleChange(e)}
            value={book.title}
            placeholder="Harry Potter and prisoner of Azkaban"
            required
          />
        </div>
        <label className="form-label">Author</label>

        <div className="mb-1">
          <input
            type="text"
            className="form-control-sm w-100"
            name="author"
            onChange={(e) => handleChange(e)}
            value={book.author}
            placeholder=" J. K. Rowlings"
            required
          />
        </div>

        <label className="form-label">Year of Publication</label>
        <div className="mb-1">
          <input
            type="number"
            className="form-control-sm w-100"
            name="year"
            onChange={(e) => handleChange(e)}
            value={book.year}
            placeholder="1999"
            required
          />
        </div>
        <label className="form-label">Image</label>
        <div className="mb-1">
          <input
            type="text"
            className="form-control-sm w-100"
            name="imageLink"
            placeholder="add link to the  image"
            onChange={(e) => handleChange(e)}
            value={book.imageLink}
            required
          />
        </div>
        <label className="form-label">Description</label>
        <div className="mb-1 ">
          <textarea
            rows="5"
            className="form-control-sm w-100"
            name="description"
            onChange={(e) => handleChange(e)}
            value={book.description}
            placeholder="short description"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary col-5"
          disabled={ErrorButton}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
