/* Paste this in script.google.com, change SPREADSHEET_ID, deploy as Web App.
   Give access to "Anyone" only if the site is public; deploy URL becomes GOOGLE_SHEETS_WEBHOOK in Vercel. */
const SPREADSHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID';
function sheet_(){const ss=SpreadsheetApp.openById(SPREADSHEET_ID);return ss.getSheetByName('Leaderboard')||ss.insertSheet('Leaderboard')}
function doPost(e){const d=JSON.parse(e.postData.contents);const s=sheet_();if(s.getLastRow()===0)s.appendRow(['Timestamp','Name','WhatsApp','Score','Level','Answers']);s.appendRow([new Date(),d.name,d.phone,d.score,d.level,JSON.stringify(d.answers)]);return ContentService.createTextOutput(JSON.stringify({stored:true})).setMimeType(ContentService.MimeType.JSON)}
function doGet(e){if(e.parameter.action!=='leaderboard')return ContentService.createTextOutput('{}');const values=sheet_().getDataRange().getValues().slice(1);const scores=values.map(r=>({name:r[1],phone:r[2],score:Number(r[3])||0,level:r[4]})).sort((a,b)=>b.score-a.score).slice(0,20);return ContentService.createTextOutput(JSON.stringify({scores})).setMimeType(ContentService.MimeType.JSON)}
