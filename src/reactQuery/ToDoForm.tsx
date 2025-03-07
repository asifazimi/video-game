import { Input, Button } from "@chakra-ui/react";
import { useRef } from "react";

const ToDoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="login-form"
      style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
    >
      <Input className="input-field" type="text" ref={ref} />
      <Button className="login-button">Add</Button>
    </form>
  );
};

export default ToDoForm;
