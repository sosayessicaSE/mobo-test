function Routes() {

    const getPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))

    const createPost = () => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: "test",
            body: "testing",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },


    })
        .then((response) => response.json())
        .then((json) => console.log(json));



    const updatePost = () => fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));


    const deletePost = () => fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });



    return (
        <>
            <div>
                <p>Your posts here: </p>
                <button onClick={getPosts}> Get Posts</button>
                <p>Your new post here: </p>
                <button onClick={createPost}> Create Post</button>
                <p>Change post here: </p>
                <button onClick={updatePost}> Update Posts</button>
                <p>Delete post here: </p>
                <button onClick={deletePost}> Delete Posts</button>
            </div>
        </>
    )
}

export default Routes
