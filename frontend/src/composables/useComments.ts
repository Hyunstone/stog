import { ref, computed } from 'vue'
import type { Comment, CommentFormData, CommentErrors, User } from '@/types/comment'

export const useComments = (currentUser: User) => {
  const comments = ref<Comment[]>([
    {
      id: 'comment-1',
      content:
        '정말 유익한 글이네요! Vue.js와 Tailwind CSS 조합은 정말 강력한 것 같아요. 다음 글도 기대하고 있겠습니다.',
      author: {
        id: 'user-2',
        name: '이프론트',
        avatar: '/placeholder.svg?height=40&width=40&text=이',
        isAdmin: false,
      },
      createdAt: new Date(2024, 4, 22, 14, 30),
      likedBy: ['user-1', 'user-3'],
      parentId: null,
    },
    {
      id: 'comment-2',
      content:
        '저도 Vue.js와 Tailwind CSS를 함께 사용하고 있는데, 정말 개발 속도가 빨라졌어요. 특히 Tailwind의 유틸리티 클래스는 정말 편리합니다.',
      author: {
        id: 'user-3',
        name: '박디자인',
        avatar: '/placeholder.svg?height=40&width=40&text=박',
        isAdmin: false,
      },
      createdAt: new Date(2024, 4, 22, 16, 45),
      likedBy: [],
      parentId: null,
    },
    {
      id: 'comment-3',
      content: '혹시 Tailwind CSS의 다크 모드 구현에 대한 글도 작성해주실 수 있을까요?',
      author: {
        id: 'user-4',
        name: '최백엔드',
        avatar: '/placeholder.svg?height=40&width=40&text=최',
        isAdmin: false,
      },
      createdAt: new Date(2024, 4, 23, 9, 15),
      likedBy: ['user-2'],
      parentId: null,
    },
    {
      id: 'reply-1',
      content: '네, 다음 글에서 다크 모드 구현에 대해 다룰 예정입니다. 기대해주세요!',
      author: {
        id: 'admin-1',
        name: '김개발',
        avatar: '/placeholder.svg?height=40&width=40',
        isAdmin: true,
      },
      createdAt: new Date(2024, 4, 23, 10, 5),
      likedBy: ['user-4', 'user-2', 'user-3'],
      parentId: 'comment-3',
    },
  ])

  const isSubmitting = ref(false)
  const errors = ref<CommentErrors>({
    content: '',
    replyContent: '',
  })

  // 댓글 정렬 (최신순)
  const sortedComments = computed(() => {
    return [...comments.value].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  })

  // 특정 댓글의 답글 가져오기
  const getReplies = (commentId: string): Comment[] => {
    return comments.value
      .filter((comment) => comment.parentId === commentId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
  }

  // 댓글 작성
  const addComment = async (formData: CommentFormData): Promise<void> => {
    if (!formData.content.trim()) {
      errors.value.content = '댓글 내용을 입력해주세요.'
      return
    }

    errors.value.content = ''
    isSubmitting.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      const newComment: Comment = {
        id: `comment-${Date.now()}`,
        content: formData.content,
        author: currentUser,
        createdAt: new Date(),
        likedBy: [],
        parentId: null,
      }

      comments.value.unshift(newComment)
    } catch (error) {
      console.error('댓글 작성 중 오류가 발생했습니다:', error)
    } finally {
      isSubmitting.value = false
    }
  }

  // 답글 작성
  const addReply = async (parentId: string, formData: CommentFormData): Promise<void> => {
    if (!formData.content.trim()) {
      errors.value.replyContent = '답글 내용을 입력해주세요.'
      return
    }

    errors.value.replyContent = ''
    isSubmitting.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      const newReply: Comment = {
        id: `reply-${Date.now()}`,
        content: formData.content,
        author: currentUser,
        createdAt: new Date(),
        likedBy: [],
        parentId: parentId,
      }

      comments.value.push(newReply)
    } catch (error) {
      console.error('답글 작성 중 오류가 발생했습니다:', error)
    } finally {
      isSubmitting.value = false
    }
  }

  // 댓글 좋아요 토글
  const toggleLike = (commentId: string): void => {
    const comment = comments.value.find((c) => c.id === commentId)
    if (!comment) return

    const userIndex = comment.likedBy.indexOf(currentUser.id)

    if (userIndex === -1) {
      comment.likedBy.push(currentUser.id)
    } else {
      comment.likedBy.splice(userIndex, 1)
    }
  }

  // 댓글 삭제
  const deleteComment = async (commentId: string): Promise<void> => {
    if (!confirm('정말로 이 댓글을 삭제하시겠습니까?')) return

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const comment = comments.value.find((c) => c.id === commentId)
      if (!comment) return

      if (!comment.parentId) {
        // 부모 댓글인 경우 답글도 함께 삭제
        comments.value = comments.value.filter(
          (c) => c.id !== commentId && c.parentId !== commentId,
        )
      } else {
        // 답글만 삭제
        comments.value = comments.value.filter((c) => c.id !== commentId)
      }
    } catch (error) {
      console.error('댓글 삭제 중 오류가 발생했습니다:', error)
    }
  }

  return {
    comments,
    sortedComments,
    isSubmitting,
    errors,
    getReplies,
    addComment,
    addReply,
    toggleLike,
    deleteComment,
  }
}
