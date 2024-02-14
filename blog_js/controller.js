class Controller {
    constructor () {
        this.model = new Model ({
            onPostsChanged: this.handleModelPostChanges
        });

        this.view = new View({
            onNewPost: this.handleViewNewPost
        });
    }

    handleModelPostChanges = (posts) => {
        this.view.renderPosts(posts);
    }

    handleViewNewPost = (title, text) => {
        this.model.addPost(title,text);
    }
}