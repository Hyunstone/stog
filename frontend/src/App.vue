<template>
  <div class="min-h-screen bg-background text-foreground flex flex-col">
    <AppHeader />
    <RouterView />

    <main class="flex-1">
      <BlogHome />
    </main>

    <footer class="border-t py-6">
      <div class="container">
        <p class="text-center text-sm text-muted-foreground">© 2024 DevBlog. 모든 권리 보유.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import BlogPost from './components/BlogPost.vue'
import BlogHome from '@/components/BlogHome.vue'
</script>
