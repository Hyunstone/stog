export const formatDate = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  // 1분 미만
  if (diff < 60 * 1000) {
    return '방금 전'
  }

  // 1시간 미만
  if (diff < 60 * 60 * 1000) {
    const minutes = Math.floor(diff / (60 * 1000))
    return `${minutes}분 전`
  }

  // 24시간 미만
  if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(diff / (60 * 60 * 1000))
    return `${hours}시간 전`
  }

  // 7일 미만
  if (diff < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(diff / (24 * 60 * 60 * 1000))
    return `${days}일 전`
  }

  // 그 외
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}
