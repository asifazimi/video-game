import { Input, Button, Alert, CloseButton } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Todo } from "./hooks/useTodo";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}

const ToDoForm = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todoss";
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const [showAlert, setShowAlert] = useState(true);

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>(apiUrl, todo).then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos) => [
        newTodo,
        ...(oldTodos || []),
      ]);

      if (ref.current) ref.current.value = "";

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // savedTodo is the todo getting from the backend and newTodo is the todo we are adding in the Client
      // Approch for invalidating the catch
      //   queryClient.invalidateQueries({
      //     queryKey: ["todos"],
      //   });

      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo == newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context?.previousTodos);
    }, // context is the previous todo getting from the backend
  });

  return (
    <>
      {addTodo.error && showAlert && (
        <Alert.Root status="error" marginY={3}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{addTodo.error.message}</Alert.Title>
          </Alert.Content>

          <CloseButton
            pos="relative"
            top="-2"
            insetEnd="-2"
            onClick={() => setShowAlert(false)}
          />
        </Alert.Root>
      )}

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
        <Button className="login-button">
          {addTodo.isPending ? "Adding..." : "Add"}
        </Button>
      </form>
    </>
  );
};

export default ToDoForm;
