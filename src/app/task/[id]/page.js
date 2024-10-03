"use client"
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


export default function Home() {
    const {tasks} = useTasks();
    const router = useRouter();
    const { id } = useParams();

    const task = tasks.find((task) => task.id === parseInt(id));

    if(!task){
        return <div>Task not found</div>
    }

    return (<div>
        Task: {task.title}
    </div>)
}