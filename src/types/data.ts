export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export type TodoState = {
    todos: ITodo[]
}

