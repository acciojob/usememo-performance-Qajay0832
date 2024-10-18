
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {
  const initializeTodo = () => {
    let todoArray = [];
    for (let i = 1; i <= 50; i++) {
      todoArray.push({ name: `Todo ${i}`, status: i <= 25 });
    }
    setTodoArray(todoArray);
  };
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState('all')
  const [displayArray, setDisplayArray] = useState([])
  useEffect(() => initializeTodo(), [])
  useMemo(() => {
    const slowDown = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    slowDown(5000);
    setDisplayArray(filter === 'all' ? todoArray : filter === 'active' ? todoArray.filter(e => !e.status) : todoArray.filter(e => e.status))


  }, [todoArray, filter]);


  return (
    <div>
      {/* Do not remove the main div */}
      <div><ul>
        <li><button onClick={() => setFilter('all')}>All</button>
        </li>
        <li><button onClick={() => setFilter('active')}>Active</button>
        </li>
        <li><button onClick={() => setFilter('completed')}>Completed</button></li>
      </ul>

      </div>
      {displayArray.map((e, i) => <p className={e.status ? 'completed' : 'incompleted'} key={i}>{e.name}</p>)}
      <div>

      </div>

    </div>
  )
}

export default App
