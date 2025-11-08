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

    <div absolute h-30 w-30 z-20 class="top-[12px] right-[-10px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
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

<script></script>

<style>
.slidev-layout.lm-base .content-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  background-color: none;
  padding: 1rem;
  /* clip-path: polygon(6% 0%, 100% 0%, 100% 94%, 94% 100%, -94% 100%); */
  border-radius: 0.1rem;
}

.slidev-layout.lm-base .background-color {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-top: 40px solid rgba(var(--box-contents-background-color-rgb), 0.6);
  border-right: 12px solid rgba(var(--box-contents-background-color-rgb), 0.6);
  border-bottom: 40px solid rgba(var(--box-contents-background-color-rgb), 0.6);
  border-left: 12px solid rgba(var(--box-contents-background-color-rgb), 0.6);
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.slidev-layout.lm-base .h1-container {
  position: absolute;
  top: 20px;
  left: 52px;
  display: inline-flex;
  flex-direction: column;
  background-color: #54805e;
  padding: 1rem;
  /* clip-path: polygon(2% 0%, 100% 0%, 100% 80%, 98% 100%, -7% 100%); */
  width: max-content;
  border-radius: 0.1rem;
  z-index: 50;
}

.slidev-layout.lm-base .h1-container h1 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  /* color: var(--box-contents-border-color); */
}

.slidev-layout.lm-base .sub-title-container {
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  background-color: rgba(186, 94, 116, 0.8);
  padding: 0.6rem;
  z-index: 40;
  border: 10px solid rgba(var(--box-contents-background-color-rgb), 0.6);
  background: linear-gradient(
    135deg,
    #b3002d 0%,
    #c21c46 15%,
    #d13b60 35%,
    #e0527a 55%,
    #ec6b8f 75%,
    #f48fa7 100%
  );
  /* clip-path: polygon(2.5% 0%, 100% 0%, 100% 75%, 97% 100%, -7% 100%); */
}

.slidev-layout.lm-base .sub-title-container .sub-title {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.8;
}

.slidev-layout.lm-base .image-container {
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 40;
  border-radius: 0.1rem;
}

.slidev-layout.lm-base .detail-container {
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  background-color: rgba(186, 94, 116, 0.8);
  padding: 1rem;
  border-radius: 0.1rem;
}

/* .slidev-layout.lm-base .detail-container:after {
  content: '';
  position: absolute;
  top: -40px;
  left: -20px;
  width: calc(100% + 20px);
  height: calc(100% + 40px);
  border: 2px solid rgba(var(--box-contents-background-color-rgb), 0.6);
} */

.slidev-layout.lm-base .detail-container .detail-title {
  position: absolute;
  background-color: rgba(var(--box-contents-background-color-rgb), 1);
  z-index: 1;
}

.slidev-layout.lm-base .detail-container .detail-content {
  /* color: var(--section-contents-color); */
  /* font-weight: 500; */
  opacity: 0.8;
}
</style>
