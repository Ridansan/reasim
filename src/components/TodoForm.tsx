import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import ITodo from "../interfaces/ITodo";

interface iTodoForm {
    setTodos: () => void;
    todos: ITodo[];
}

export default function TodoForm(props: iTodoForm){
   const { setTodos, todos } = props; 
   const [todoTitle, setTodotitle] = useState<string>('');

   const handleAddtodo = () => {
    const newTodo: ITodo = {
        id: todos[todos.length -1].id + 1,
        title: todoTitle,
        done: false,
    };

    setTodos([...todos, newTodo]);
    setTodotitle("");
   };
   
    return(
        <div className="mx-auto w-3/6 my-16">
            <h1 className="text-3xl text-center text-white"> Done : {todos.filter((item) => item.done === true).length} </h1>
            <Input 
            value={todoTitle}
            onChange={(e) => setTodotitle(e.target.value)} 
            placeholder="Add To DO" 
            className="my-7 text-white"
            />
            <Button colorScheme="blue" onClick={() => handleAddtodo ()}>
            {" "}
            Add {" "}
            </Button>
        </div>


    )
}