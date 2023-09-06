export const InputTodo = (props) => {
  const { text, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    height: "30px"
  };

  return (
    <div style={style} className="area-wrapper">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={text}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

// export default InputTodo;
