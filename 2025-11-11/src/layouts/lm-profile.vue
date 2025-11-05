<template>
  <div h-full w-full relative p-0 flex flex-col class="slidev-layout lm-profile">
    <!-- ぼかしをかけた背景画像 -->
    <div absolute top-0 left-0 w-full h-full>
      <img src="../assets/background.png" alt="background" w-full h-full object-cover blur-sm />
    </div>

    <!-- コンテンツエリア -->
    <div flex-1 w-full flex items-center justify-center z-10 px-20>
      <div max-w-4xl w-full>
        <slot />
      </div>
    </div>

    <!-- 左下のコピーライト -->
    <div z-10 h-10 flex text-2 items-end pb-2 pl-4 c-coolgray>
      <span>© Link and Motivation Group</span>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
