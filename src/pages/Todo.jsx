import React, { useState } from "react";
import { useLocalStorage  } from "../CustomHooks/useLocaleStorage";
function Todo() {
  const [items, setItems] = useLocalStorage('todos' ,[]);
  const [filter, setFilter] = useState("All");
  const filterValue = ["All", "Pending", "Completed"];
  
  const handleFilterChange = () => {
    if (filter === "Pending") {
      return items.filter((item) => !item.completed);
    } else if (filter === "Completed") {
      return items.filter((item) => item.completed);
    } else {
      return items;
    }
  };

  const filteredItems = handleFilterChange();
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h3> Filter </h3>
      {filterValue.map((val) => (
        <div key={val}>
          <input
            type="radio"
            name="filter"
            value={val}
            checked={val === filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label>{val}</label>
        </div>
      ))}
      <input
        type="text"
        placeholder="Add a new item"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newItem = e.target.value;
            if (newItem) {
              setItems([
                ...items,
                {
                  name: newItem,
                  completed: false,
                },
              ]);
              e.target.value = "";
            }
          }
        }}
      />
      
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                const newItems = [...items];
                newItems[index].completed = !newItems[index].completed;
                setItems(newItems);
              }}
            />
            <p
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {item.name}
            </p>
            <button
              onClick={() => {
                const newItems = items.filter((_, i) => i !== index);
                setItems(newItems);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Todo;
