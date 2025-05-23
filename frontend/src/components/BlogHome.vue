<template>
  <div class="container py-10">
    <!-- Hero Section -->
    <section class="py-12 md:py-24 lg:py-32">
      <div class="mx-auto flex max-w-[980px] flex-col items-start gap-4">
        <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          개발과 일상에 대한<br />
          나만의 이야기
        </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground md:text-xl">프로그래밍, 디자인, 그리고 일상의 경험을 공유합니다.</p>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="pb-12 md:pb-24 lg:pb-32">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Main Content -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold mb-6">최근 글</h2>

          <!-- Featured Post -->
          <div class="mb-10 group">
            <div class="overflow-hidden rounded-lg mb-4">
              <img
                src="#"
                alt="Featured post"
                class="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">개발</span>
                <span class="text-xs text-muted-foreground">2024년 5월 23일</span>
              </div>
              <h3 class="text-xl font-bold group-hover:text-primary transition-colors">
                <RouterLink :to="'/posts/1'">Vue.js와 Tailwind CSS로 만드는 모던 웹 애플리케이션</RouterLink>
              </h3>
              <p class="text-muted-foreground">최신 프론트엔드 기술을 활용하여 반응형 웹 애플리케이션을 구축하는 방법에 대해 알아봅니다.</p>
            </div>
          </div>

          <!-- Post Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="i in 4" :key="i" class="group">
              <div class="overflow-hidden rounded-lg mb-3">
                <img
                  src="#"
                  alt="Blog post"
                  class="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
                    {{ ['개발', '디자인', '생산성', '일상'][i % 4] }}
                  </span>
                  <span class="text-xs text-muted-foreground">2024년 5월 {{ 20 + i }}일</span>
                </div>
                <h3 class="font-bold group-hover:text-primary transition-colors">
                  <RouterLink :to="'/posts/2'">
                    {{
                      [
                        'TypeScript 타입 시스템 마스터하기',
                        '효율적인 컴포넌트 설계 방법',
                        '개발자를 위한 생산성 도구 모음',
                        '원격 근무 1년 경험 공유',
                      ][i % 4]
                    }}
                  </RouterLink>
                </h3>
                <p class="text-sm text-muted-foreground line-clamp-2">
                  {{
                    [
                      'TypeScript의 고급 타입 기능을 활용하여 더 안전한 코드를 작성하는 방법을 알아봅니다.',
                      '재사용 가능하고 유지보수하기 쉬운 컴포넌트를 설계하는 방법에 대해 설명합니다.',
                      '개발 워크플로우를 향상시키는 데 도움이 되는 도구와 확장 프로그램을 소개합니다.',
                      '원격 근무의 장단점과 효율적으로 일하기 위한 팁을 공유합니다.',
                    ][i % 4]
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justify-center">
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              더 많은 글 보기
              <ChevronRight class="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- About -->
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-lg font-semibold leading-none tracking-tight">소개</h3>
            </div>
            <div class="p-6 pt-0 flex flex-col items-center text-center">
              <div class="size-24 rounded-full bg-muted mb-4 overflow-hidden">
                <img src="#" alt="Profile" class="w-full h-full object-cover" />
              </div>
              <h4 class="font-semibold text-lg">이현석</h4>
              <p class="text-sm text-muted-foreground mt-1">백엔드 개발자</p>
              <p class="text-sm mt-4">문제 해결에 집중합니다.</p>
              <div class="flex gap-2 mt-4">
                <a
                  href="https://github.com/Hyunstone"
                  class="rounded-full bg-muted size-8 flex items-center justify-center"
                  target="_blank"
                >
                  <Github class="h-4 w-4" />
                  <span class="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hyunseok-lee-b994b2298/"
                  class="rounded-full bg-muted size-8 flex items-center justify-center"
                  target="_blank"
                >
                  <Linkedin class="h-4 w-4" />
                  <span class="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Theme Switcher Card -->
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-lg font-semibold leading-none tracking-tight">테마 설정</h3>
            </div>
            <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground mb-4">원하는 테마를 선택하거나 시스템 설정을 따르세요.</p>
              <div class="grid grid-cols-3 gap-2">
                <button
                  @click="setTheme('light')"
                  class="flex flex-col items-center justify-center rounded-md border p-3 hover:bg-accent transition-colors"
                  :class="{ 'ring-2 ring-primary': theme === 'light' }"
                >
                  <Sun class="mb-2 h-5 w-5" />
                  <span class="text-xs">라이트</span>
                </button>
                <button
                  @click="setTheme('dark')"
                  class="flex flex-col items-center justify-center rounded-md border p-3 hover:bg-accent transition-colors"
                  :class="{ 'ring-2 ring-primary': theme === 'dark' }"
                >
                  <Moon class="mb-2 h-5 w-5" />
                  <span class="text-xs">다크</span>
                </button>
                <button
                  @click="setTheme('system')"
                  class="flex flex-col items-center justify-center rounded-md border p-3 hover:bg-accent transition-colors"
                  :class="{ 'ring-2 ring-primary': theme === 'system' }"
                >
                  <Laptop class="mb-2 h-5 w-5" />
                  <span class="text-xs">시스템</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Categories -->
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-lg font-semibold leading-none tracking-tight">카테고리</h3>
            </div>
            <div class="p-6 pt-0">
              <div class="space-y-2">
                <a href="#" class="flex items-center justify-between group">
                  <span class="text-sm group-hover:text-primary transition-colors">개발</span>
                  <span class="text-xs bg-muted rounded-full px-2 py-0.5">24</span>
                </a>
                <a href="#" class="flex items-center justify-between group">
                  <span class="text-sm group-hover:text-primary transition-colors">디자인</span>
                  <span class="text-xs bg-muted rounded-full px-2 py-0.5">12</span>
                </a>
                <a href="#" class="flex items-center justify-between group">
                  <span class="text-sm group-hover:text-primary transition-colors">생산성</span>
                  <span class="text-xs bg-muted rounded-full px-2 py-0.5">8</span>
                </a>
                <a href="#" class="flex items-center justify-between group">
                  <span class="text-sm group-hover:text-primary transition-colors">일상</span>
                  <span class="text-xs bg-muted rounded-full px-2 py-0.5">15</span>
                </a>
                <a href="#" class="flex items-center justify-between group">
                  <span class="text-sm group-hover:text-primary transition-colors">리뷰</span>
                  <span class="text-xs bg-muted rounded-full px-2 py-0.5">6</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-lg font-semibold leading-none tracking-tight">태그</h3>
            </div>
            <div class="p-6 pt-0">
              <div class="flex flex-wrap gap-2">
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  Vue.js
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  React
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  TypeScript
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  Tailwind
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  UI/UX
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  생산성
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  개발환경
                </a>
                <a href="#" class="text-xs px-2.5 py-0.5 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  자바스크립트
                </a>
              </div>
            </div>
          </div>

          <!--          &lt;!&ndash; Newsletter &ndash;&gt;-->
          <!--          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">-->
          <!--            <div class="flex flex-col space-y-1.5 p-6">-->
          <!--              <h3 class="text-lg font-semibold leading-none tracking-tight">뉴스레터 구독</h3>-->
          <!--            </div>-->
          <!--            <div class="p-6 pt-0">-->
          <!--              <p class="text-sm text-muted-foreground mb-4">-->
          <!--                새로운 글이 올라오면 이메일로 알려드립니다.-->
          <!--              </p>-->
          <!--              <form class="space-y-3">-->
          <!--                <div class="space-y-2">-->
          <!--                  <input-->
          <!--                    type="email"-->
          <!--                    placeholder="이메일 주소"-->
          <!--                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"-->
          <!--                  />-->
          <!--                </div>-->
          <!--                <button-->
          <!--                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"-->
          <!--                >-->
          <!--                  구독하기-->
          <!--                </button>-->
          <!--              </form>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight, Github, Laptop, Linkedin, Moon, Sun } from 'lucide-vue-next'

// 테마 상태 관리
const theme = ref('system') // 'light', 'dark', 'system'

// 테마 설정 함수
const setTheme = (newTheme: string) => {
  theme.value = newTheme

  if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem('theme-preference', newTheme)
}

// 컴포넌트 마운트 시 초기화
if (typeof window !== 'undefined') {
  // 저장된 테마 설정 불러오기
  const savedTheme = localStorage.getItem('theme-preference')
  if (savedTheme) {
    theme.value = savedTheme
    setTheme(savedTheme)
  } else {
    // 시스템 테마 감지
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }
}
</script>
