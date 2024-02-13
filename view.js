class View {
    constructor () {
        this.postsBlog = document.querySelector("#blog-feed");
        this.titleInput = document.querySelector("#title-input");
        this.textInput = document.querySelector("#text-input");
        this.btnApprove = document.querySelector("#add-posts");
    }

    renderPosts(posts) {
        this.postsBlog.innerText = "";

        posts.forEach (post => {
            this.postsBlog.innerHTML += `
            <div class="blog__post">
                <p>${post.title}</p>
                <p>${post.text}</p>
            </div>
            `
        })
    }
}