<template>
  <div h-full w-full relative flex flex-col class="slidev-layout lm-profile relative">
    <div absolute h-20 w-20 class="top-[-16px] right-[-10px]">
      <img src="../assets/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- コンテンツエリア -->
    <div flex-1 w-full flex items-center justify-center z-20>
      <div h-full w-full>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
