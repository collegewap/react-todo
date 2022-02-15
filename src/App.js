import {
  Button,
  Card,
  ControlGroup,
  Elevation,
  InputGroup,
  Tag,
} from "@blueprintjs/core";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const trimmedUserInput = userInput.trim();
    if (trimmedUserInput) {
      setTodoList((existingItems) => [
        ...existingItems,
        { name: trimmedUserInput, finished: false },
      ]);
      setUserInput("");
    }
  };

  return (
    <div className="App">
      <Card elevation={Elevation.TWO}>
        <h2 className="heading">To-do List</h2>
        <form onSubmit={addItem}>
          <ControlGroup fill={true} vertical={false}>
            <InputGroup
              placeholder="Add a task..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button type="submit" intent="primary">
              Add
            </Button>
          </ControlGroup>
        </form>
        <div className="items-list">
          {todoList.map((item, index) => (
            <Tag key={index + item.name} large minimal multiline>
              <span>{item.name}</span>
            </Tag>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
