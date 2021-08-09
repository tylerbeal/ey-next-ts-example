import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Config from '../../config/config'
import ListGroup from 'react-bootstrap/ListGroup'
import React from 'react'
import Container from 'react-bootstrap/Container'
import { LoginForm } from '../../form/LoginForm'

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[]
}

const TodoList = (props: TodoListProps) => {
    const { todos } = props;

    return (
        <>
            <Head>
                <title>Todo index page</title>
            </Head>
            <Container>
                <h1>Todos</h1>
                <ListGroup>
                    {todos.map((todo, i) => {
                        return (
                            <ListGroup.Item key={todo.id}>
                                <Link href={`/todo/${todo.id}`}>
                                    <a>{todo.id}: {todo.title}</a>
                                </Link>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps<TodoListProps> = async () => {
    const props: TodoListProps = {
        todos: []
    };
    try {
        const response = await axios.get(`${Config.API_HOST}/todos`);
        props.todos = response.data;
        return { props };
    } catch (error) {
        return { props };
    }
}

export default TodoList;