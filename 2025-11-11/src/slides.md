---
# try also 'default' to start simple
highlighter: shiki
title: 丸3年やってみたけど、Vue Fes Japan運営スタッフはいいぞー！
info: '[セッション概要]運営スタッフを丸3年やって見えたこと・得たことを共有します。技術の深掘りではなく、運営/コミュニティに関する学びが中心です。対象: コミュニティ参加や運営に興味がある人、持ち帰り: コミュニティ参加により得られること、関わり方のヒント'
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 10min
# color schema: light or dark
colorSchema: dark
# custom css
css: unocss
---

<LmSplash />

<!--
それでは発表を始めます。
お願いします。
-->

---
layout: lm-cover
---

::title::

<div mb-6 line-height-10 flex flex-col>
  <div>
    <span>丸<span font-en class="text-[26px]"> 3 </span>年やってみたけど、</span>
  </div>
  <div>
    <span font-en>Vue Fes Japan </span><span>運営スタッフはいいぞー！</span>
  </div>
</div>

::subtitle::

<div mb-2 line-height-5>
  <div>株式会社リンクアンドモチベーション</div>
  <div><span font-en class="text-[13px]">SRE</span>・イネーブリンググループ</div>
</div>

<!--
本日は濃い技術の話が多かったので、僕からは運営の話をしたいと思います。
技術の話の締めは、このあとのかずぽんさんにおまかせします。
-->

---
layout: lm-profile
---

<!--
自己紹介は、割愛しますが、Vue Fes運営を3年やってきた人間が話すということだけ知っといて貰えればいいです。
-->

---
layout: lm-message
columnCount: 1
---

::title::
今日お話しすること

::message-content::
「 誰かのためが、自分のためになる。」

::description::

<div flex flex-col items-center justify-center mt-10>
  <span>運営スタッフという誰かのためのボランティア活動は</span>
  <span>結果的に自分のためになるという話</span>
</div>

<!--
先に結論からお話すると、今日は「誰かのためが、自分のためになる。」というメッセージをお伝えしたいと思います。
運営スタッフは一言でいえば「ボランティア」です。
自身の労力をただ提供すると考える人もいるかもしれません。

でも、そこから得られることもあります。
本日は僕の経験から得たことをお話します。
-->

---
layout: lm-plain
---

<div relative size-full flex items-center justify-center>
  <!-- 思い出画像 -->
  <MemoryBackground/>
  <!-- マスク -->
  <div z-30 absolute top-0 left-0 size-full bg-black op-70></div>
  <!-- キーワード -->
  <div z-30 size-full flex flex-col pt-34 pb-10 px-25>
    <div text-4xl font-bold mb-14 relative flex items-end>
      <span font-en>KEYWORD</span>
      <span text-5xl font-bold ml-4 class="pb-[4px]">「出会い」</span>
      <!-- 飾り線 -->
      <span absolute op-80 :style="{ backgroundColor: '#5850a9' }" class="h-[14px] w-[202px] top-[42px] left-[198px]"></span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span>-- 技術との出会い</span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span>-- 仲間との出会い</span>
    </div>
    <div text-4xl font-bold ml-1>
      <span>-- 新しい自分との出会い</span>
    </div>
  </div>
</div>

<!--
キーワードは「出会い」です。
技術との出会い、仲間との出会い、そして新しい自分との出会い。
この3つの出会いを中心とした僕の経験をお話します。
-->

---
layout: lm-plain
---

<div relative size-full flex items-center justify-center>
  <!-- 思い出画像 -->
  <MemoryBackground/>
  <!-- マスク -->
  <div z-30 absolute top-0 left-0 size-full bg-black op-70></div>
  <!-- CONTENTS -->
  <div z-30 size-full flex flex-col pt-34 pb-10 px-25>
    <div text-4xl font-bold mb-14 relative flex items-end>
      <span font-en>KEYWORD</span>
      <span text-5xl font-bold ml-4 class="pb-[4px]">「出会い」</span>
      <!-- 飾り線 -->
      <span absolute op-80 :style="{ backgroundColor: '#5850a9' }" class="h-[14px] w-[202px] top-[42px] left-[198px]"></span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span><span font-en>CAPTURE.01</span> - 技術を“手段”として扱う</span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span><span font-en>CAPTURE.02</span> - 3つの出会い</span>
    </div>
    <div text-4xl font-bold ml-1>
      <span><span font-en>CAPTURE.03</span> - 再び技術を“楽しむ”</span>
    </div>
  </div>
