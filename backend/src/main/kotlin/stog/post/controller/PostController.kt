package stog.post.controller

import org.springframework.web.bind.annotation.*
import stog.post.controller.dto.PostRequest
import stog.post.controller.dto.PostResponse
import stog.post.service.PostService

@RestController
class PostController(
    private val postService: PostService
) {
    @GetMapping("/posts")
    fun getPosts(): List<PostResponse> {
        return postService.getPosts();
    }

    @GetMapping("/posts/{id}")
    fun getPostById(@PathVariable id: Long): PostResponse {
        return postService.getPostById(id)
    }

    @PostMapping("/posts")
    fun createPost(@RequestBody request: PostRequest) {
        postService.createPost(request.toServiceDto())
    }
}