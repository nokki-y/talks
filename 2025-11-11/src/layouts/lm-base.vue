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

    <div absolute h-30 w-30 z-20 class="top-[-14px] right-[-10px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-10 z-20 text-2 op30 c-black>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- コンテンツエリア -->
    <div z-10 size-full relative>
      <slot>
        <div flex justify-center items-center size-full>
          <div>CONTENT</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
