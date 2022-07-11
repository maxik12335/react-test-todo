import Post from "./Post";

export default function PostList({ posts, removePost, completePost }) {
    if (posts.length === 0) {
        return (
            <div className='list'>
                <div className='list-item'>
                    <p>Нет постов</p>
                </div>
            </div>
        )
    }

    return (
        <div className='list'>
            {posts.map(post => (
                <Post title={post.title} id={post.id} complete={post.complete} key={post.id} removePost={removePost} completePost={completePost} />
            ))}
        </div>
    )
}