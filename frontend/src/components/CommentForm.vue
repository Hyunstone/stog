<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <textarea
        v-model="formData.content"
        :placeholder="placeholder"
        :rows="rows"
        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        :class="{ 'border-destructive': error }"
      ></textarea>
      <p v-if="error" class="text-destructive text-xs mt-1">{{ error }}</p>
    </div>
    <div class="flex justify-end gap-2">
      <button
        v-if="showCancel"
        type="button"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
        @click="$emit('cancel')"
      >
        취소
      </button>
      <button
        type="submit"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3"
        :disabled="isSubmitting"
      >
        <Loader2 v-if="isSubmitting" class="mr-2 h-3 w-3 animate-spin" />
        {{ submitText }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import type { CommentFormData } from '@/types/comment'

interface Props {
  placeholder?: string
  rows?: number
  submitText?: string
  showCancel?: boolean
  isSubmitting?: boolean
  error?: string
}

interface Emits {
  (e: 'submit', data: CommentFormData): void
  (e: 'cancel'): void
}

withDefaults(defineProps<Props>(), {
  placeholder: '댓글을 작성해주세요...',
  rows: 3,
  submitText: '댓글 작성',
  showCancel: false,
  isSubmitting: false,
  error: '',
})

const emit = defineEmits<Emits>()

const formData = reactive<CommentFormData>({
  content: '',
})

const handleSubmit = () => {
  emit('submit', { ...formData })
  formData.content = ''
}
</script>