</div>

<!--
はじめに、コミュニティに参加する前の、少しネガティブな話から入り、
それがコミュニティに参加したことで、どのような出会いと変化があったかを話す流れです。

- CAPTURE. 01: 技術を“手段”として扱う自分
- CAPTURE. 02: 3つの出会い
- CAPTURE. 03: 再び技術を“楽しむ”自分
-->

---
layout: lm-sub-cover
captureNumber: '01'
---

::title::

<div class="w-[420px] text-center">
  <span>技術を“手段”として扱う</span>
</div>

<!--
まず、コミュニティに入る前の頃、技術を“手段”として扱っていると感じた時期です。
-->

---
layout: lm-columns
columnCount: 4
---

::title::
<span font-en>ROI</span> - 投資対効果

::content-1::

<div flex flex-col justify-center items-center h-fit px-10 py-5 border-2 border-white rounded-md>
  <span text-bold mb-5>[拡張性の壁]</span>
  <span mb-1>将来を見据えた設計にしたい</span>
  <span><span font-en>⇔ </span><span border-b-2 border-white>金銭的コストが合わない</span></span>
</div>

::content-2::

<div flex flex-col justify-center items-center h-fit px-10 py-5 border-2 border-white rounded-md>
  <span text-bold mb-5>[堅牢性の壁]</span>
  <span mb-1>品質を上げたい</span>
  <span><span font-en>⇔ </span><span border-b-2 border-white>納期が迫っている</span></span>
</div>

::content-3::

<div flex flex-col justify-center items-center h-fit px-10 py-5 border-2 border-white rounded-md>
  <span text-bold mb-5>[先進性の壁]</span>
  <span mb-1>新技術を導入したい</span>
  <span><span font-en>⇔ </span><span border-b-2 border-white>学習コストがかかりすぎる</span></span>
</div>

::content-4::

<div flex flex-col justify-center items-center h-fit px-10 py-5 border-2 border-white rounded-md>
  <span text-bold mb-5>[運用性の壁]</span>
  <span mb-1>自動化したい</span>
  <span><span font-en>⇔ </span><span border-b-2 border-white>維持コストが増える</span></span>
</div>

<!--
エンジニアをしていると、あれこれ試したいと思っても、コストや納期に悩むのがあるあるです。

前提として、弊社は社名にモチベーションが入っているくらいなので、
エンジニアのモチベーションをとても大事にして、先行的な投資を惜しまない企業体質です。

それでも経験が長くなると、このような壁にぶつかってしまうこともあります。
実際に僕はこの壁によくぶつかっていました。

自身の未熟さもあり、そういう経験が期間が続いていた時期に、
開発組織の認知拡大というビジネス的な目的でv-tokyoに参加しました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
打算的な目的でイベントに参加

::content-1::

<div flex justify-center items-center relative pt-8>
  <div h-40 overflow-hidden rounded-md>
    <img src="/v-tokyo-16.png" alt="v-tokyo #16" class="w-full h-full object-cover" />
  </div>

  <!-- 投稿画像: 3列2行のグリッドレイアウト -->
  <div absolute rounded-md overflow-hidden class="top-[87px] right-[-10px]">
    <img src="/v-tokyo-16-x-1.png" alt="v-tokyo #16 X投稿-1" class="w-64 h-auto object-contain" />
  </div>
  <div absolute rounded-md overflow-hidden class="top-[-20px] left-[-10px]">
    <!-- 比率: 1198 × 440 -->
    <img src="/v-tokyo-16-x-2.png" alt="v-tokyo #16 X投稿-2" class="w-64 h-auto object-contain" />
  </div>
  <div absolute rounded-md overflow-hidden class="top-[-20px] right-[-10px]">
    <img src="/v-tokyo-16-x-3.png" alt="v-tokyo #16 X投稿-3" class="w-64 h-auto object-contain" />
  </div>
  <div absolute rounded-md overflow-hidden class="top-[170px] left-[-10px]">
    <img src="/v-tokyo-16-x-4.png" alt="v-tokyo #16 X投稿-4" class="w-64 h-auto object-contain" />
  </div>
  <div absolute rounded-md overflow-hidden class="top-[168px] right-[-10px]">
    <img src="/v-tokyo-16-x-5.png" alt="v-tokyo #16 X投稿-5" class="w-64 h-auto object-contain" />
  </div>
  <div absolute rounded-md overflow-hidden class="top-[91.5px] left-[-10px]">
    <img src="/v-tokyo-16-x-6.png" alt="v-tokyo #16 X投稿-6" class="w-64 h-auto object-contain" />
  </div>
