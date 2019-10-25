export default function(key, type) {
  switch (type) {
    case 'mainText':
      return mainTextSwitch(key);
    case 'subText':
      return subTextSwitch(key);
    case 'contentText':
      return contentTextSwitch(key);
    // case 'tags':
    //   return tagSwitch(key);
    case 'closedImage':
      return closedImageSwitch(key);
    case 'openedImage':
      return openedImageSwitch(key);
    default:
      return null;
  }
}

function mainTextSwitch(key) {
  switch (key) {
    case 'lastrust':
      return 'ブロックチェーン証明書サービス'
    case 'co-labo':
      return '実験機器シェアリングサービス'
    case 'ec':
      return '教務管理システム'
    case 'web':
      return 'このwebサイト'
    case 'yukyu':
      return '有給休暇管理ツール'
    case 'F2R':
      return '人口関連多次元表作成プログラム'
    case 'qiita':
      return '技術ブログの執筆'
    case 'workshop':
      return 'ワークショップ'
    case 'wackhack':
      return 'Techサークル'
    case 'd-pro':
      return 'ポスターデザイン'
    case 'youtube':
      return 'Youtube動画の投稿'
    case 'procon':
      return 'みやぎプロコン'
    default:
      return ''
  }
}

function subTextSwitch(key) {
  switch (key) {
    case 'lastrust':
      return 'LasTrust株式会社'
    case 'co-labo':
      return '株式会社Co-LABO MAKER 様'
    case 'ec':
      return '仙台白百合学園高等学校通信制課程 様'
    case 'web':
      return 'thinkShake製作所'
    case 'yukyu':
      return '某学校法人 様'
    case 'F2R':
      return '国交省 国土技術政策総合研究所 様'
    case 'qiita':
      return 'qiitaへの投稿'
    case 'workshop':
      return ''
    case 'wackhack':
      return 'Wack Hack Sendai'
    case 'd-pro':
      return 'D-PROJECT 様'
    case 'youtube':
      return 'ヒツジハネタの読書ログ'
    default:
      return ''
  }
}

