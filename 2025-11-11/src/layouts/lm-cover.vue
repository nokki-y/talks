<template>
  <div h-full w-full relative p-0 flex flex-col class="slidev-layout lm-cover">
    <img
      class="lm-cover__bg"
      src="../assets/background.png"
      alt="background"
      absolute
      top-0
      left-0
      w-full
      h-full
    />

    <div flex-1 w-full grid z-10 class="lm-cover__overlay grid-cols-[1fr_3fr]">
      <!-- 左側のロゴエリア -->
      <div flex items-center justify-center>
        <img src="../assets/logo.png" alt="logo" />
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
            <p>鵜木 義秀 (Yoshihide Unoki)</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 左下のコピーライト -->
    <div
      z-10
      h-10
      flex
      text-2
      items-end
      pb-2
      pl-4
      c-coolgray
      class="lm-cover-content lm-cover__overlay"
    >
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
