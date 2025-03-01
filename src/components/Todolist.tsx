import useTodo from "../hooks/useTodo";

const Todolist = () => {
  const { data: todos, error, isLoading } = useTodo();

  if (isLoading) return <div>Loading... </div>;

  if (error) return <div>{error.message}</div>;

  console.log(todos);

  return (
    <div></div>
    // <ul>
    //   {todos?.map((todo) => {
    //     return <li key={todo.id}>{todo.title}</li>;
    //   })}
    // </ul>
  );
};

export default Todolist;
