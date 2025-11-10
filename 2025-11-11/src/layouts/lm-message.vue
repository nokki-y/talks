<template>
  <div h-full w-full py-6 px-8 flex flex-col items-center class="slidev-layout lm-message">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <div h-30 w-30 z-20 flex items-center justify-center>
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- CONTENTエリア -->
    <div z-10 h-full flex flex-col items-center justify-center pb-36>
      <div w-full overflow-hidden py-8 px-16 flex flex-col items-center justify-center text-2xl>
        <slot name="message-content">MESSAGE CONTENT</slot>
      </div>

      <!-- 飾り線 (デフォルトでは非表示。slotにdecorationを追加すると表示される) -->
      <div
        v-if="$slots.description"
        w-12
        class="h-[1px]"
        :style="{ backgroundColor: 'var(--base-border-color)' }"
      ></div>

      <!-- Descriptionエリア (デフォルトでは非表示。slotにdescriptionを追加すると表示される) -->
      <div w-full v-if="$slots.description">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
