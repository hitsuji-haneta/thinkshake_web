export default function(key, type) {
  switch (type) {
    case 'mainText':
      return mainTextSwitch(key);
    case 'subText':
      return subTextSwitch(key);
    case 'contentText':
      return contentTextSwitch(key);
    case 'tags':
      return tagSwitch(key);
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
    case 'profile':
      return '髙橋翔太について'
    case 'co-labo':
      return '実験機器シェアリングサービス'
    case 'ec':
      return '教務・成績管理システム'
    case 'web':
      return 'このwebサイト'
    case 'yukyu':
      return '職員有給管理ツール'
    case 'F2R':
      return '人口関連多次元表作成プログラム'
    default:
      return ''
  }
}

function subTextSwitch(key) {
  switch (key) {
    case 'profile':
      return 'profile'
    case 'co-labo':
      return '株式会社Co-LABO MAKER 様'
    case 'ec':
      return '某通信制高校 様'
    case 'web':
      return 'thinkShake製作所'
    case 'yukyu':
      return '某学校法人 様'
    case 'F2R':
      return '国交省 国土技術政策総合研究所 様'
    default:
      return ''
  }
}

function contentTextSwitch(key) {
  switch (key) {
    case 'profile':
      return '1986年福島県大玉村生まれ、宮城県仙台市在住です。'
            + '<br/>東北大学大学院修士課程修了後、株式会社NTTデータにて開発・マネジメント業務に従事しました。'
            + '<br/>退職後、2016年より「thinkShake製作所」の屋号でフリーランスのエンジニアとして活動をしています。'
            + '<br/>教育にも強い関心があるため、宮城県内の高校で非常勤講師としてお世話になっています。'
            + '<br/>音楽と甘いものが好きです。'
    case 'co-labo':
      return '株式会社Co-LABO MAKER様は実験機器・リソースのシェアリングサービスを運営しているスタートアップです。'
            + '<br/>開発メンバーとして参加させて頂いております。'
            + '<br/>変化の激しいスタートアップの領域において、仮説検証を繰り返しながらアジャイルな開発を進めています。'
            + '<br/><a href="https://co-labo-maker.com/" target="_blank">https://co-labo-maker.com/</a>'
    case 'ec':
      return '通信制高校のカリキュラムは全日制と大きく異なるため、既存の成績管理システムが使えません。'
            + '<br/>また、ご相談いただいた高校様では一人ひとりの生徒に合わせた細やかな指導をしたいという想いがあったため、それに応じた柔軟なシステムが必要でした。'
            + '<br/>入念な打ち合わせとプロトタイプを中心とした開発プロセスで、完全にオーダーメードなシステムを構築しました。'
    case 'web':
      return '近頃のフロントエンド界隈で急速に注目を集めているフレームワーク、Vue.jsとNuxt.jsを用いて構築しています。'
            + '<br/>面白かった！'
    case 'yukyu':
      return 'ご相談頂いた学校法人様は、勤続年数や勤務区分によって付与日数や繰越年数が変化する複雑な年次有給休暇規定を運用していらっしゃいました。'
            + '<br/>また、職員ごとに異なる内容の有給届けを作成する必要もあり、担当者様は管理に苦心されていました。'
            + '<br/>従来はexcel(表計算ソフト)で管理されていたため、感覚が引き継げるようexcel VBAにて構築しました。有給管理届の作成までできます。'
    case 'F2R':
      return '複数の統計情報から多次元行列を作成し、人口分布の統計分析を行うプログラムです。'
            + '<br/>お客様はもともとFortranで書かれたプログラムをお持ちでしたが、Fortranの環境構築が面倒なこと、既存ソースコードの解読が難しいことを課題としてお持ちでした。'
            + '<br/>環境構築が容易であり機能が豊富なR言語への移植へ行い、オブジェクト指向(R6)を中心とした解読しやすいソースコードへリファクタリングしました。'
    default:
      return ''
  }
}

function tagSwitch(key) {
  switch (key) {
    case 'co-labo':
      return ['Ruby', 'RoR', 'jQuery']
    case 'ec':
      return ['React', 'Redux', 'Node.js']
    case 'web':
      return ['Vue.js', 'Nuxt.js']
    case 'yukyu':
      return ['VBA']
    case 'F2R':
      return ['R', 'Fortran']
    default:
      return []
  }
}

function closedImageSwitch(key) {
  switch (key) {
    case 'profile':
      return '/profile.png'
    case 'co-labo':
      return '/co-labo.png'
    case 'ec':
      return '/ec.png'
    case 'web':
      return '/logo.png'
    case 'yukyu':
      return '/yukyu.png'
    case 'F2R':
      return '/F2R.jpg'
    default:
      return '/logo.png'
  }
}

function openedImageSwitch(key) {
  switch (key) {
    case 'profile':
      return '/profile_open.jpg'
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
    default:
      return '/logo.png'
  }
}