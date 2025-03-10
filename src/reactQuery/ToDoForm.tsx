import { Input, Button } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodo";
import axios from "axios";

const ToDoForm = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>(apiUrl, todo).then((res) => res.data),
    onSuccess: (newTodo) => {
      console.log("newTodo: ", newTodo);
      // Approch for invalidating the catch
      //   queryClient.invalidateQueries({
      //     queryKey: ["todos"],
      //   });
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodo) => [
        newTodo,
        ...(oldTodo || []),
      ]);
    },
    onError: (error) => console.error("Error adding todo: ", error),
  });

  return (
    <form
      className="login-form"
      style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value)
          addTodo.mutate({
            userId: 1,
            id: 0,
            title: ref.current?.value,
            completed: false,
          });

        ref.current!.value = "";
      }}
    >
      <Input className="input-field" type="text" ref={ref} />
      <Button className="login-button">Add</Button>
    </form>
  );
};

export default ToDoForm;
