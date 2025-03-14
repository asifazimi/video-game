import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodo";
import axios from "axios";
import { CATCH_KEY_TODO } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>(apiUrl, todo).then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CATCH_KEY_TODO) || [];

      queryClient.setQueryData<Todo[]>(CATCH_KEY_TODO, (oldTodos) => [
        newTodo,
        ...(oldTodos || []),
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // savedTodo is the todo getting from the backend and newTodo is the todo we are adding in the Client
      // Approch for invalidating the catch
      //   queryClient.invalidateQueries({
      //     queryKey: CATCH_KEY_TODO,
      //   });

      queryClient.setQueryData<Todo[]>(CATCH_KEY_TODO, (todos) =>
        todos?.map((todo) => (todo == newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CATCH_KEY_TODO, context?.previousTodos);
    }, // context is the previous todo getting from the backend
  });
};

export default useAddTodo;
