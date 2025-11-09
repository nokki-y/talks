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
duration: 35min
# color schema: light or dark
colorSchema: light
# custom css
css: unocss
---

<LmSplash />

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
TODO:
-->

---
layout: lm-base
---

<div grid h-full class="grid-cols-[1fr_320px]">
  <div pl-20 pt-30>
    <div mb-10>
      <div text-3xl >鵜木 義秀 <span font-en>(Yoshihide Unoki)</span></div>
      <div op50 tracking-wide text-xl mt1>nokki-y</div>
    </div>
    <div>
      <div>
        株式会社リンクアンドモチベーション<br><span font-en>SRE</span>・イネーブリンググループ<br>
      </div>
    </div>
  </div>
  <div flex justify-center pt-30>
    <div relative>
      <!-- 影 -->
      <div absolute rounded-full bg-white op30  w-20 h-20 blur-sm class="top-[100px] left-[100px]"></div>
      <div overflow-hidden rounded-full w-40 h-40 relative>
        <img src="/sns.jpg" alt="icon" />
      </div>
    </div>
  </div>
</div>

<!--
TODO: 自己紹介
-->

---
layout: lm-base
---

TODO: アイスブレイク

「技術の話はしません、運営の話をします。」という次の `今日話すこと`スライドにつながるアイスブレイクをする。

---
layout: lm-base
---

今日話すこと（期待値調整）

「技術の話はしません、運営の話をします」

丸3年、運営スタッフをやった結果、得られたものをお話するので
<br>
<br>

#### 運営を経験したことがない人は

- コミュニティに所属することの良さを知ってください

#### 既にコミュニティメンバーの方は

- 自分たちの影響力を再認識してこれからの活動に活かしてほしいです

---
layout: lm-agenda
---

<div grid grid-cols-2 gap-10>
  <div grid gap-4 items-center relative class="grid-cols-[4rem_1fr] grid-rows-[1fr_4px]">
    <div font-en text-5xl text-center :style="{ transform: 'scale(1, 1.3)' }">
      <span font-bold text-gradient>1</span>
    </div>
    <div pl-2 flex-1 class="pt-[4px]">
      <div mb-1 font-bold>コアスタッフってなにするの？</div>
      <div op50 text-xs font-500 class="pl-[1px]">3年間の活動を例に</div>
    </div>
    <!-- 線 -->
    <div background-gradient size-full></div>
    <!-- 線 -->
    <div w-full op80 class="h-[0.5px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    <!-- ピリオド -->
    <div absolute flex justify-between class="w-[4px] h-auto bottom-[-1px] right-[6px]">
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    </div>
  </div>
  <div grid gap-4 items-center relative class="grid-cols-[4rem_1fr] grid-rows-[1fr_4px]">
    <div font-en text-5xl text-center :style="{ transform: 'scale(1, 1.3)' }">
      <span font-bold text-gradient>2</span>
    </div>
    <div pl-2 flex-1 class="pt-[4px]">
      <div mb-1 font-bold>なにか良いことあるの？</div>
      <div op50 text-xs font-500 class="pl-[1px]">活動をしていて得られたことを例に</div>
    </div>
    <!-- 線 -->
    <div background-gradient size-full></div>
    <!-- 線 -->
    <div w-full op80 class="h-[0.5px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    <!-- ピリオド -->
    <div absolute flex justify-between class="w-[4px] h-auto bottom-[-1px] right-[6px]">
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    </div>
  </div>
  <div grid gap-4 items-center relative class="grid-cols-[4rem_1fr] grid-rows-[1fr_4px]">
    <div font-en text-5xl text-center :style="{ transform: 'scale(1, 1.3)' }">
      <span font-bold text-gradient>3</span>
    </div>
    <div pl-2 flex-1 class="pt-[4px]" >
      <div mb-1 font-bold>忙しくても大丈夫？</div>
      <div op50 text-xs font-500 class="pl-[1px]">忙しかった2025年の出来事を例に</div>
    </div>
    <!-- 線 -->
    <div background-gradient size-full></div>
    <!-- 線 -->
    <div w-full op80 class="h-[0.5px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    <!-- ピリオド -->
    <div absolute flex justify-between class="w-[4px] h-auto bottom-[-1px] right-[6px]">
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    </div>
  </div>
  <div grid gap-4 items-center relative class="grid-cols-[4rem_1fr] grid-rows-[1fr_4px]">
    <div font-en text-5xl text-center :style="{ transform: 'scale(1, 1.3)' }">
      <span font-bold text-gradient>4</span>
    </div>
    <div pl-2 flex-1 class="pt-[4px]">
      <div mb-1 font-bold>3年間やってみてよかったの？</div>
      <div op50 text-xs font-500 class="pl-[1px]">3年間の活動を簡単にお話しますを例に</div>
    </div>
    <!-- 線 -->
    <div background-gradient size-full></div>
    <!-- 線 -->
    <div w-full op80 class="h-[0.5px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    <!-- ピリオド -->
    <div absolute flex justify-between class="w-[4px] h-auto bottom-[-1px] right-[6px]">
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
      <div rotate-38 class="w-[0.8px] h-[8px] blur-[0.25px]" :style="{ backgroundColor: 'var(--box-contents-border-color)' }"></div>
    </div>
  </div>
