<template>
  <div class="slidev-layout h-full w-full relative p-0">
    <img
      src="./lm-cover/background.png"
      alt="background"
      class="absolute top-0 left-0 w-full h-full"
    />

    <div class="flex-1 w-full grid grid-cols-2 h-[calc(100%-2.5rem)]">
      <!-- 左上のロゴエリア -->
      <div class="z-10">
        <img src="./lm-cover/logo.png" alt="logo" class="lm-cover-logo-image" />
      </div>

      <!-- 中央のコンテンツエリア -->
      <div class="z-10">
        <div class="lm-cover-title">
          <slot name="title" />
        </div>

        <div class="z-10">
          <slot name="subtitle" />
        </div>

        <div class="z-10">
          <slot name="author" />
        </div>
      </div>
    </div>
    <!-- 左下のコピーライト -->
    <div class="z-10 h-10">
      <span>© Link and Motivation Group</span>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
