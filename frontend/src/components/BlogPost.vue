<template>
  <article class="container py-10 max-w-4xl mx-auto">
    <div class="mb-10">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <RouterLink to="/" class="hover:text-primary">홈</RouterLink>
        <ChevronRight class="h-4 w-4" />
        <RouterLink to="/#/posts" class="hover:text-primary">개발</RouterLink>
        <ChevronRight class="h-4 w-4" />
        <span>Vue.js와 Tailwind CSS로 만드는 모던 웹 애플리케이션</span>
      </div>

      <!-- Post Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Vue.js와 Tailwind CSS로 만드는 모던 웹 애플리케이션</h1>
        <div class="flex items-center gap-4 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <div class="size-8 rounded-full overflow-hidden bg-muted">
              <img src="#" alt="Author" class="w-full h-full object-cover" />
            </div>
            <span>김개발</span>
          </div>
          <div class="flex items-center gap-1">
            <Calendar class="h-4 w-4" />
            <span>2024년 5월 23일</span>
          </div>
          <div class="flex items-center gap-1">
            <Clock class="h-4 w-4" />
            <span>5분 소요</span>
          </div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="rounded-lg overflow-hidden mb-8">
        <img src="#" alt="Featured post" class="w-full h-auto object-cover" />
      </div>

      <!-- Post Content -->
      <div class="prose prose-slate dark:prose-invert max-w-none">
        <p class="lead">최신 프론트엔드 기술을 활용하여 반응형 웹 애플리케이션을 구축하는 방법에 대해 알아봅니다.</p>

        <p>
          Vue.js와 Tailwind CSS는 현대적인 웹 애플리케이션을 구축하는 데 있어 강력한 조합입니다. Vue.js는 직관적인 API와 뛰어난 성능을
          제공하며, Tailwind CSS는 유틸리티 우선 접근 방식으로 빠르고 일관된 디자인을 가능하게 합니다.
        </p>

        <h2>Vue.js의 장점</h2>
        <p>
          Vue.js는 사용하기 쉬운 프레임워크로, 초보자도 쉽게 배울 수 있습니다. 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI 요소를 만들 수
          있으며, 반응형 데이터 바인딩을 통해 데이터 변경 시 자동으로 UI가 업데이트됩니다.
        </p>

        <h2>Tailwind CSS의 장점</h2>
        <p>
          Tailwind CSS는 유틸리티 클래스를 사용하여 HTML 내에서 직접 스타일을 적용할 수 있게 해줍니다. 이를 통해 CSS 파일을 별도로 작성하지
          않고도 빠르게 디자인을 구현할 수 있습니다. 또한, 일관된 디자인 시스템을 유지하면서도 커스터마이징이 용이합니다.
        </p>

        <div class="bg-muted p-4 rounded-lg my-6">
          <p class="font-medium">참고: 이 글은 Vue.js 3와 Tailwind CSS 3을 기준으로 작성되었습니다.</p>
        </div>

        <p>다음 글에서는 Vue.js와 Tailwind CSS를 사용하여 실제 프로젝트를 구축하는 방법에 대해 자세히 알아보겠습니다.</p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-8">
        <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          Vue.js
        </a>
        <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          Tailwind CSS
        </a>
        <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          웹개발
        </a>
        <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          프론트엔드
        </a>
      </div>

      <!-- Share Buttons -->
      <div class="flex items-center gap-4 mt-8 pt-6 border-t">
        <span class="text-sm font-medium">공유하기:</span>
        <button class="rounded-full bg-muted size-8 flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Twitter class="h-4 w-4" />
          <span class="sr-only">Twitter</span>
        </button>
        <button class="rounded-full bg-muted size-8 flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Facebook class="h-4 w-4" />
          <span class="sr-only">Facebook</span>
        </button>
        <button class="rounded-full bg-muted size-8 flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Linkedin class="h-4 w-4" />
          <span class="sr-only">LinkedIn</span>
        </button>
        <button class="rounded-full bg-muted size-8 flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Link class="h-4 w-4" />
          <span class="sr-only">Copy Link</span>
        </button>
      </div>
    </div>

    <!-- Comments Section -->
    <CommentSection />
  </article>
</template>

<script setup lang="ts">
import { Calendar, ChevronRight, Clock, Facebook, Link, Linkedin, Twitter } from 'lucide-vue-next'
import CommentSection from './CommentSection.vue'

defineProps<{ id: string }>()
</script>
