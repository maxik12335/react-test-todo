import { useEffect, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function Post({ title, id, complete, removePost, completePost }) {
    const [input, setInput] = useState('Дело')

    useEffect(() => {
        setInput(title)
    }, [])

    return (
        <div className={complete ? 'list-item list-item__completed' : 'list-item'}>
            <Input input={input} setInput={setInput} className='task' />
            <div className='task-actions'>
                <Button onClick={() => removePost(id)}>Удалить</Button>
                <Button
                    onClick={() => completePost(id)}
                    addClass={complete ? 'button-complete button-completed' : 'button-complete'}
                />
            </div>
        </div >
    )
}