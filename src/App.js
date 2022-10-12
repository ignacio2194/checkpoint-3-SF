import BookPreview from './components/BookPreview'
import BookDetail from './components/BookDetails'
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route
          path="/home"
          element={<BookPreview />}
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

      {/* Footer here */}
    </div>
  );
}

export default App;
