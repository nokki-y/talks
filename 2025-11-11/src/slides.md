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
  <div z-30 size-full flex flex-col justify-center pb-10 px-25>
    <div text-4xl font-bold mb-14 relative flex items-end>
      <span font-en>KEYWORD</span>
      <span text-5xl font-bold ml-4 class="pb-[4px]">「出会い」</span>
      <!-- 飾り線 -->
      <span absolute op-80 :style="{ backgroundColor: '#5850a9' }" class="h-[14px] w-[202px] top-[42px] left-[198px]"></span>
    </div>
    <div text-4xl font-bold mb-3>
      <span>--  技術との出会い</span>
    </div>
    <div text-4xl font-bold mb-3>
      <span>-- 仲間との出会い</span>
    </div>
    <div text-4xl font-bold>
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
  <!-- キーワード -->
  <div z-30 size-full flex flex-col justify-center pb-10 px-25>
    <div text-4xl font-bold mb-14 relative flex items-end>
      <span font-en>KEYWORD</span>
      <span text-5xl font-bold ml-4 class="pb-[4px]">「出会い」</span>
      <!-- 飾り線 -->
      <span absolute op-80 :style="{ backgroundColor: '#5850a9' }" class="h-[14px] w-[202px] top-[42px] left-[198px]"></span>
    </div>
    <div text-4xl font-bold mb-3>
      <span>--  技術との出会い</span>
    </div>
    <div text-4xl font-bold mb-3>
      <span>-- 仲間との出会い</span>
    </div>
    <div text-4xl font-bold>
      <span>-- 新しい自分との出会い</span>
    </div>
  </div>
</div>

<!--
本日はこちらの構成でお話します。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
ビジネスとエンジニアリングの狭間

::sub-title::
コストパフォーマンスを追う日々の中で、忘れかけていた気持ち

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div grid grid-cols-2 gap-12 items-center>
    <div>
      <div box-contents py-6 px-8 rounded-lg mb-6>
        <div text-xl font-bold mb-4>業務での現実</div>
        <ul text-base space-y-2>
          <li>効率や納期を優先</li>
          <li>コストパフォーマンスを意識</li>
          <li>技術を<span font-bold>"手段"</span>として扱う</li>
        </ul>
      </div>
    </div>
    <div>
      <div box-contents py-6 px-8 rounded-lg border-2 border-red-400>
        <div text-xl font-bold mb-4 text-red-400>忘れかけていた気持ち</div>
        <div text-base>
          <p>"技術が好き"</p>
          <p>という気持ちを</p>
          <p>置き去りにしていた</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
それでは、その始まりの話からお話しします。

業務で開発をしていると、どうしても効率や納期を意識します。
コストパフォーマンスを無視することはできません。
技術を"目的"ではなく"手段"として使うことが増えていきました。
気づけば"技術が好き"という気持ちを置き去りにしていたんです。

そんな中、あるきっかけがありました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
きっかけ

::sub-title::
v-tokyo #16 ― 打算的な目的から始まったコミュニティ参加

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div grid grid-cols-2 gap-12 items-center>
    <div>
      <div rounded-lg overflow-hidden>
        <img src="/v-tokyo-16.png" alt="v-tokyo #16" />
      </div>
    </div>
    <div>
      <div box-contents py-6 px-8 rounded-lg mb-6>
        <div text-xl font-bold mb-4>参加の目的</div>
        <div text-base space-y-3>
          <p>開発組織の認知を広げる</p>
          <p font-bold text-gradient>打算的な目的のまま<br>コミュニティに参加</p>
        </div>
      </div>
      <div text-sm op70 mt-8>
        <p>※まだ「出会い」には至っていない</p>
        <p>単なる「きっかけ」</p>
      </div>
    </div>
  </div>
</div>

<!--
そのきっかけというのが、こちらです。

私が最初にVue.jsコミュニティに関わったのは、v-tokyo #16というイベントでした。
目的は正直、業務的でした。開発組織の認知を広げるための参加です。
懇親会はなかったのですが、実は真面目な性格なので、業務遂行のために運営にアプローチしてそのまま、
打算的な目的でコミュニティに参加しました。

そこで、最初の出会いがありました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
技術との出会い

