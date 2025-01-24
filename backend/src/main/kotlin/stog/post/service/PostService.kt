package stog.post.service

import org.springframework.stereotype.Service
import stog.post.controller.dto.PostResponse
import stog.post.persistence.repository.PostRepository
import stog.post.service.dto.PostServiceDto

@Service
class PostService(
    private val postRepository: PostRepository
) {
    fun getPosts(): List<PostResponse> {
        val dtos: List<PostServiceDto> = postRepository.findAll().map { post -> PostServiceDto.fromEntity(post) }
        return dtos.map { dto -> dto.toResponse() }
    }

    fun createPost(request: PostServiceDto): Long {
        val post = request.toEntity();
        return postRepository.save(post).id!!
    }

    fun getPostById(id: Long): PostResponse {
        val post = postRepository.findById(id).orElseThrow { throw RuntimeException("Post not found") }
        return PostServiceDto.fromEntity(post).toResponse()
    }
}