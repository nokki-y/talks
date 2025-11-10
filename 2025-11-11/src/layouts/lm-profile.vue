<template>
  <div size-full px-41 py-44 relative flex flex-col class="slidev-layout lm-profile relative">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />
    <!-- マスク -->
    <div absolute top-0 left-0 size-full bg-black op-40></div>

    <!-- 右上のロゴ -->
    <div absolute h-30 w-30 class="top-[-16px] right-[-10px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- コンテンツエリア -->
    <div z-20 size-full grid gap-4 class="grid-cols-[1fr_160px]">
      <div size-full>
        <!-- 名前 -->
        <div flex flex-col>
          <span class="text-3xl font-bold mb-1"
            >鵜木 義秀<span class="font-en"> (Yoshihide Unoki)</span></span
          >
          <span class="text-xl opacity-60 mb-8 font-en">nokki-y</span>
        </div>
        <!-- 所属 -->
        <div flex flex-col text-lg>
          <span>株式会社リンクアンドモチベーション</span>
          <span><span font-en>SRE</span>・イネーブリンググループ</span>
        </div>
        <div>
          <slot />
        </div>
      </div>

      <!-- プロフィール画像とSNSリンク -->
      <div flex flex-col items-center size-full>
        <!-- プロフィール画像 丸形にする -->
        <div size-25 rounded-full overflow-hidden mt-6>
          <img src="/sns.jpg" alt="profile" />
        </div>

        <!-- 各種SNSリンク GitHub, X -->
        <div text-sm flex mt-4 line-height-3 gap-3.5>
          <div flex items-center gap-1>
            <div flex items-center h-full>
              <img src="/github-mark-white.svg" alt="GitHub" size-3.5 />
            </div>
            <div flex items-center h-full>
              <a href="https://github.com/nokki-y" target="_blank" font-en flex items-center
                >nokki-y</a
              >
            </div>
          </div>
          <div flex items-center gap-1>
            <div flex items-center h-full>
              <img src="/x-mark-white.png" flex items-center alt="X" size-3 />
            </div>
            <div flex items-center h-full>
              <a href="https://x.com/nokki_y" target="_blank" font-en flex items-center>nokki_y</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
