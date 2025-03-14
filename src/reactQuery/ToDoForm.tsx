import { Alert, Button, CloseButton, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAddTodo from "./hooks/useAddTodo";

const ToDoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [showAlert, setShowAlert] = useState(true);

  // Data management
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
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
