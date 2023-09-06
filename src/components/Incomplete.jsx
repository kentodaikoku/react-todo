export const InCompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  const style = {
    backgroundColor: "#c6ffe2",
    minHeight: "200px"
  };

  return (
    <div style={style} className="area-wrapper">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="{todo}" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
