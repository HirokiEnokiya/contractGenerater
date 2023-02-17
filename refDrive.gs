function refDrive(email) {
  const scriptProperties = PropertiesService.getScriptProperties();
  // スクリプトプロパティ {メールアドレス : ドライブのID}
  const user_drive_id = scriptProperties.getProperty(email);
  const parent_drive_id = "1xp2E2OCwBg7J4FXUNjnlpbsUdpSO1oio";
  const parent_drive = DriveApp.getFolderById(parent_drive_id);

// ユーザーごとにフォルダを作成
  let des_drive_id;
  if(user_drive_id) {
    des_drive_id = user_drive_id;
  } else {
    const folderName = `顧客別_(${email})`;
    des_drive_id = parent_drive.createFolder(folderName).getId();
    scriptProperties.setProperty(email,des_drive_id);
    }

    // scriptProperties.deleteAllProperties();
    // console.log(des_drive_id);
    // const properties = scriptProperties.getProperties();
    // for(const key in properties) {console.log(key,properties[key])};

    return des_drive_id;
}