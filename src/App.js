import { useMemo, useState } from 'react';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import './style/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Дело 1', complete: true },
    { id: 2, title: 'Дело 2', complete: false },
    { id: 3, title: 'Дело 3', complete: false },
  ])

  function removePost(id) {
    setPosts(posts.filter(post => id !== post.id))
  }

  function addPost(post) {
    setPosts([post, ...posts])
  }

  function completePost(id) {
    let arr = posts
    const arrItemId = arr.findIndex(post => post.id === id)
    arr[arrItemId].complete = !arr[arrItemId].complete
    console.log(arr)
    setPosts([...arr])
  }

  const sortComplete = useMemo(() => {
    return [...posts].sort((a, b) => a.complete - b.complete)
  }, [posts])

  return (
    <div className="App">
      <h1 className='title'>Todo List</h1>
      <div className='content'>
        <AddPost addPost={addPost} />
        <PostList
          posts={sortComplete}
          removePost={removePost}
          completePost={completePost}
        />
      </div>
    </div>
  );
}

export default App;
