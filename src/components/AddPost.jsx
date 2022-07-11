import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function AddPost({ addPost }) {
    const [postValue, setPostValue] = useState('')

    function getAddPost() {
        if (postValue) {
            addPost({
                id: Date.now(),
                title: postValue
            })
        }

        setPostValue('')
    }

    return (
        <div className='add-post'>
            <Input
                input={postValue}
                setInput={setPostValue}
                placeholder='Добавить пост...'
                className='add-post__input'
            />
            <Button addClass='button-search' onClick={getAddPost}>Добавить</Button>
        </div>
    )
}