::sub-title::
知っている技術の"知らなかった側面"に出会えた

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div mb-12>
    <div box-contents py-6 px-8 rounded-lg>
      <div text-xl font-bold mb-4>業務では...</div>
      <p text-base>Vue.jsを使っていたが、要件に必要な範囲のみの理解</p>
    </div>
  </div>

  <div>
    <div box-contents py-8 px-10 rounded-lg border-2 border-green-400>
      <div text-2xl font-bold mb-6 text-green-400 text-center>コミュニティで得たもの</div>
      <div grid grid-cols-2 gap-8>
        <div>
          <div text-lg font-bold mb-3>深い理解</div>
          <ul text-sm space-y-2>
            <li>Vuexの設計思想</li>
            <li>Composition APIの意図</li>
            <li>API誕生の背景</li>
          </ul>
        </div>
        <div>
          <div text-lg font-bold mb-3>視点の変化</div>
          <p text-sm>「使う」から「読み解く」へ</p>
          <p text-sm mt-4 font-bold text-gradient>ここにいれば常に<br>新しい視点を得られる</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
その最初の出会いが、技術との出会いでした。

Vue.jsコミュニティに入る前から、私は業務でVue.jsを使っていました。
ただ、コミュニティに入って初めて「自分が知っていると思っていた技術の、知らなかった側面」に出会いました。
Vuexの設計思想やComposition APIの背景など、普段の業務では聞けない話を聞けたんです。
ここにいれば常に新しい視点を得られると確信しました。

そして、技術だけでなく、仲間との出会いもありました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い①

::sub-title::
経験豊富な人たちが、視野を広げてくれた

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div grid grid-cols-2 gap-12 items-center>
    <div>
      <div box-contents py-6 px-8 rounded-lg mb-6>
        <div text-lg font-bold mb-4>コミュニティに入る前</div>
        <div text-base space-y-2>
          <p>2018年から業務でプログラム</p>
          <p>今年で8年目のミドルエンジニア</p>
          <p>社内ではVue.jsの専門家</p>
          <p font-bold text-red-400>少し天狗になっていた</p>
        </div>
      </div>
    </div>
    <div>
      <div box-contents py-6 px-8 rounded-lg border-2 border-blue-400>
        <div text-lg font-bold mb-4 text-blue-400>コミュニティで気づいたこと</div>
        <div text-base space-y-3>
          <p>コアメンバーも多数在籍</p>
          <p>自分より深い知識を持つ人が多数</p>
          <p font-bold text-gradient mt-4>天狗気味だった自己評価は<br>すぐに改めざるを得なかった</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
仲間との出会い、1つ目です。

私は2018年頃から業務でプログラムを書くようになり、今年で8年目です。
社内では自分がVue.jsの専門家だと、正直少し天狗になっていました。
でもVue.jsコミュニティにはコアメンバーも多数在籍していて、
天狗気味だった自己評価はすぐに改めざるを得ませんでした。
話を聞くたびに「そういう視点もあるのか」と気づかされました。

そして、また別の刺激もありました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い②

::sub-title::
若くても優秀な人たちから受けた刺激

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div box-contents py-8 px-10 rounded-lg>
    <div text-xl font-bold mb-6 text-center>自分より若くても知識も経験も豊富な人が多かった</div>

    <div grid grid-cols-3 gap-8 mb-8>
      <div text-center>
        <div text-4xl mb-2>😰</div>
        <div text-sm>最初は落ち込んだ</div>
      </div>
      <div text-center>
        <div text-4xl mb-2>💭</div>
        <div text-sm>でも技術が好き</div>
      </div>
      <div text-center>
        <div text-4xl mb-2>😊</div>
        <div text-sm>楽しい時間だった</div>
      </div>
    </div>

    <div text-center>
      <p text-lg font-bold text-gradient>落ち込み以上に<br>技術の話をする時間がとても楽しかった</p>
    </div>

  </div>
</div>

<!--
別の刺激、それは若手エンジニアたちとの出会いでした。

コミュニティには、自分より若くても驚くほど優秀な人がたくさんいます。
私よりも社会人歴が何年も短いエンジニアも少なくありませんでした。
最初は正直、落ち込む瞬間もありました。実際に落ち込みました。
でも私もエンジニアです。技術がとても好きなので、
落ち込み以上に技術の話をする時間がとても楽しかったです。

そうなんです。技術の話をする時間が、とても楽しかったんです。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
仲間との出会い③

