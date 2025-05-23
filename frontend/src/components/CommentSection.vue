<template>
  <section class="mt-12 pt-8 border-t">
    <h2 class="text-2xl font-bold mb-8">댓글 {{ comments.length }}개</h2>

    <!-- Comment Form -->
    <div class="mb-10">
      <div class="flex gap-4">
        <div class="size-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
          <img :src="currentUser.avatar" alt="Your avatar" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1">
          <CommentForm
            @submit="handleCommentSubmit"
            :is-submitting="isSubmitting"
            :error="errors.content"
          />
        </div>
      </div>
    </div>

    <!-- Comments List -->
    <div class="space-y-8">
      <div v-if="comments.length === 0" class="text-center py-8 text-muted-foreground">
        <MessageSquare class="h-12 w-12 mx-auto mb-2 opacity-20" />
        <p>아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!</p>
      </div>

      <template v-for="comment in sortedComments" :key="comment.id">
        <div v-if="!comment.parentId" class="comment-container">
          <CommentItem
            :comment="comment"
            :current-user-id="currentUser.id"
            @delete="deleteComment"
            @toggle-like="toggleLike"
            @reply="startReply"
          />

          <!-- Reply Form -->
          <div v-if="replyingTo === comment.id" class="mt-4 ml-14">
            <CommentForm
              placeholder="답글을 작성해주세요..."
              submit-text="답글 작성"
              :rows="2"
              :show-cancel="true"
              :is-submitting="isSubmitting"
              :error="errors.replyContent"
              @submit="(data) => handleReplySubmit(comment.id, data)"
              @cancel="cancelReply"
            />
          </div>

          <!-- Replies -->
          <div v-if="getReplies(comment.id).length > 0" class="mt-4 space-y-4">
            <div v-for="reply in getReplies(comment.id)" :key="reply.id" class="ml-14">
              <CommentItem
                :comment="reply"
                :current-user-id="currentUser.id"
                @delete="deleteComment"
                @toggle-like="toggleLike"
              />
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Load More Comments -->
    <div v-if="comments.length > 5" class="mt-8 text-center">
      <button
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
      >
        더 많은 댓글 보기
        <ChevronDown class="ml-2 h-4 w-4" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MessageSquare, ChevronDown } from 'lucide-vue-next'
import CommentForm from './CommentForm.vue'
import CommentItem from './CommentItem.vue'
import { useComments } from '@/composables/useComments'
import { CURRENT_USER } from '@/constants/user'
import type { CommentFormData } from '@/types/comment'

const currentUser = CURRENT_USER
const replyingTo = ref<string | null>(null)

const {
  comments,
  sortedComments,
  isSubmitting,
  errors,
  getReplies,
  addComment,
  addReply,
  toggleLike,
  deleteComment,
} = useComments(currentUser)

const handleCommentSubmit = async (data: CommentFormData) => {
  await addComment(data)
}

const handleReplySubmit = async (parentId: string, data: CommentFormData) => {
  await addReply(parentId, data)
  replyingTo.value = null
}

const startReply = (commentId: string) => {
  replyingTo.value = commentId
  errors.value.replyContent = ''
}

const cancelReply = () => {
  replyingTo.value = null
  errors.value.replyContent = ''
}
</script>
