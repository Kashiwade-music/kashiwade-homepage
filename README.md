# Kashiwade-homepage
## dev build
docker(VSCode拡張のRemote-Container)使って

```
gatsby develop
```
でおｋ。

## ページ構造
- index.js
- profile.js
- works.js
- links.js

ブログページは一旦放置
## デザインガイド

- <span style="color: #94e39c">アクセントカラー1</span> #94e39c 
  - <span style="color: #329b51">サブアクセントカラー1</span> #329b51 


- <span style="color: #f4bfd6">アクセントカラー2</span> #f4bfd6 
  - <span style="color: #ffe1e1">サブアクセントカラー2</span> #ffe1e1 
  - <span style="color: #dea7a7">サブアクセントカラー2</span> #dea7a7 

- <span style="color: #ffe3c4">アクセントカラー3</span> #ffe3c4 
  - <span style="color: #fffaed">サブアクセントカラー3</span> #fffaed 
  - <span style="color: #edb9a8">サブアクセントカラー3</span> #edb9a8 

- <span style="color: #878ac4">アクセントカラー4</span> #878ac4 
  - <span style="color: #6363a8">サブアクセントカラー4</span> #6363a8 

## works記事について
- ファイルの命名規則は`{{YYYYMMDD}}-{{曲名・アルバム名(kebab-case)}}.md`
- heroは当該mdと同じ名前でpng`{{YYYYMMDD}}-{{曲名・アルバム名(kebab-case)}}.png`

markdownのヘッダーテンプレートは以下
```yaml
---
slug: "/works/20210309-hello-new-world"
date: "2021-03-09"
title: "Hello New World"
description: "冒険の始まりのような曲です"
description-long: "新学期・新年度の時期に合わせて、『新しい冒険の始まり。』をイメージして作りました。"
tag: "Original"
type: "song"
booth: ""
price: ""
hero: ./20210309-hello-new-world.png
---
```

- slug : 記事のリンクとなります
- date : 記事ソートの基準です。形式は`YYYY-MM-DD`
- title: 曲名、アルバム名を入力
- description : 一文コメント。句点はつけない。
- description-long : 長文コメント
- tag : `Original`か`Albam`か
- type : `song`か`albam`か
- booth : 頒布場所
- price : 価格
- hero : ジャケット