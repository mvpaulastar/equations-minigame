import useFetch from './hooks/useFetch';
import MainNav from './components/MainNav';
import Equations from './components/Equations';
import './App.css'

function App() {
  const { error, isPending, data: problems } = useFetch('./data/db.json');
  const problem = problems[Math.floor(Math.random() * problems.length)]; //Choose random problem

  return (
    <>
    <MainNav></MainNav>
    <div className="App">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { problem && <Equations problem={problem}/>}
    </div>
    </>
  )
}

export default App
