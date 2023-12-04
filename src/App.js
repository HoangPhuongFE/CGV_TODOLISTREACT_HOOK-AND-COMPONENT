import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FilmsPresentation from './components/FilmsPresentation';
import Detail from './components/Detail';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AddFilm from './components/AddFilm';
import FilmsList from './components/FilmsList';
import EditFilm from './components/EditFilm';
import News from './components/News';
import DetailNews from './components/DetailNews';


function App() {
  return (
    <div className='app' > 
    <BrowserRouter>
      <Header className='header'/>
      <div className='content'>
      <Routes>
        <Route path="/" element={<FilmsPresentation />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/add' element={<AddFilm/>}/>
        <Route path='/list' element={<FilmsList/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<EditFilm />} />
        <Route path="/detailnews/:id" element={<DetailNews />} />
      </Routes></div>
      <Footer className='footer' />
    </BrowserRouter>
    </div>
  );
}

export default App;