</div>

::description::

<div flex justify-center items-center pt-26>
  打算と本音のあいだで生まれた投稿たち
</div>

<!--
当時のX投稿を遡ったら大量に投稿していました。
もちろん、素直な感想を投稿したものも多々ありますが、認知拡大のために存在感を出すために投稿していた記憶があります。
-->

---
layout: lm-columns
columnCount: 2
---

::title::
CAPTURE. 01: 技術を“手段”として扱う自分

::content-1::

<div flex justify-start items-center relative pt-10>
  <div flex justify-center items-center p-8 border-2 border-white rounded-md w-100 ml-4>
    <span>ビジネスとの葛藤に悩む</span>
  </div>
  <!-- 矢印代わりの三角図形 -->
  <div absolute h-10 w-8 rotate-270 bg-white class="top-[70px] right-[-34px]" :style="{ clipPath: 'polygon(0px 0px, 100% 0px, 50% 60%)' }"></div>
</div>

::content-2::

<div flex justify-end items-center pt-10>
  <div flex justify-center items-center p-8 border-2 border-white rounded-md w-100 mr-4>
    <span>業務目的でイベントに参加</span>
  </div>
</div>

::description::

<div flex justify-center items-center pt-24 text-2xl>
  技術を楽しめていない状況
</div>

<!--
技術を手段として割り切ることが悪いと言いたいわけではないですが、
僕にとって当時のこういった状況は健全ではありませんでした。

ただ、幸運だったのが、存在感を出すという業務的な使命があったがゆえに、
この時のv-tokyoは懇親会がなかったのですが、
スタッフに声をかけ、23年のコアスタッフに参加することができました。
-->

---
layout: lm-sub-cover
captureNumber: '02'
---

::title::

<div class="w-[420px] text-center">
  <span>3つの出会い</span>
</div>

<!--
このような状況から3つの出会いを通じて得た僕の変化感を話していきます。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
技術との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full rounded-md border-2 border-white mx-20>
    <div size-45 overflow-hidden rounded-full relative box-contents>
      <img src="/vue-logo.svg" alt="Vue.js" class="w-16 h-auto object-cover absolute top-4 left-[58px]" />
      <img src="/vite-logo.svg" alt="Vite" class="w-16 h-auto object-cover absolute bottom-8 left-[16px]" />
      <img src="/nuxt-logo.svg" alt="Nuxt" class="w-20 h-auto object-cover absolute bottom-5 right-[17px]" />
    </div>
    <div absolute top-25 left-5 size-30>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
    <!-- 技術への矢印 私から技術-->
    <div class="absolute top-29.3 left-55 bg-white rotate-200 h-[5px] w-[40px] rounded-full"></div>
    <div class="absolute top-34 left-30 bg-white rotate-170 h-[5px] w-[140px] rounded-full"></div>
    <div class="absolute top-34 left-56 bg-white rotate-140 h-[5px] w-[40px] rounded-full"></div>
  </div>
</div>

::description::

<div flex justify-center items-center pt-10 text-2xl>
  業務で必要な観点でのみ技術を考える
</div>

