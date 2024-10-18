
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
      <div>
        <button onClick={() => setFilter('all')}>All</button>

        <button onClick={() => setFilter('active')}>Active</button>

        <button onClick={() => setFilter('completed')}>Completed</button>

      </div>
      <ul>
        {displayArray.map((e, i) => <li className={e.status ? 'completed' : 'incompleted'} key={i}>{e.name}</li>)}
      </ul>

    </div>
  )
}

export default App
