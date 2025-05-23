import { ref, onMounted } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
  }
}