</div>

---
layout: lm-sub-cover
partNumber: '1'
---

::title::
コアスタッフってなにするの？

::sub-title::
3年間の活動を例に

::content::

<!-- 3年間の活動の一覧を時系列のリスト形式で表示 -->
<History />

<!--
aaa
-->

---
layout: lm-sub-cover
partNumber: '1'
---

::title::
打算的な理由から始まったコミュニティ活動

::sub-title::
Not contribution, just work.

::content::

<!-- 3年間の活動の一覧を時系列のリスト形式で表示 -->
<History :active="0" />

<!--
aaa
-->

---
layout: lm-base
---

<!-- 白線 -->
<!-- <div absolute top-0 h-full bg-white class="w-[12px] left-[50px]"></div> -->

<!-- 影 -->
<!-- <div absolute top-0 h-full bg-white op20 class="w-[12px] left-[70px]"></div> -->

<!-- ポイント -->
<!-- <div absolute rounded-full bg-white class="top-[270px] left-[41px] w-[24px] h-[10px]"></div> -->

<!-- タイトル -->
<div class="h1-container">
  <h1>打算的な理由から始まったコミュニティ活動</h1>
</div>

<!-- v-tokyo #16　画像 -->
<div class="image-container top-[180px] right-[0px] w-[500px]">
  <img src="/v-tokyo-16.png" alt="v-tokyo #16" />
  <!-- 色彩が強いのでさりげない白マスク -->
  <div absolute top-0 left-0 w-full h-full bg-white op15></div>
</div>

<div absolute text-xs class="top-[0px] right-[20px]" >
  <span> ↓ 打算と本音のあいだで生まれた投稿たち。</span>
</div>

<!-- 詳細 -->
<div class="detail-container top-[80px] left-[20px] w-[420px]">
  <!-- <div class="detail-title bottom-[-40px] left-[-40px]">「外部へのプライオリティを高める」という目的で <span font-en>`v-tokyo Meetup #16`</span></div> -->
  <div class="detail-content">
    <div>「外部へのプライオリティを高める」</div>
    <div mb-4>という目的で参加した <a href="https://vuejs-meetup.connpass.com/event/271298/" target="_blank" font-en>`v-tokyo Meetup #16`</a> 。</div>
    <div>イベント終了後、運営スタッフに相談。</div>
    <div>後日、正式にコアスタッフに参加することに。</div>
  </div>
</div>