::sub-title::
技術を純粋に語れる仲間との時間

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div box-contents py-8 px-10 rounded-lg mb-8>
    <div text-lg font-bold mb-4>業務での制約</div>
    <div text-base space-y-2>
      <p>コストパフォーマンスを無視できない</p>
      <p>純粋に技術の話を楽しめない時間もある</p>
      <p op70 text-sm mt-4>※弊社は技術愛を大事にしているが...</p>
    </div>
  </div>

  <div box-contents py-8 px-10 rounded-lg border-2 border-purple-400>
    <div text-xl font-bold mb-4 text-purple-400 text-center>コミュニティでの時間</div>
    <div text-base text-center space-y-3>
      <p>Vue.jsの新機能、新しいライブラリ</p>
      <p>コミュニティの将来について</p>
      <p font-bold text-gradient mt-6>ビジネスとは切り離されたところで行う<br>技術の話は、とても楽しい時間</p>
    </div>
  </div>
</div>

<!--
なぜ技術の話をする時間が楽しいのか。それには理由があります。

業務においては、どうしてもコストパフォーマンスを無視することはできません。
そういった前提があるが故に、純粋に技術の話を楽しめない時間もあります。
でもコミュニティでは、技術の思想や美しさについて語り合えるんです。
Vue.jsの新機能、新しいライブラリ、コミュニティの将来。
ビジネスとは切り離されたところで行う技術の話は、とても楽しい時間でした。

こうして、技術との出会い、そして仲間との出会いを経て、特別なつながりが生まれました。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
そして、特別なつながりが生まれた

::sub-title::
技術と仲間、2つの出会いがもたらしたもの

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div box-contents py-10 px-12 rounded-lg>
    <div text-2xl font-bold mb-8 text-center text-gradient>2つの出会いが重なり合って</div>

    <div grid grid-cols-2 gap-12 mb-8>
      <div text-center>
        <div text-5xl mb-3>🔧</div>
        <div text-lg font-bold mb-2>技術との出会い</div>
        <div text-sm op70>Vue.jsへの理解が深まった</div>
      </div>
      <div text-center>
        <div text-5xl mb-3>👥</div>
        <div text-lg font-bold mb-2>仲間との出会い</div>
        <div text-sm op70>経験豊富な人や若手<br>純粋に技術を語れる仲間</div>
      </div>
    </div>

    <div text-center text-xl font-bold>
      <p>↓</p>
      <p text-2xl text-gradient mt-4>特別なつながりが生まれた</p>
    </div>

  </div>

  <div text-center mt-8 op70>
    <p>そして、この2つの出会いが、実は3つ目の出会いを生むことになります。</p>
    <p mt-2>その前に、少しだけ私の過去の話をさせてください。</p>
  </div>
</div>

<!--
技術との出会い、そして仲間との出会い。この2つの出会いを振り返ってみます。

技術との出会いで、Vue.jsへの理解が深まりました。
仲間との出会いで、経験豊富な人や若手、純粋に技術を語れる仲間に出会えました。
この2つの出会いが重なり合って、特別なつながりが生まれたんです。

そして、この2つの出会いが、実は3つ目の出会いを生むことになります。
その前に、少しだけ私の過去の話をさせてください。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
営業からエンジニアへ

::sub-title::
書店でPythonの本を手に取ったところから始まった

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div box-contents py-10 px-12 rounded-lg>
    <div grid grid-cols-4 gap-8 items-center>
      <div text-center>
        <div text-4xl mb-3>🏢</div>
        <div text-base font-bold>新卒で営業</div>
      </div>
      <div text-center>
        <div text-4xl mb-3>📚</div>
        <div text-base font-bold>書店で<br>Python本を<br>手に取る</div>
      </div>
      <div text-center>
        <div text-4xl mb-3>💻</div>
        <div text-base font-bold>プログラミングが<br>すごく楽しい</div>
      </div>
      <div text-center>
        <div text-4xl mb-3>👨‍💻</div>
        <div text-base font-bold>第二新卒で<br>エンジニアへ</div>
      </div>
    </div>

    <div text-center mt-12>
      <div text-2xl font-bold text-gradient>
        この「プログラミングが楽しい」という気持ちが
      </div>
      <div text-3xl font-bold text-gradient mt-4>
        私の初心
      </div>
    </div>

  </div>
</div>

<!--
では、私の過去の話です。

実は、私は新卒で営業をやっていました。
ある日、書店でPythonの本を手に取ったところから、私のエンジニア人生は始まっています。
家に帰ってコードを書き始めたところ、プログラミングがすごく楽しいと感じて、
第二新卒でエンジニアになりました。
この「プログラミングが楽しい」という気持ちが、私の初心でした。

でも、8年もエンジニアをやっていると...
-->

---
layout: lm-columns
columnCount: 1
---

::title::
初心を思い出した

