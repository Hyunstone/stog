<template>
  <div class="flex gap-4">
    <div class="size-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
      <img
        :src="comment.author.avatar"
        :alt="comment.author.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex-1">
      <div class="bg-muted/40 rounded-lg p-4">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="font-medium">{{ comment.author.name }}</span>
            <span
              v-if="comment.author.isAdmin"
              class="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-full"
              >관리자</span
            >
            <span class="text-xs text-muted-foreground">{{ formatDate(comment.createdAt) }}</span>
          </div>
          <button
            v-if="canDelete"
            class="text-muted-foreground hover:text-destructive"
            @click="$emit('delete', comment.id)"
          >
            <Trash2 class="h-4 w-4" />
          </button>
        </div>
        <p class="text-sm mb-3">{{ comment.content }}</p>
        <div class="flex items-center gap-4">
          <button
            class="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
            @click="$emit('toggleLike', comment.id)"
            :class="{ 'text-primary': isLiked }"
          >
            <ThumbsUp class="h-3.5 w-3.5" :fill="isLiked ? 'currentColor' : 'none'" />
            <span>좋아요 {{ comment.likedBy.length }}</span>
          </button>
          <button
            v-if="!comment.parentId"
            class="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
            @click="$emit('reply', comment.id)"
          >
            <Reply class="h-3.5 w-3.5" />
            <span>답글</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ThumbsUp, Trash2, Reply } from 'lucide-vue-next'
import type { Comment } from '@/types/comment'
import { formatDate } from '@/utils/dateUtils'

interface Props {
  comment: Comment
  currentUserId: string
}

interface Emits {
  (e: 'delete', commentId: string): void
  (e: 'toggleLike', commentId: string): void
  (e: 'reply', commentId: string): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const canDelete = computed(() => {
  return props.currentUserId === props.comment.author.id
})

const isLiked = computed(() => {
  return props.comment.likedBy.includes(props.currentUserId)
})
</script>
