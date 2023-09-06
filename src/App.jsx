import React, { useState } from "react";
import { CompleteTodo } from "./components/Complete";
import { InCompleteTodo } from "./components/Incomplete";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const App = () => {
  // state valuable
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // function
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  // 追加
  const onClickAdd = () => {
    if (todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };
  // 削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // console.log(newTodos);
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻す
  const onClickBack = (i) => {
    // alert(i);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
      </div>

      <InputTodo
        text={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは五個までです。</p>
      )}

      <InCompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