<!--
技術を手段だと考えているときは、業務で必要な観点でのみ技術を考える傾向が強かった。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
技術との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full rounded-md border-2 border-white mx-20>
    <div size-45 overflow-hidden rounded-full relative box-contents>
      <img src="/vue-logo.svg" alt="Vue.js" class="w-16 h-auto object-cover absolute top-4 left-[58px]" />
      <img src="/vite-logo.svg" alt="Vite" class="w-16 h-auto object-cover absolute bottom-8 left-[16px]" />
      <img src="/nuxt-logo.svg" alt="Nuxt" class="w-20 h-auto object-cover absolute bottom-5 right-[17px]" />
    </div>
    <div absolute top-25 left-5 size-30>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
    <div absolute top-25 right-3 size-30>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
    </div>
    <!-- 技術への矢印 私から技術-->
    <div class="absolute top-29.3 left-55 bg-white rotate-200 h-[5px] w-[40px] rounded-full"></div>
    <div class="absolute top-34 left-30 bg-white rotate-170 h-[5px] w-[140px] rounded-full"></div>
    <div class="absolute top-34 left-56 bg-white rotate-140 h-[5px] w-[40px] rounded-full"></div>
    <!-- 技術への矢印 他者から技術-->
    <div class="absolute top-29.3 right-55 bg-white rotate-[-200deg] h-[5px] w-[40px] rounded-full"></div>
    <div class="absolute top-34 right-34 bg-white rotate-[-170deg] h-[5px] w-[120px] rounded-full"></div>
    <div class="absolute top-34 right-56 bg-white rotate-[-140deg] h-[5px] w-[40px] rounded-full"></div>
  </div>
</div>

<!--
しかし、Vueコミュニティには他の環境で開発をするエンジニアはもちろん、
コアメンバーも複数在籍するので、作り手の悩みや考えにも触れることができます。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
技術との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full rounded-md border-2 border-white mx-20>
    <div size-45 overflow-hidden rounded-full relative box-contents>
      <img src="/vue-logo.svg" alt="Vue.js" class="w-16 h-auto object-cover absolute top-4 left-[58px]" />
      <img src="/vite-logo.svg" alt="Vite" class="w-16 h-auto object-cover absolute bottom-8 left-[16px]" />
      <img src="/nuxt-logo.svg" alt="Nuxt" class="w-20 h-auto object-cover absolute bottom-5 right-[17px]" />
    </div>
    <div absolute top-25 left-5 size-30>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
    <div absolute top-25 right-3 size-30>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
    </div>
    <!-- 技術への矢印 私から技術-->
    <div class="absolute top-29.3 left-55 bg-white rotate-200 h-[5px] w-[40px] rounded-full"></div>
    <div class="absolute top-34 left-30 bg-white rotate-170 h-[5px] w-[140px] rounded-full"></div>
    <div class="absolute top-34 left-56 bg-white rotate-140 h-[5px] w-[40px] rounded-full"></div>
    <!-- 技術への矢印 他者から技術-->
    <div class="absolute top-29.3 right-55 bg-white rotate-[-200deg] h-[5px] w-[40px] rounded-full"></div>
    <div class="absolute top-34 right-34 bg-white rotate-[-170deg] h-[5px] w-[120px] rounded-full"></div>
    <div class="absolute top-34 right-56 bg-white rotate-[-140deg] h-[5px] w-[40px] rounded-full"></div>
  </div>
</div>

::description::

<div flex justify-center items-center pt-10 text-2xl>
  知っている技術の"知らなかった側面"に出会えた
</div>

<!--
貴重なたくさんの考えを知ることで、知っていると思っていた技術の
知らない側面に出会うことができました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full>
    <!-- 狭い世界を示す円 （破線）-->
    <div size-45 rounded-full border-2 border-white absolute class="bottom-[-40px] left-[325px]" :style="{ border: '3px dashed #ffffff' }"></div>
    <!-- 人型アイコン（自分） -->
    <div absolute size-20 class="bottom-[10px] left-[350px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
  </div>
</div>

::description::

<div flex justify-center items-center pt-18 text-2xl>
  狭い世界で天狗だった自分
</div>

<!--
手前味噌ながら、外部に認知拡大に動く係を担うくらいなので、
フロント領域の開発に関しては、少し、いや完全に天狗になっていました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full>
    <!-- 狭い世界を示す円 （破線）-->
    <div size-45 rounded-full border-2 border-white absolute class="bottom-[-40px] left-[325px]" :style="{ border: '3px dashed #ffffff' }"></div>
    <!-- 広い世界を示す円 （実線）-->
    <div size-80 rounded-full border-2 border-white absolute class="bottom-[-40px] left-[260px]"></div>
    <!-- 人型アイコン（自分） -->
    <div absolute size-20 class="bottom-[10px] left-[350px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
    <div absolute size-20 class="bottom-[180px] left-[440px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
    </div>
  </div>
