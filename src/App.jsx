import './App.css'
import { useData, useLocalStorage } from './utils'

function App() {
  const { data, loading, error } = useData(
    'https://jsonplaceholder.typicode.com/todos'
  )
  const [text, setText] = useLocalStorage('text', '')

  return (
    <div>
      <textarea
        value={text}
        placeholder="En que estas pensando"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <ul>
        {error && <li>Error:{error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
