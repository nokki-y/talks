<template>
  <div h-full w-full relative class="slidev-layout lm-plain">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- CONTENTエリア -->
    <div z-10 size-full>
      <slot>CONTENT</slot>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
