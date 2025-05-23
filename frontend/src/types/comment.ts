export interface User {
  id: string
  name: string
  avatar: string
  isAdmin: boolean
}

export interface Comment {
  id: string
  content: string
  author: User
  createdAt: Date
  likedBy: string[]
  parentId: string | null
}

export interface CommentFormData {
  content: string
}

export interface CommentErrors {
  content: string
  replyContent: string
}
