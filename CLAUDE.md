@./.claude/local-instructions.md

- このリポジトリは、Slidevを使用してプレゼンテーションを作成するためのリポジトリです。
  - Slidevの公式ドキュメントはこちらです: https://sli.dev/guide/why
- スタイリングには、UnoCSSを使用しています。
  - UnoCSSの公式ドキュメントはこちらです: https://unocss.dev/
  - Slidevのカスタム設定: https://sli.dev/custom/config-unocss
- コードフォーマッターには、Prettierを使用しています。
  - Prettierの公式ドキュメント: https://prettier.io/docs/en/
  - 設定ファイル: `.prettierrc`
  - 自動フォーマットのタイミング:
    - ファイル保存時（VS Code）
    - コミット時（huskyとlint-stagedによる自動実行）
    - マージ時（huskyのpre-merge-commitフックによる自動実行）

## デプロイ

- このリポジトリはNetlifyでホストされており、mainブランチへのpush時に自動デプロイされます
  - **重要**: 頻繁なpushは避けること
    - Netlify無料枠: 月300分のビルド時間
    - 1回のビルドで約2-5分使用
    - 作業中はローカルで確認し、まとまったタイミングでコミット＆pushすること
  - デプロイ状況の確認: https://app.netlify.com/
