function sendMailUrl(sender_email,url) {
  const recipient = sender_email;
  const subject = '雇用契約書が作成されました';
  let body ='';
  body += 'gooleフォームに入力された内容から雇用契約書が作成されました。\n'
  body +='以下のURLからご確認ください。\n';
  body +=`${url}\n`;

  const options = {
    name : '雇用契約書ジェネレーター',
    noReply : 'true'
  };

  GmailApp.sendEmail(recipient,subject,body,options);

}

