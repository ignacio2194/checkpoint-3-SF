import BookCard from "./components/BookCard";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          // element={<BookList />}
        />
        <Route
          path="/:id"
          // element={<BookDetail />}
        />
        <Route
          path="/createform"
          // element={<CreateForm />}
        />
        <Route
          path="/updateform"
          // element={<UpdateForm />}
        />
        <Route
          path="/register"
          element={<UserRegister />}
        />
        <Route
          path="/login"
          // element={<UserLogin />}
        />
      </Routes>
    </div>
  );
}

export default App;