::sub-title::
3年間の経験を通じて、忘れかけていた気持ちを取り戻した

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div grid grid-cols-2 gap-12 mb-10>
    <div box-contents py-6 px-8 rounded-lg>
      <div text-lg font-bold mb-4>8年間で...</div>
      <div text-base space-y-2>
        <p>技術を手段として割り切る</p>
        <p>ビジネスを優先せざるを得ない</p>
        <p font-bold text-red-400 mt-4>技術が好きだという気持ちを<br>忘れがちになる</p>
      </div>
    </div>
    <div box-contents py-6 px-8 rounded-lg border-2 border-green-400>
      <div text-lg font-bold mb-4 text-green-400>3年間で...</div>
      <div text-base space-y-2>
        <p>技術を語り合い刺激を受ける</p>
        <p>純粋に技術を楽しむ</p>
        <p font-bold text-gradient mt-4>初心を思い出すことができた</p>
      </div>
    </div>
  </div>

  <div box-contents py-8 px-10 rounded-lg text-center>
    <div text-2xl font-bold mb-4 text-gradient>厳密に言うと</div>
    <div text-xl>
      <p>新しい自分との出会い、ではなく</p>
      <p font-bold text-2xl mt-4 text-gradient>「初心を思い出した」</p>
      <p mt-2>という表現の方が正しい</p>
    </div>
  </div>
</div>

<!--
そう、8年もエンジニアをやっていると...

8年もエンジニアをやっていると、技術を手段として割り切る、
ビジネスを優先せざる得ない場面に何度も出会います。
そういった場面が増えると、技術が好きだという気持ちを忘れがちになります。

でも、Vue.jsコミュニティで過ごした3年間で、少しずつその初心を取り戻していきました。
コードを書くのが楽しくてエンジニアになった、その気持ちを思い出すことができたんです。

厳密に言うと、新しい自分との出会いではありません。
初心を思い出したという表現の方が正しいです。

ここまでお話しした、技術・仲間・自分という3つの出会いを、改めてまとめます。
-->

---
layout: lm-columns
columnCount: 1
---

::title::
まとめ

::sub-title::
3つの出会いがくれた変化

::content-1::

<div flex flex-col justify-center h-full px-20>
  <div box-contents py-10 px-12 rounded-lg>
    <div grid grid-cols-3 gap-8 mb-12>
      <div text-center>
        <div text-5xl mb-4>🔧</div>
        <div text-lg font-bold mb-2>技術との出会い</div>
        <div text-sm op70>知らなかった側面<br>深い理解</div>
      </div>
      <div text-center>
        <div text-5xl mb-4>👥</div>
        <div text-lg font-bold mb-2>仲間との出会い</div>
        <div text-sm op70>視野を広げる<br>刺激と楽しさ</div>
      </div>
      <div text-center>
        <div text-5xl mb-4>💡</div>
        <div text-lg font-bold mb-2>自分との出会い</div>
        <div text-sm op70>初心を思い出した</div>
      </div>
    </div>

    <div border-t-2 border-white pt-8>
      <div text-center space-y-4>
        <p text-xl>Vue.jsを"使う側"から"育てる側"へ</p>
        <p text-2xl font-bold text-gradient>技術を"手段"から"原動力"へ</p>
      </div>
    </div>

  </div>
</div>

<!--
では、改めて3つの出会いをまとめます。

Vue.jsコミュニティに入って、Vue.jsとの関係が変わりました。
ただ使う立場から、一緒に育てる一員になれた。
そして、技術を"手段"ではなく"原動力"として感じられるようになりました。

最後に、皆さんにお伝えしたいメッセージがあります。
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
そのメッセージとは、「誰かのためが、自分のためになる」ということです。

コミュニティに所属するということは、どこかボランティアであること。
自身の労力をただ提供すると考える人もいるかもしれません。
でも、そこから得られる個人としての良い変化というものもあります。
私の場合、それが今日お話しした3つの出会い――技術、仲間、そして新しい自分でした。

少し真面目な話をしすぎました。
Vue.jsコミュニティにはレベルの高いエンジニアがたくさんいます。
私のように少し熱い思いを持った人もいます。
でも「自分には少し違うかもしれない」と感じてもらう必要はありません。

途中に話したように、私がVue.jsコミュニティに入ったきっかけは、打算的なものでした。
それが様々な出会いを経て、結果的にこうなることができました。

なので少しでも興味のある方は、この後、懇親会もありますので、
たくさん参加している運営メンバーに話しかけてみてください。
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
