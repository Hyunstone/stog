package stog.post.service.dto

import stog.post.controller.dto.PostResponse
import stog.post.persistence.entity.Post

data class PostServiceDto(
    val id: Long? = null,
    val title: String,
    val content: String,
    val createdAt: String? = null,
    val updatedAt: String? = null,
) {
    companion object {
        fun fromEntity(post: Post): PostServiceDto {
            return PostServiceDto(
                id = post.id,
                title = post.title,
                content = post.content,
                createdAt = post.createdAt.toString(),
                updatedAt = post.updatedAt.toString(),
            )
        }
    }

    fun toEntity(): Post {
        return Post(
            title = this.title,
            content = this.content,
        )
    }

    fun toResponse(): PostResponse {
        return PostResponse(
            id = this.id!!,
            title = this.title,
            description = this.content,
            pubDate = this.createdAt.toString(),
            imgSrc = null,
            imgAlt = null,
            draft = false
        )
    }
}
