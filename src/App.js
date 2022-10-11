
//---------SOLO PARA PRUEBA
import BookPreview from "./components/BookPreview";
import BookDetails from './components/BookDetails'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<BookDetails />}/>
        <Route path="/home" element={<BookPreview />}/>
        <Route path="/updatebook/:id" element={<CreateForm />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
