import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CATCH_KEY_TODO } from "../constants";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodo = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = () => axios.get<Todo[]>(apiUrl).then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CATCH_KEY_TODO,
    queryFn: fetchData,
    staleTime: 10 * 1000,
  });
};

export default useTodo;
