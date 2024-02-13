class View {
    constructor ({onNewPost}) {
        this.postsBlog = document.querySelector("#blog-feed");
        this.titleInput = document.querySelector("#title-input");
        this.textInput = document.querySelector("#text-input");
        this.btnApprove = document.querySelector("#add-posts");

        this.onNewPost = onNewPost;

        this.btnApprove.addEventListener("click", this.handleBtnClick)
    }

    renderPosts(posts) {
        this.postsBlog.innerText = "";

        posts.forEach (post => {
            this.postsBlog.innerHTML += `
            <div class="blog__post">
                <p>${post.title}</p>
                <p>${post.text}</p>
            </div>
            `;
        })
    }

    handleBtnClick = () => {
        const title = this.titleInput.value;
        const text = this.textInput.value;

        this.onNewPost(title,text);
    }
}