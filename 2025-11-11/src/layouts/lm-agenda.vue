<template>
  <div h-full w-full relative py-20 px-15 flex flex-col items-center class="slidev-layout lm-base">
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <div
      absolute
      h-30
      w-30
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-25px] left-[540px]"
    >
      <img src="/logo.png" alt="logo" />
    </div>

    <div
      absolute
      h-30
      w-36
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-25px] left-[315px]"
    >
      <img src="/vue-fes-japan-2025.svg" alt="logo" />
    </div>

    <div z-10 mb-11 border-b-2 border-white tracking-widest flex justify-center items-center>
      <div text-4xl font-bold font-en>
        <span mx-1>A</span>
        <span mx-1>G</span>
        <span mx-1>E</span>
        <span mx-1>N</span>
        <span mx-1>D</span>
        <span mx-1>A</span>
      </div>
    </div>

    <!-- コンテンツエリア -->
    <div z-10 rounded-md overflow-hidden py-6 px-12 box-contents w-full>
      <slot>AGENDA</slot>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
