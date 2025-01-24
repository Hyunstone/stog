package stog.post.controller.dto

import jakarta.validation.constraints.NotBlank
import stog.post.service.dto.PostServiceDto

data class PostRequest(
    @field:NotBlank
    val title: String?,
    @field:NotBlank
    val content: String?,
) {
    fun toServiceDto(): PostServiceDto {
        return PostServiceDto(
            title = this.title!!,
            content = this.content!!,
        )
    }
}