</div>

<!--
しかし、コアメンバーはもちろん、年下でも自分よりも圧倒的に優秀な人に多数出会い、
完全に天狗の鼻は折られました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い

::content-1::

<div flex justify-center items-center relative h-60 w-full px-2>
  <div flex justify-center items-center relative size-full>
    <!-- 狭い世界を示す円 （破線）-->
    <div size-45 rounded-full border-2 border-white absolute class="bottom-[-40px] left-[325px]" :style="{ border: '3px dashed #ffffff' }"></div>
    <!-- 広い世界を示す円 （実線）-->
    <div size-80 rounded-full border-2 border-white absolute class="bottom-[-40px] left-[260px]"></div>
    <!-- 人型アイコン（自分） -->
    <div absolute size-20 class="bottom-[10px] left-[350px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    </div>
    <div absolute size-20 class="bottom-[180px] left-[440px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path fill="white" d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
    </div>
  </div>
</div>

::description::

<div flex justify-center items-center pt-18 text-2xl>
  広い世界に見る伸びしろにワクワクした
</div>

<!--
でも、同時にそこにあるまだ見ぬ自身の伸びしろにワクワクする自分がいました。
このワクワク感が、
-->

---
layout: lm-columns
columnCount: 2
---

::title::
新しい自分との出会い

::content-1::

<div flex justify-start items-center relative>
  <div h-55 flex items-center flex-col p-8 border-2 border-white rounded-md w-100 ml-4>
    <span text-xl mb-5>[外的刺激]</span>
    <span text-xl mb-2>技術との出会い</span>
    <span text-xl>仲間との出会い</span>
  </div>
  <!-- 矢印代わりの三角図形 -->
  <div absolute h-10 w-8 rotate-270 bg-white class="top-[70px] right-[-34px]" :style="{ clipPath: 'polygon(0px 0px, 100% 0px, 50% 60%)' }"></div>
</div>

::content-2::

<div flex justify-end items-center relative>
  <div h-55 flex items-center flex-col p-8 border-2 border-white rounded-md w-100 mr-4>
    <span text-xl mb-5>[内省]</span>
    <span text-xl mb-13>新しい自分との出会い</span>
    <span text-xl>初心を思い出す</span>
  </div>
  <!-- イコール線 -->
  <div absolute h-1 w-5 rotate-270 bg-white rotate-90 class="top-[130px] right-[213px]"></div>
  <div absolute h-1 w-5 rotate-270 bg-white rotate-90 class="top-[130px] right-[203px]"></div>
</div>

::description::

<div flex justify-center items-center pt-11 text-2xl>
  新しい自分、それは初心との再開
</div>

<!--
純粋に技術が好きでエンジニアになった頃の自分を思い出すことにつながりました。
純粋に技術が好きで、その可能性にワクワクしていた頃の自分を思い出し
-->

---
layout: lm-sub-cover
captureNumber: '03'
---

::title::

<div class="w-[420px] text-center">
  <span>再び技術を“楽しむ”</span>
</div>

<!--
再び技術を楽しめるようになりました。
-->

---
layout: lm-columns
columnCount: 3
---

::title::
新しい自分との出会い - 未来

::content-1::

<div flex justify-start items-center relative pt-3>
  <div flex justify-center items-center rounded-md w-full>
    <div flex justify-center items-center p-8 border-2 border-white rounded-md w-50>
      <span>葛藤する自分</span>
    </div>
  </div>
  <!-- 四則演算のプラス -->  
  <div absolute h-10 w-8 class="top-[41px] right-[-24px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
  </div>
  <div rotate-90 absolute h-10 w-8 class="top-[38px] right-[-22.5px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
  </div>
</div>

::content-2::