function contentTextSwitch(key) {
  switch (key) {
    case 'lastrust':
      return 'LasTrust株式会社はブロックチェーン証明書の発行サービスおよび管理アプリを運営しているスタートアップです。CTO（最高技術責任者）として共同創業しました。'
            + '<br/>ブロックチェーン証明書は改ざん不可能なデジタル証明書であり、従来までの事業者が情報を保持する仕組みではなく、P2Pという仕組みでユーザー自身が管理できます。'
            + '<br/>学位や資格といった証明書の他、これまでコストの都合から評価できなかった多様な能力が可視化される世界を目指しています。'
            + '<br/><a href="https://lastrust.io/" target="_blank">https://lastrust.io/</a>'
    case 'co-labo':
      return '株式会社Co-LABO MAKER様は実験機器・リソースのシェアリングサービスを運営しているスタートアップです。'
            + '<br/>創業初期から参加させていただき、開発責任者としてプロダクト開発・プロジェクトマネジメント・経営戦略などの業務を担当しました。'
            + '<br/>変化の激しいスタートアップの領域において、仮説検証を繰り返しながらアジャイルな開発を行いました。'
            + '<br/><a href="https://co-labo-maker.com/" target="_blank">https://co-labo-maker.com/</a>'
    case 'ec':
      return '通信制高校のカリキュラムは全日制と大きく異なるため、既存の成績管理システムが使えません。'
            + '<br/>また、ご相談いただいた高校様では一人ひとりの生徒に合わせた細やかな指導をしたいという想いがあったため、それに応じた柔軟なシステムが必要でした。'
            + '<br/>入念な打ち合わせとプロトタイプを中心とした開発プロセスで、完全にオーダーメードなシステムを構築しました。'
    case 'web':
      return '近頃のフロントエンド界隈で急速に注目を集めているフレームワーク、Vue.jsとNuxt.jsを用いて構築してみました。'
            + '<br/>面白かった！'
    case 'yukyu':
      return 'ご相談頂いた学校法人様では、勤続年数や勤務区分によって付与日数や繰越年数が変化する複雑な有給休暇規定を運用していらっしゃいました。'
            + '<br/>また、職員に配布される有給届は一人ひとり異なる内容が印刷されている必要があり、担当者様は作成・管理に苦心されていました。'
            + '<br/>従来はexcel(表計算ソフト)で管理されていたため、感覚が引き継げるようexcel VBAにて構築しました。有給届の作成までできます。'
    case 'F2R':
      return '複数の統計情報から多次元行列を作成し、人口分布の統計分析を行うプログラムです。'
            + '<br/>お客様はもともとFortranで書かれたプログラムをお持ちでしたが、Fortranの環境構築が面倒なこと、既存ソースコードが難解で計算内容が追いにくいことを課題としてお持ちでした。'
            + '<br/>環境構築が容易であり機能が豊富なR言語への移植へ行い、オブジェクト指向(R6クラス)を中心とした解読しやすいソースコードへリファクタリングしました。'
    case 'qiita':
      return '定期的に技術系の記事を執筆し、Qiitaへ投稿しています。'
            + '<br/><a href="https://qiita.com/hitsuji-haneta" target="_blank">https://qiita.com/hitsuji-haneta</a>'
    case 'workshop':
      return '中高生向けにプログラミングワークショップを開催しています。'
            + '<br/>プログラミング技術の習得よりも、「挑戦する習慣」や「失敗を重ねる＆失敗から学ぶ」というマインドを重視しています。'
            + '<br/>気軽な気持ちでまずは体験から！'
    case 'wackhack':
      return '仲間と一緒にTechサークル「Wack Hack Sendai」を立ち上げ、勉強会の開催やテストプロダクトの開発をしています。'
            + '<br/>合言葉は「仙台を盛り上げる！」'
    case 'd-pro':
      return 'D-PROJECT様はブラジル音楽を中心とした打楽器サークルです。'
            + '<br/>2019年度メンバー募集のポスターデザインを担当させていただきました。'
            + '<br/>打楽器が一斉に鳴ったときの迫力と、大人も子供も一緒に活動するD-PROJECT特有の親しみやすさを表現しました。'
    case 'youtube':
      return '読書好きが高じて、読書系Youtuberになってしまいました（笑）'
            + '<br/>読んで面白かった本を、定期的に紹介します！'
            + '<br/>よろしければチャンネル登録を〜'
            + '<br/><a href="https://www.youtube.com/channel/UCaIZDgiTHnG-QZBzsyer-CA" target="_blank">https://www.youtube.com/channel/UCaIZDgiTHnG-QZBzsyer-CA</a>'
    case 'procon':
      return '「宮城県のこどもたちにものづくりの楽しさや面白さを体験してほしい！」という想いから始まったプログラミングコンテスト。'
            + '<br/>立ち上げられたPCN仙台さんの熱いメッセージに打たれ、thinkShake製作所も実行委員としてお手伝いさせてもらっています。'
            + '<br/>webサイト制作のほか、ワークショップも担当します。'
            + '<br/>FOLKG LOCALWORKSさんの作られたキービジュアル＆コンセプトストーリーも素敵！'
            + '<br/>たくさんの想いが詰まったイベントですので、身近に小中学生のお子さんがいる方は、紹介していただけると嬉しいです。'
            + '<br/><a href="https://miyagi-procon.jp/" target="_blank">https://miyagi-procon.jp/</a>'
    default:
      return ''
  }
}

// function tagSwitch(key) {
//   switch (key) {
//     case 'co-labo':
//       return ['Ruby', 'RoR', 'jQuery']
//     case 'ec':
//       return ['React', 'Redux', 'Node.js']
//     case 'web':
//       return ['Vue.js', 'Nuxt.js']
//     case 'yukyu':
//       return ['VBA']
//     case 'F2R':
//       return ['R', 'Fortran']
//     default:
//       return []
//   }
// }

function closedImageSwitch(key) {
  switch (key) {
    case 'lastrust':
      return '/lastrust_small.jpg'
    case 'co-labo':
      return '/co-labo.png'
    case 'ec':
      return '/ec_logo.gif'
    case 'web':
      return '/logo.png'
    case 'yukyu':
      return '/yukyu.png'
    case 'F2R':
      return '/F2R.jpg'
    case 'qiita':
      return '/qiita-favicon.png'
    case 'workshop':
      return '/workshop.png'
    case 'wackhack':
      return '/wackhack.png'
    case 'd-pro':
      return '/d-pro.png'
    case 'youtube':
      return '/youtube.png'
    case 'procon':
      return '/procon2.png'
    default:
      return '/logo.png'
  }
}

function openedImageSwitch(key) {
  switch (key) {
    case 'lastrust':
      return '/lastrust.png'
    case 'co-labo':
      return '/co-labo.gif'
    case 'ec':
      return '/ec.gif'
    case 'web':
      return '/logo.png'
    case 'yukyu':
      return '/yukyu.gif'
    case 'F2R':
      return '/F2R.jpg'
    case 'qiita':
      return '/qiita-text.png'
    case 'workshop':
      return '/workshop.png'
    case 'wackhack':
      return '/wackhack.png'
    case 'd-pro':
      return '/d-pro_open.png'
    case 'youtube':
      return '/youtube.gif'
    case 'procon':
        return '/procon_open.png'
    default:
      return '/logo.png'
  }
}
