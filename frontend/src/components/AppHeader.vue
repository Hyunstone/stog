<template>
  <header class="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between py-4">
      <div class="flex items-center gap-2">
        <BookOpen class="h-6 w-6" />
        <span class="text-xl font-bold">Stog</span>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <RouterLink to="/" class="text-sm font-medium hover:text-primary">홈</RouterLink>
        <RouterLink to="/" class="text-sm font-medium text-muted-foreground hover:text-primary">글</RouterLink>
        <RouterLink to="/" class="text-sm font-medium text-muted-foreground hover:text-primary">소개</RouterLink>
      </nav>
      <div class="flex items-center gap-4">
        <button class="rounded-full size-9 flex items-center justify-center bg-muted">
          <Search class="h-4 w-4" />
          <span class="sr-only">검색</span>
        </button>
        <button
          class="rounded-full size-9 flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
          @click="toggleTheme"
          aria-label="테마 전환"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
          <span class="sr-only">{{ isDark ? '라이트 모드' : '다크 모드' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { BookOpen, Search, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
