# homepage

## PDF の追加方法

- 発表スライドや資料は `materials/` に追加します。
- 配布資料やノートは `handouts/` に追加します。
- サブフォルダも対象です。例：`materials/workshop/example.pdf`。
- GitHub でアップロードし、`main` にコミットすると、GitHub Pages のビルド完了後に
  [資料一覧](https://grad31415.github.io/homepage/resources.html) と
  [英語の一覧](https://grad31415.github.io/homepage/resources-en.html) が自動更新されます。
- ファイル名と URL を表示し、PDF だけを掲載します（`.PDF` も対象）。
  日本語、空白、`#`、`&` を含むファイル名にも対応しています。
- 削除・移動・名前変更も、次のビルドで一覧に反映されます。
  HTML を手作業で更新する必要はありません。

## GitHub Pages

このサイトは GitHub Pages 標準の Jekyll ビルドを使います。
リポジトリの **Settings → Pages** で、**Deploy from a branch**、
ブランチ **main**、フォルダ **/ (root)** を選んでください。
すでにこの設定で公開していれば、変更は不要です。

`resources.html` と `resources-en.html` は Jekyll の `site.static_files` から
一覧を生成します。ブラウザから GitHub API を呼び出す必要はありません。
ローカルで HTML を直接開く場合はテンプレートが処理されないため、
確認には Jekyll のビルドが必要です。

サイトの公開先を変える場合は、`_config.yml` の `url` と `baseurl` を更新します。
