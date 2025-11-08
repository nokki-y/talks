<template>
  <div h-full w-full relative p-0 flex flex-col class="slidev-layout lm-cover">
    <img
      src="/background-cover.png"
      alt="background"
      absolute
      top-0
      left-0
      bottom-0
      right-0
      :style="{
        'object-fit': 'cover',
        width: '100%',
        height: '101%', // 画像のアスペクト比を考慮して1%余分に設定。本来なら画像のアスペクト比を修正すべき。
      }"
    />

    <div flex-1 w-full grid z-10 class="grid-cols-[1fr_3fr]">
      <!-- 左側のロゴエリア -->
      <div flex items-center justify-center>
        <img src="/logo.png" alt="logo" />
      </div>

      <!-- 中央のコンテンツエリア -->
      <div relative flex flex-col justify-center pl-10>
        <!-- 白い縦線 -->
        <div absolute left-0 bg-white class="top-[42%] h-[86px] w-[1px]"></div>

        <div text-2xl font-bold line-height-8>
          <slot name="title" />
        </div>

        <div>
          <div text-3>
            <slot name="subtitle" />
          </div>

          <div text-4>
            <p>鵜木 義秀 <span font-en>(Yoshihide Unoki)</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>
  </div>
</template>

<script setup></script>

<style>
.slidev-layout.lm-cover p {
  line-height: 1.5;
}
</style>
