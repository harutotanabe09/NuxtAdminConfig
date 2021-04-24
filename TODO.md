### Admin System

- [x] SCSS Donwload
  - [x] yarn add -D sass-loader
  - [x] yarn add -D node-sas
  - [x] yarn add -D sass-autoprefixer

- [x] Stylelint Linter
  - [x] yarn add -D stylelint-config-primer
  - [x] yarn add -D @primer/css
  - [x] yarn add --dev @nuxtjs/style-resources
  - [x] Set Up Nuxt Config And StyleLing.congfig.js

- [x] Deploy Vercel
  - [x] https://vercel.com/ and Github SingUp
  - [x] Deploy Setup
  - [x] Check Page
    https://nuxt-admin-config.vercel.app/admin

### Create Page

Ref:http://rdash.github.io/#/

- [x] Crate Sidebar
  - [x] Body Tag Customize auto margin 8px to 0px (add global.css)
  - [x] menu import Array List

### Commnet

- [ ] アニメーション
- [ ] サイドメニューの折りたたみ
- [ ] 折りたたみ
- [x] Nuxt LinkでPropsの値を渡せない → :to属性で渡す

#### data, computed, methodの使い分け
- data: コンポーネントの初期化時にセットするプロパティ。ユーザーの操作によって変更されることがある。
- computed: dataおよびpropsの値によって算出される読み取り専用プロパティ。
- method: イベントハンドラとして使うのが主な用途。表示する値の算出にmethodを呼び出してしまう

#### slot
- コンポーネントのタグにHTMLの子要素を入れ込むことができる


https://menta.work/plan/2163/6767
