<template>
  <div
    h-full
    w-full
    relative
    p-0
    flex
    flex-col
    justify-between
    items-center
    class="slidev-layout lm-base"
  >
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <h1 z-10 flex-1 w-full px-8 flex items-center>
      <slot name="title" />
    </h1>

    <div absolute h-30 w-30 z-20 class="top-[-14px] right-[-10px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-10 z-20 text-2 op30>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- コンテンツエリア -->
    <div z-10 rounded-md overflow-hidden p-5 box-contents>
      aaaaaaaaaa
      <slot name="content" />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
