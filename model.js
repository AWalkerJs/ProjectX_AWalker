class Model {
    constructor ({onPostsChanged}) {
        this.posts = [];
        this.onPostsChanged = onPostsChanged;
    }

    addPost (title, text) {
        this.posts.push({title,text});

        this.onPostsChanged(this.posts);
    }

    getPosts () {
        return this.posts;
    }
}