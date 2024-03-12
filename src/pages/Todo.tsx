import {useState, useEffect} from "react";
import { Button, Checkbox } from '@chakra-ui/react';

import TodoForm from "../components/TodoForm";
import ITodo from "../interfaces/ITodo";


export default function Todo() {
    const [done, setDone] = useState<number>(0);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleCheck = (item:ITodo) => {
       const findidx =  todos.findIndex((item2) => item.id === item2.id);
       todos [findidx].done = !item.done;
       setTodos([...todos]);
    };

    const handleDelete = (item: ITodo) =>  {
        const findidx =  todos.findIndex((item2) => item.id === item2.id);
        todos.splice(findidx, 1);
        setTodos([...todos]);
    };

    useEffect(() => {
        setTodos([
            {
                id: 0,
                title: "",
                done: false,
            },
        ]);
    }, []);
    

    return (
    <div className="bg-gray-700 h-screen p-10">
        <h1 className="text-5xl text-white text-center my-10 font-bold"> 
        {" "}
        To Do List{" "}
        </h1>
        <ul className="mx-auto w-3/6">
            {todos.map((item: ITodo, index: number) => (
            <li className="text-xl text-white" key={index}> 
            <Checkbox size={"lg"} colorScheme={"green"} onChange={() => handleCheck(item)} checked={item.done}>
                <div className="w-full block">{item.id} - {item.title}</div>
            </Checkbox>
            <Button onClick={() => handleDelete(item)} colorScheme="red">
                Delete
            </Button>
            </li>
            
            ))}
        </ul>
        <TodoForm todos={todos} done={done} setTodos={setTodos} />
    </div>);
}