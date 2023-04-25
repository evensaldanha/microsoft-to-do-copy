import { createContext, ReactNode } from "react";
import { useState } from "react";
import { Task } from "./types/task";

export const TransactionContext = createContext<{
    tasks: Task[],
    setTasks?: React.Dispatch<React.SetStateAction<Task[]>>,
}>({
    tasks: [],
    setTasks: undefined,
})

interface TransactionsProviderProps{
    children: ReactNode;
}

export default function TransactionsProvider({children}: TransactionsProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <TransactionContext.Provider value={{tasks, setTasks}}>
            {children}
        </TransactionContext.Provider>
    )
}