export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 5,
        }}
        type="text"
        placeholder="title"
      ></input>
      <br />
      <input
        style={{
          margin: 10,
          padding: 5,
        }}
        type="text"
        placeholder="description"
      ></input>
      <br />

      <button style={{margin:10}}>Add a todo</button>
    </div>
  );
}