<div flex justify-end items-center relative pt-3>
  <div flex justify-center items-center rounded-md w-full>
    <div flex justify-center items-center p-8 border-2 border-white rounded-md w-50>
      <span>初心</span>
    </div>
  </div>
  <!-- 四則演算のイコール -->  
  <div absolute h-10 w-8 class="top-[47px] right-[-24px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
  </div>
  <div absolute h-10 w-8 class="top-[34px] right-[-24px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="white" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
  </div>
</div>

::content-3::

<div flex justify-end items-center pt-3>
  <div flex justify-center items-center rounded-md w-full>
    <div flex justify-center items-center py-8 px-6 border-2 border-white rounded-md w-50>
      <span>未来の新しい自分</span>
    </div>
  </div>
</div>

::description::

<div flex justify-center items-center pt-24 text-2xl>
  再び技術を"楽しむ"新しい自分との出会い
</div>

<!--
初心を思い出しましたが、時間は戻りません。
なので、今は葛藤した経験とコミュニティのおかげで思い出した初心を持って、
再び純粋に技術を楽しむ新しい自分を探している最中です。
-->

---
layout: lm-plain
columnCount: 1
---

<div relative size-full flex flex-col items-center justify-center>
  <!-- 思い出画像 -->
  <MemoryBackground/>
  <!-- マスク -->
  <div z-30 absolute top-0 left-0 size-full bg-black op-70></div>
  <!-- CONTENTS -->
  <div z-30 h-30 w-full flex flex-col items-center justify-center>
    <!-- <div text-4xl font-bold mb-3 ml-1>
      <span><span font-en>CAPTURE.01</span> - 技術を“手段”として扱う</span>
    </div>
    <div text-4xl font-bold ml-1>
      <span><span font-en>CAPTURE.02</span> - 3つの出会い</span>
    </div> -->
  </div>
  <div z-50 flex justify-center items-center relative h-60 w-full rounded-md mx-20>
    <div size-45 overflow-hidden rounded-full relative box-contents>
      <img src="/vue-logo.svg" alt="Vue.js" class="w-16 h-auto object-cover absolute top-4 left-[58px]" />
      <img src="/vite-logo.svg" alt="Vite" class="w-16 h-auto object-cover absolute bottom-8 left-[16px]" />
      <img src="/nuxt-logo.svg" alt="Nuxt" class="w-20 h-auto object-cover absolute bottom-5 right-[17px]" />
    </div>
  </div>
</div>

<!--
打算から始まったコミュニティ活動でしたが、
僕はこの技術を中心としたこの空間で、技術のことから他愛もない話まで
3年間、色々な話をしました。

余談ですが、Vueコミュニティのメンバーは話しかけるといつも親切に対応してくれるし
みんな忙しいのに、飲みに誘ったら快く来てくれます。

僕は酒を飲みながら技術の話をするのがすごく好きです。
そういった、これまでのかけがえのない経験を経て、
-->

---
layout: lm-plain
columnCount: 1
---

<div relative size-full flex flex-col items-center justify-center>
  <!-- 思い出画像 -->
  <MemoryBackground/>
  <!-- マスク -->
  <div z-30 absolute top-0 left-0 size-full bg-black op-70></div>
  <!-- CONTENTS -->
  <div z-30 h-60 w-full flex flex-col items-center justify-center>
    <div text-4xl font-bold mb-3 ml-1>
      <span>魅力的な人達との関わりから</span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span>技術への理解が深まり</span>
    </div>
    <div text-4xl font-bold ml-1>
      <span>新たな可能性に気づくことができた</span>
    </div>
  </div>
  <div z-50 flex justify-center items-center relative h-60 w-full rounded-md mx-20>
    <div size-45 overflow-hidden rounded-full relative box-contents>
      <img src="/vue-logo.svg" alt="Vue.js" class="w-16 h-auto object-cover absolute top-4 left-[58px]" />
      <img src="/vite-logo.svg" alt="Vite" class="w-16 h-auto object-cover absolute bottom-8 left-[16px]" />
      <img src="/nuxt-logo.svg" alt="Nuxt" class="w-20 h-auto object-cover absolute bottom-5 right-[17px]" />
    </div>
  </div>
</div>

<!--
Vue.jsへの理解が深まり、
そして優秀な人達に自身のまだ見ぬ可能性を見つけることができました。

