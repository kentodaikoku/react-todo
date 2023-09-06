export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  const style = {
    backgroundColor: "darkcyan",
    minHeight: "200px"
  };

  return (
    <div style={style} className="area-wrapper">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="{todo}" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
