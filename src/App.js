import BookPreview from './components/BookPreview'
import BookDetail from './components/BookDetails'
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Home from './components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route
        //El path * deberia llevarnos a la page de error 404
          path="/booklist"
          element={<BookPreview />}
        />
        <Route 
          path="/"
          element={<Home />}
          />
        <Route
          path="/:id"
          element={<BookDetail />}
        />
        <Route
          path="/createbook"
          element={<CreateForm />}
        />
        <Route
          path="/updatebook/:id"
          element={<CreateForm />}
        />
        <Route
          path="/register"
          // element={<UserRegister />}
        />
        <Route
          path="/login"
          // element={<UserLogin />}
        />
      </Routes>

      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
