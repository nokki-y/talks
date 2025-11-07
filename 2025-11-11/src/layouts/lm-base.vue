<template>
  <div
    h-full
    w-full
    relative
    p-0
    flex
    flex-col
    justify-end
    items-center
    class="slidev-layout lm-base"
  >
    <img
      src="../assets/background.png"
      alt="background"
      absolute
      top-0
      left-0
      bottom-0
      right-0
      size-full
    />

    <div absolute h-20 w-20 z-20 class="top-[-16px] right-[-10px]">
      <img src="../assets/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-10 z-20 text-2 op50>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- コンテンツエリア -->
    <div
      flex
      z-10
      rounded-tr-xl
      rounded-tl-xl
      overflow-hidden
      px-10
      py-5
      class="h-[calc(100%-52px)] w-[calc(100%-64px)] bg-[#D8DDE1]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
