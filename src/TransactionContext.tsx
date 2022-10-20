import { createContext, ReactNode } from "react";
import { useState } from "react";
import { Task } from "./types/task";

export const TransactionContext = createContext<{
    tarefas: Task[],
    setTarefas?: React.Dispatch<React.SetStateAction<Task[]>>,
}>({
    tarefas: [],
    setTarefas: undefined,
})

interface TransactionsProviderProps{
    children: ReactNode;
}

export default function TransactionsProvider({children}: TransactionsProviderProps) {
    const [tarefas, setTarefas] = useState<Task[]>([]);

    return (
        <TransactionContext.Provider value={{tarefas, setTarefas}}>
            {children}
        </TransactionContext.Provider>
    )
}