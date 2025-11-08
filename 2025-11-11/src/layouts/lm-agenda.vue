<template>
  <div h-full w-full relative p-20 flex flex-col items-center class="slidev-layout lm-base">
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <div absolute h-30 w-30 z-20 class="top-[-14px] right-[-10px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-10 z-20 text-2 op30>
      <span>© Link and Motivation Group</span>
    </div>

    <div z-10 mb-10 border-b-2 border-white tracking-widest>
      <span text-4xl font-bold mx-1 font-en>A G E N D A</span>
    </div>

    <!-- コンテンツエリア -->
    <div z-10 rounded-md overflow-hidden p-5 box-contents w-full>
      <slot>AGENDA</slot>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
