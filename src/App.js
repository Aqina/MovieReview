import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import Home from "./components/Home";
// import Error from "./components/Error";
import "./App.css";
function App() {
  return (
    <> 
      <Navbar title="MyMovies" home="Home" contact="Contact Us" categories="Categories"/>
        <Routes>
          <Route path="/MovieReview" element={<Home />} />
          <Route path="MovieReview/movie/:id" element={<Movie />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    <Footer />
    </>
  );
}

export default App;

