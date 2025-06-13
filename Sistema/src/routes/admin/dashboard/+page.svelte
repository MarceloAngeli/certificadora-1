<script lang="ts">

    interface Comment {
        ID_Comment: number;
        Name: string;
        Comment: string;
    }
    
    interface Post {
        ID_POST: number;
        Title: string;
        Text: string;
        comments?: Comment[]; 
    }
    
    interface Props {
        data: {
            post: Post[];
        }
    }
    
    let { data }: Props = $props();
    let posts: Post[] = $state(data.post || []);

    async function handleDeletePost(ID_POST: number, postIndex: number) {
        const response = await fetch('/admin/api/delete_post', {
            method: "DELETE",
            body: JSON.stringify({
                ID_POST
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        posts.splice(postIndex, 1);
    }
    

    async function handleDeleteComment(ID_Comment: number, ID_POST: number,  postIndex: number, commentIndex: number) {
        
        const response = await fetch('/admin/api/delete_comment', {
            method: "DELETE",
            body: JSON.stringify({
                ID_POST,
                ID_COMMENT:ID_Comment,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const targetPost = posts[postIndex];
        if (targetPost && targetPost.comments) {
            targetPost.comments.splice(commentIndex, 1);
        }
    }
</script>
    
    <div class="p-8 bg-rose-50 font-sans min-h-screen">
        <h1 class="text-3xl font-bold text-center text-red-500 mb-8">Gerenciamento de Posts</h1>
    
        {#each posts as post, i}
        <div class="bg-white border-2 border-rose-100 rounded-lg shadow-md mb-8 overflow-hidden">
            
            <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 bg-rose-50 border-b-2 border-rose-100">
                <div class="font-bold text-red-500 bg-rose-100 p-2 rounded">ID: {post.ID_POST}</div>
                <div class="text-xl font-semibold text-gray-800">{post.Title}</div>
                
                <button
                    class="group flex items-center justify-center p-1 rounded-full transition-colors hover:bg-rose-100"
                    onclick={() => handleDeletePost(post.ID_POST, i)}
                    aria-label="Delete Post"
                >
                    <svg class="fill-gray-500 transition-colors group-hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                    </svg>
                </button>
            </div>
    
            <div class="p-6 text-gray-600 leading-relaxed">
                <p>{post.Text}</p>
            </div>
    
            {#if post.comments && post.comments.length > 0}
            <div class="px-6 pb-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 pt-4 border-t border-dashed border-rose-100">Comentários</h3>
                
                <div class="space-y-2">
                    <div class="grid grid-cols-[200px_1fr_100px] items-center gap-4 p-3 rounded font-bold text-gray-800 bg-rose-100">
                        <div>Nome</div>
                        <div>Comentário</div>
                        <div class="text-center">Ação</div>
                    </div>
    
                    {#each post.comments as comment, j}
                    <div class="grid grid-cols-[200px_1fr_100px] items-center gap-4 p-3 rounded even:bg-rose-50">
                        <div class="font-medium text-gray-700">{comment.Name}</div>
                        <div class="text-gray-600">{comment.Comment}</div>
                        <div class="text-center">
                            <button
                                class="group flex items-center justify-center p-1 rounded-full transition-colors hover:bg-rose-100 mx-auto"
                                onclick={() => handleDeleteComment(comment.ID_Comment, post.ID_POST, i, j)}
                                aria-label="Delete Comment"
                            >
                                <svg class="fill-gray-500 transition-colors group-hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
            {/if}
        </div>
        {/each}
    </div>