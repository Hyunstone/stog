package stog.post.persistence.repository

import org.springframework.data.jpa.repository.JpaRepository
import stog.post.persistence.entity.Post

interface PostRepository : JpaRepository<Post, Long> {
}