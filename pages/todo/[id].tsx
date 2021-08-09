import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Card from "react-bootstrap/Card";
import { Todo } from ".";
import Config from "../../config/config";

interface TodoSingleProps {
    todo: Todo | null;
}

const TodoSingle = (props: TodoSingleProps) => {

    const router = useRouter();

    const { todo } = props;

    if (router.isFallback) {
        return (
            <h1>Loading Todo...</h1>
        )
    }
    return (
        <>
            {todo === null && (
                <h1>Todo not found</h1>
            )}
            {todo !== null && (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{todo.id} - {todo.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author ID: {todo.userId}</Card.Subtitle>
                        <Card.Text>
                            Completed? {todo.completed ? "Yes" : "No"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export const getStaticProps: GetStaticProps<TodoSingleProps> = async ({ params }) => {
    const props: TodoSingleProps = {
        todo: null
    };
    try {
        const response = await axios.get(`${Config.API_HOST}/todos/${params?.id}`);
        props.todo = response.data;
        return { props };
    } catch (error) {
        console.log(error);
        return { props };
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: { id: '1' },
        }
    ];
    return { paths, fallback: true }
}

export default TodoSingle;