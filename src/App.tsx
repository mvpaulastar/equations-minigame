import useFetch from './hooks/useFetch';
import Problem from './components/Problem';
import './App.css'

function App() {
  const { error, isPending, data: problems } = useFetch('http://localhost:8000/problems');
  const problem = problems[Math.floor(Math.random() * problems.length)]; //Choose random problem

  return (
    <div className="App">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { problem && <Problem problem={problem}/>}
    </div>
  )
}

export default App
