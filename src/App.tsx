import useFetch from './hooks/useFetch';
import Equations from './components/Equations';
import { Problem } from './classes/Problem';
import './App.css'

function App() {
  const { error, isPending, data: problems } = useFetch('http://localhost:8000/problems');
  const problem = problems[Math.floor(Math.random() * problems.length)] as Problem; //Choose random problem

  return (
    <div className="App">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { problem && <Equations problem={problem}/>}
    </div>
  )
}

export default App
