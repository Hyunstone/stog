package stog.post.controller.dto

data class PostResponse(
    val id: Long,
    val title: String,
    val description: String,
    val pubDate: String,
    val imgSrc: String?,
    val imgAlt: String?,
    val draft: Boolean
)
