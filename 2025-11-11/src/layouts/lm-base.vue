<template>
  <div h-full w-full relative flex flex-col class="slidev-layout lm-profile relative">
    <!-- コンテンツエリア -->
    <div flex-1 w-full flex items-center justify-center z-10 px-20>
      <div max-w-4xl w-full>
        <slot />
      </div>
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50>
      <span>© Link and Motivation Group</span>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
