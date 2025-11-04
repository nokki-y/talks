# talks

Slides & code for my talks

## 開発環境のセットアップ

### 依存関係のインストール

```bash
pnpm install
```

### フォーマッター

このプロジェクトでは、コードの一貫性を保つために [Prettier](https://prettier.io/) を使用しています。

#### 手動でフォーマットを実行

```bash
# すべてのファイルをフォーマット
pnpm format

# フォーマットのチェックのみ（変更は加えない）
pnpm format:check
```

#### 自動フォーマット

以下のタイミングで自動的にフォーマットが実行されます:

- **ファイル保存時（VS Code）**: ファイルを保存すると自動的にフォーマットされます
- **コミット時**: `git commit` を実行すると、ステージングされたファイルが自動的にフォーマットされます
- **マージ時**: マージコミットが作成される際に、変更されたファイルが自動的にフォーマットされます

Git連携は [husky](https://typicode.github.io/husky/) と [lint-staged](https://github.com/okonet/lint-staged) によって実現されています。

VS Codeでの保存時フォーマットを有効にするには、以下の拡張機能をインストールしてください:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

プロジェクトを開くと、推奨される拡張機能として自動的に提案されます。

#### フォーマット設定

フォーマット設定は [.prettierrc](.prettierrc) で管理されています。
フォーマット対象外のファイルは [.prettierignore](.prettierignore) で指定できます。
