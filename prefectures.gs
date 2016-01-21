function addPrefListItem() {
  var form = FormApp.openById('form-id');
  var item = form.addListItem();
  item.setTitle('都道府県')
  .setChoices([
    item.createChoice('北海道'),
    item.createChoice('青森県'),
    item.createChoice('岩手県'),
    item.createChoice('宮城県'),
    item.createChoice('秋田県'),
    item.createChoice('山形県'),
    item.createChoice('福島県'),
    item.createChoice('茨城県'),
    item.createChoice('栃木県'),
    item.createChoice('群馬県'),
    item.createChoice('埼玉県'),
    item.createChoice('千葉県'),
    item.createChoice('東京都'),
    item.createChoice('神奈川県'),
    item.createChoice('新潟県'),
    item.createChoice('富山県'),
    item.createChoice('石川県'),
    item.createChoice('福井県'),
    item.createChoice('山梨県'),
    item.createChoice('長野県'),
    item.createChoice('岐阜県'),
    item.createChoice('静岡県'),
    item.createChoice('愛知県'),
    item.createChoice('三重県'),
    item.createChoice('滋賀県'),
    item.createChoice('京都府'),
    item.createChoice('大阪府'),
    item.createChoice('兵庫県'),
    item.createChoice('奈良県'),
    item.createChoice('和歌山県'),
    item.createChoice('鳥取県'),
    item.createChoice('島根県'),
    item.createChoice('岡山県'),
    item.createChoice('広島県'),
    item.createChoice('山口県'),
    item.createChoice('徳島県'),
    item.createChoice('香川県'),
    item.createChoice('愛媛県'),
    item.createChoice('高知県'),
    item.createChoice('福岡県'),
    item.createChoice('佐賀県'),
    item.createChoice('長崎県'),
    item.createChoice('熊本県'),
    item.createChoice('大分県'),
    item.createChoice('宮崎県'),
    item.createChoice('鹿児島県'),
    item.createChoice('沖縄県')
  ]);
}
