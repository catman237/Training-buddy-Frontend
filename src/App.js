import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExerciseContainer from "./components/ExerciseContainer"

function App() {
  return (
    <div className="App">
      <Header/>
      <ExerciseContainer/>
      <Footer/>
    </div>
  );
}

export default App;
