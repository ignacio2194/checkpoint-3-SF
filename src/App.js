import { Routes, Route } from 'react-router-dom';
import CreateForm from "./components/CreateForm";
import BookPreview from '../src/components/BookPreview'

function App() {
  return (
    <div className="App">

      {/* Navbar here */}
      <Routes>
        <Route
          path="/home"
          element={<BookPreview />}
        />
        <Route
          path="/:id"
          // element={<BookDetail />}
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