<!-- v-tokyo #16　画像-x 1 -->
<div class="image-container bottom-[278px] right-[25px] w-[280px]">
  <img src="/v-tokyo-16-x-1.png" alt="v-tokyo #16" />
  <!-- 色彩が強いのでさりげない白マスク -->
  <div absolute top-0 left-0 w-full h-full bg-white op10></div>
</div>

<!-- v-tokyo #16　画像-x 2 -->
<div class="image-container bottom-[176px] right-[14px] w-[280px]">
  <img src="/v-tokyo-16-x-2.png" alt="v-tokyo #16" />
  <!-- 色彩が強いのでさりげない白マスク -->
  <div absolute top-0 left-0 w-full h-full bg-white op10></div>
</div>

<!-- v-tokyo #16　画像-x 3 -->
<div class="image-container bottom-[83px] right-[40px] w-[280px]">
  <img src="/v-tokyo-16-x-3.png" alt="v-tokyo #16" />
  <!-- 色彩が強いのでさりげない白マスク -->
  <div absolute top-0 left-0 w-full h-full bg-white op10></div>
</div>

<!-- v-tokyo #16　画像-x 4 -->
<div class="image-container bottom-[-10px] right-[10px] w-[280px]">
  <img src="/v-tokyo-16-x-4.png" alt="v-tokyo #16" />
  <!-- 色彩が強いのでさりげない白マスク -->
  <div absolute top-0 left-0 w-full h-full bg-white op10></div>
</div>

<!-- サブタイトル -->
<div class="sub-title-container bottom-[30px] right-[260px]">
  <span font-en class="sub-title">"Not contribution, just work."</span>
</div>

<!--
まずは、運営スタッフ3年間での出来事を簡単に話します。
-->

---
layout: lm-base
---

::title::
運営スタッフ 3年間での出来事

::content::

<!-- 時系列棒 -->
<!-- <div bg-black absolute class="w-[662px] h-[10px] top-[100px] left-[100px]"></div> -->

<!-- <Bar
  absolute
  class="top-[100px] left-[420px]"
  height="60px" />

<ArrowLabel
  class="top-[80px] left-[320px]"
  absolute
  fontSize="1.5rem"
  borderWidth="4">

  <div>運営スタッフになったきっかけ</div>
</ArrowLabel> -->
<!-- 1. 2023年1月: 開発組織のプレゼンス向上という打算的な目的で外部コミュニティへの参加を開始
   - Frontend領域を専門としていたので、最も理解のあるVue.jsコミュニティに参加することにした
