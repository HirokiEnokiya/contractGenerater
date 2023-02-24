function getHisFolderId(sender_email) {
  const script_properties = PropertiesService.getScriptProperties();
  // スクリプトプロパティ {メールアドレス : ドライブのID}
  const folder_for_him = script_properties.getProperty(sender_email);
  const parent_folder_id = "1xp2E2OCwBg7J4FXUNjnlpbsUdpSO1oio";
  const parent_folder = DriveApp.getFolderById(parent_folder_id);

// ユーザーごとにフォルダを作成
  let desDriveId;
  if(folder_for_him) {
    desDriveId = folder_for_him;
  } else {
    let folderName = `顧客別_(${sender_email})`;
    desDriveId = parent_folder.createFolder(folderName).getId();
    script_properties.setProperty(sender_email,desDriveId);
    }

    // script_properties.deleteAllProperties();
    // console.log(desDriveId);
    // const properties = script_properties.getProperties();
    // for(const key in properties) {console.log(key,properties[key])};

    return desDriveId;
}