あまり言ってないですけど、実は結構感謝しています。
本当にありがとうございます。
-->

---
layout: lm-plain
---

<div relative size-full flex items-center justify-center>
  <!-- 思い出画像 -->
  <MemoryBackground/>
  <!-- マスク -->
  <div z-30 absolute top-0 left-0 size-full bg-black op-70></div>
  <!-- キーワード -->
  <div z-30 size-full flex flex-col pt-34 pb-10 px-25>
    <div text-4xl font-bold mb-14 relative flex items-end>
      <span font-en>KEYWORD</span>
      <span text-5xl font-bold ml-4 class="pb-[4px]">「出会い」</span>
      <!-- 飾り線 -->
      <span absolute op-80 :style="{ backgroundColor: '#5850a9' }" class="h-[14px] w-[202px] top-[42px] left-[198px]"></span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span>-- 技術との出会い</span>
    </div>
    <div text-4xl font-bold mb-3 ml-1>
      <span>-- 仲間との出会い</span>
    </div>
    <div text-4xl font-bold ml-1>
      <span>-- 新しい自分との出会い</span>
    </div>
  </div>
</div>

<!--
改めて僕はこの3つの出会いをコミュニティ活動から得ました。
-->

---
layout: lm-message
columnCount: 1
---

::title::
今日お話しすること

::message-content::
「 誰かのためが、自分のためになる。」

::description::

<div flex flex-col items-center justify-center mt-10>
  <span>運営スタッフという誰かのためのボランティア活動は</span>
  <span>結果的に自分のためになるという話</span>
</div>

<!--
これが、僕の誰かのためが、自分のためになった経験です。
コミュニティは業務の中では得られない経験を得られる可能性を秘めている可能性があるので、
-->

---
layout: lm-message
columnCount: 1
---

::title::
今日お話しすること

::message-content::
「 誰かのためが、自分のためになる。」

::description::

<div flex flex-col items-center justify-center mt-10>
  <span>興味のある方は</span>
  <span>懇親会で運営に話しかけてみてください</span>
</div>

<!--
興味のある方は懇親会で運営に話しかけてみてください
-->

---

<div h-full w-full relative p-0 flex flex-col>
  <img
    src="/office-01.png"
    alt="background"
    absolute
    top-0
    left-0
    w-full
    h-full
  />
  <div z-10 absolute h-20 w-20 class="top-[-16px] right-[-10px]">
    <img src="/logo.png" alt="logo" />
  </div>
  <div z-10 px-20 py-10 >
    <div text-4xl font-bold w-full text-center mt-10 mb-10>全職種、積極採用中です！</div>
    <div grid grid-cols-2 bg-white rounded-md color-black op80 pl-20 pr-5 py-12>
      <div text-xl flex items-center font-bold>
        <ul>
          <li>サーバーサイドエンジニア</li>
          <li>フロントエンドエンジニア</li>
          <li>SRE</li>
          <li>エンジニアリングマネージャー</li>
          <li>テックリード</li>
          <li>データエンジニア</li>
        </ul>
      </div>
      <div>
        <div text-center mb-8>
          <div text-xl font-bold mb-2 pr-5>技術広報</div>
          <div text-xl font-bold>公式X発信強化中です！</div>
        </div>
        <div flex justify-center>
          <img
            src="/recruitment-qr-code.png"
            alt="recruitment-qr-code"
            w-40
            h-40
          />
        </div>
      </div>
    </div>
  </div>
  <!-- 左下のコピーライト -->
  <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
    <span>© Link and Motivation Group</span>
  </div>
</div>

<!--
さいご、採用は、、いいや。
それよりも、自分語りのような発表を最後まで聞いた頂いた皆様と
このよう場を作っていただいたスポンサー企業の皆様、ありがとうございました。
-->

---

<div h-full w-full relative p-0 flex flex-col>
  <img
    src="/background-cover.png"
    alt="background"
    absolute
    top-0
    left-0
    w-full
    h-full
  />
  <div flex-1 flex items-center justify-center z-10 px-20>
    <LmSplash />
  </div>
</div>

<!--
以上、ありがとうございました。
-->
