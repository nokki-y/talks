<template>
  <div h-full w-full relative p-0 flex flex-col>
    <!-- ぼかしをかけた背景画像 -->
    <div absolute top-0 left-0 w-full h-full class="backdrop-blur-container">
      <img
        src="./lm-cover/background.png"
        alt="background"
        class="w-full h-full object-cover blur-md"
      />
    </div>

    <!-- 半透明のオーバーレイ -->
    <div absolute top-0 left-0 w-full h-full bg-black opacity-30 z-1></div>

    <!-- コンテンツエリア -->
    <div flex-1 w-full flex items-center justify-center z-10 px-20>
      <div max-w-4xl w-full>
        <slot />
      </div>
    </div>

    <!-- 左下のコピーライト -->
    <div z-10 h-10 flex text-2 items-end pb-2 pl-4 c-white>
      <span>© Link and Motivation Group</span>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
