class Controller {
    constructor () {
        this.model = new Model ({
            onPostsChanged: this.handleModelPostChanges()
        });

        this.view = new View();
    }

    handleModelPostChanges = (posts) => {
        this.view.renderPosts(posts);
    }
}