2. 2023年2月: [Vue.js v-tokyo Meetup #16](https://vuejs-meetup.connpass.com/event/271298/) に参加
   - 懇親会で当時の運営メンバーに声をかけて頂き、運営スタッフになる -->

<!--
そもそも、僕が運営に入ったきっかけは結構打算的でした。
-->

---
layout: lm-base
---

::title::
運営スタッフ 3年間での出来事

::content::
時系列（時系列に沿って話すので全体感を示す）

→　図にする想定

1. 2023年3月: Vue Fes Japan 2023 コアフタッフに参画
   - 募集は終わっていたが企画運営チームの人が足りていなかったこともあり、このタイミングで参画
   - 企画運営チームのリーダーとなる
1. 2023年10月: Vue Fes Japan 2023 のスポンサー枠で登壇
   - コアスタッフをやったことと、登壇できたことの関係性は後述
1. 2024年2月: Vue Fes Japan 2024 のコアスタッフに再び参画
   - 前回のコアスタッフであったこともあり、再び参画
   - 引き続き企画運営チームのリーダーを担う
1. 2025年2月: Vue Fes Japan 2025 のコアスタッフに参画
   - 業務が忙しく企画運営チームのリーダーを引き継ぐ

<!--
僕はコロナ禍が開ける頃の2023年2月にv-tokyoに参加しました。
そこで、今年は当時のスタッフメンバーに声をかけていただいて、スタッフに参画しました。

例年1-2月頃にスタッフの募集をします。
このときも例外ではなく、既にスタッフ募集は終わっていたのですが、企画運営チームの人数が足りていなかったこともあり、途中から参画する運びとなりました。

そして後述しますが、この年2023年のVue Fesでスポンサー枠で登壇します。


また、運営は複数のチーム単位で動いているのですが、2025年は業務が忙しくリーダーを引き継ぐなどして事なきを得ました。
-->

---
layout: lm-base
---

時系列のサマリ（きっかけから今まで）

→　先に出した時系列の図を再掲してまとめにする想定

- 打算的なきっかけから活動開始
- 無計画にチームのリーダーとなる
- 業務が忙し時期もあったが、周りに支えられて3年間やってきた

---
layout: lm-base
---

コミュニティに入ったことで得たこと

<!--
このような3年間の中で得たことを先にお伝えします。
-->

---
layout: lm-base
---

✅️　技術へのモチベーションアップ

✅️　社内での技術発信量アップ

✅️　Vue Fes Japan 2023に登壇

---
layout: lm-base
---

✅️　技術へのモチベーションアップ

なぜ？　→　Vue FesコミュニティにはVuejs関連のコアメンバーが多く集まっている

<!--
コロナ禍が開けた時期ということもあり、オフラインで集まる機会があると毎回飲みに行った。

他イベントの運営には参加したことがありませんが、Vue運営にも飲みに行くのが好きなメンバーがちゃんといます。

Vueで集まったメンバーなので、だいたいいつもVue.jsの話が中心です。
社内ではフロント開発経験が豊富な方の僕ですが、このコミュニティにおいては知らないことが多い側の人間なので、いつも学びが多い。

ただ、圧倒的にできる年下に度々遭遇すると、たまに凹みます。
それでも、社外の人間と技術の話する機会が多いと、新しい情報が入るし、シンプルに超楽しいので技術的な意欲が上がります。

Vue Fesに参加した後の高揚感みたいなものを、僕は毎回味わってました。
-->

---
layout: lm-base
---

✅️　社内での技術発信量アップ

なぜ？　→　モチベーションが上がると技術的な話をしたくなる

<!--
高揚感を抱えたまま仕事に戻ると、社内でもつい
「これおもしろい」「ここ変わりそうだね」って話が増える。
雑談や定例の小ネタが増えて、共有会のネタも尽きない。
その結果、発信の「量」も「質」もじわじわ上がった。

具体的には：
- 海外カンファレンスを一緒に観て、気づきをサクッとメモ
- Vue.jsエコシステムのリリース情報の背景（誰のどんな課題を解くか）を話す
- 触ったことないライブラリを小さく試して、社内LTで共有
- 社内ブログ/Confluenceに短文メモ（週1の小ネタでもOK）
-->

---
layout: lm-base
---

✅️　Vue Fes Japan 2023に登壇

なぜ？　→　Vue.jsコミュニティに向き合う姿勢を汲み取ってもらえた

<!--
きっかけ：
- 企画〜当日運営でのやり取りを通じて、継続的な姿勢と責任感を見てもらえた
- 社内外に活動ログを出し続けた（X / 社内ブログ / 小さな登壇）
- 「まず出して磨く」を回していたので、声をかけやすかった

準備で得た学び：
- 骨子→レビュー→磨き込み、のループを何周も回す
- 伝わる構成（Why→What→How→So what）を意識する
- リハ複数回・タイムキープ徹底・デモは録画保険を用意

結果：
- 次の機会につながるお声がけをいただけた
- 自分の基準が一段上がった実感があった

このあと：
- 「社内での技術発信が増えた（詳細）」→「登壇機会の詳細」へと続きます
-->

---
layout: lm-base
---

得たことのまとめ

- 技術の楽しさがブーストされた
- 社内発信が増え、チームの知が貯まった
- 外の基準に触れ、視座が上がった
- チャンスは行動量に比例する、を体感した

<!--
4つを一言ずつ：
- 楽しさブースト → 自発的に手が動くようになった
- 社内発信 → 知の貯金がたまって、参照できる資産が増えた
- 外の基準 → 目線が上がると、やるべきことの解像度も上がる
- 行動量とチャンス → 露出が増えるほど、声をかけてもらえる確率も上がる
このあと：「とは言え、忙しかった」に続けて、リアルな運用面の話に寄せます。
-->

---
layout: lm-base
---

とは言え、忙しかった

- でも大丈夫！
- 「全然手伝ってくれない」と冗談を言われつつ、変わらず迎え入れてくれる
- 信頼できる人にリーダーを引き継いだ（任せる勇気）

<!--
忙しい時期の付き合い方：
- やれる範囲でタスクを持つ、非同期中心で無理しない
- 状況はオープンに共有。透明性があれば、周りも動きやすい
- 「冗談でイジる/受け止める」空気感があって、心理的安全性が高い
引き継ぎ：
- 役割を人に固定しない。仕組み・手順・ドキュメントに落とす
- 定例/タスクボード/連絡先を整えて、自然に回る状態を作る
このあと：「温かいコミュニティ」の具体例につなぎます。
-->

---
layout: lm-base
---

Vue Fes Japanコミュニティは温かい

- 初参加でも溶け込みやすい空気
- 失敗も「ナイスチャレンジ」で受け止めてくれる
- 貢献の形はいろいろ、どれも尊い

<!--
具体例：
- 初参加でも、XやSlackで気軽に拾ってもらえる/紹介してもらえる
- うまくいかなかったことも、次に生かす前提で受け止めてもらえる
- 企画・受付・翻訳・ノベルティ・撮影・レポート・発信…関わり方は無限
次へ：「3年間でわかった性格」を箇条書きで整理します。
-->

---
layout: lm-base
---

3年間やってわかった、Vue Fes Japanはこんなコミュニティ

- ウェルカムムード
- 理解がある（事情に寄り添う）
- コミュニケーション好き（飲みも好きな人が多い）

<!--
補足：
- ウェルカム → 新しい人に役割を提案し、無理なく入れるよう伴走
- 理解がある → 仕事/家庭の都合に柔軟。時期ごとの関わり方を尊重
- コミュニケーション好き → 日頃から会話が多いので、認識ズレが溜まりにくい（飲みは任意）
次へ：「心境の変化」に橋渡しします。
-->

---
layout: lm-base
---

コミュニティに入ったことでの心境の変化

- Vue.jsとの向き合い方の変化
  - ただの「使う側」から、コミュニティの一員として良い循環を作る側へ
- 技術との向き合い方の変化
  - コードが楽しくて始めた気持ちを思い出す。ビジネスライク一辺倒から脱却して、また強くなれた

<!--
Vue.jsとの向き合い：
- エコシステムのリリース背景まで追い、社内外にわかりやすく伝える役回りへ
技術との向き合い：
- 小さく作る→共有する→フィードバックをもらう、の循環が戻った
- 伝える力/巻き込む力が伸び、結果的にアウトプットが増えた
次へ：最後のメッセージ（参加の一歩）へ。
-->

---
layout: lm-base
---

最後に

- コミュニティ参加は個人としても得られるものが多い
- やったほうがいい理由が思いつかないなら、一度飛び込んでみて
- 迷ったら、まずはイベントに来て声をかけてください

<!--
ファーストステップ案：
- 次回イベントに参加する / Xで運営をフォローする
- Discord/Slackに入ってみる / 当日ボランティアに手を挙げる
- 「一緒にやりたいです」と一言伝えるだけでも十分
締め：ご清聴ありがとうございました！ 会場/オンラインでも気軽に話しかけてください。
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
            src="//recruitment-qr-code.png"
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
