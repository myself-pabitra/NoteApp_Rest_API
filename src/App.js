import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage';
function App() {

  return (

    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<NotesListPage />} />
            <Route path="note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
