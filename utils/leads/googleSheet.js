import { GoogleSpreadsheet } from "google-spreadsheet";

// Config google sheet variables
const SPREADSHEET_ID = '1w4kXSJOgTqJ-snBKQROfuvzKsNDNiF8_l6fxlYt4ku8';
const SHEET_ID = '0';
const CLIENT_EMAIL = 'scfo-leads@scfo-leads.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD0JgAtD7pg365J\nc0S6godbf7dAwd9tKqFHYaBlN097JgNPASGn40b5i0bRT0ED5Brdc1raBfGxWX2Y\nba+gPy5DSljyLYwrLwUwNJYmgRml/mAZSKFRflcIXhOELR60UFe8ntwqwHhXxGSd\nAALDfbngShP2HMmiqVVgk0FMxmzR5qosleuD8vodtAj0G/WmE87B13QYV+b38X1d\nbhFWayZYHQ9vsnOiCm8xcqurQmBSy8u/VgMLcuHx5D8OBn6I867Rcb9ZZzmrF9B5\nJDcHbOfHRNcUTbir1CjdyVzpK22sEbcvFm2ET++SW0QzNB66vA+LBS5OMJ+vEQOJ\nDamVMkHHAgMBAAECggEAI7Y77VtxGC1vxBJRGcpGUVByS3hwSCVlrNgaCuQXGKd7\n8Wj0ICdtoMp0uTYTXPssdiWi7Y7UBmyAI1/b7MqBElpZffxtQH3NZPqJgf1Sn/Cq\n5C03B4FoP/Lpfjp5VMexuwcuTi8+tcZ7hGmAKKcxx/Md+LBySqbj3vn7Ibyeez8t\n6Qs0dSrEVBOXyULFBx4KchzXGyy1c7gUN9S0ALS5IKTuHqKANuOUTkr5KSfRJDL3\nnSLTrRF1HKuYZB4qxjObtJaagzSKpLcScggc78GoFBpEPwhRip3iUb9ErkN+Xcx+\ni7HFY9REP62qv+lH24tJSh6MM1LEjMiOqaM7VxYU/QKBgQD71Vb3liOnt0DTonfB\nVnj+uQiJZ/+xO1PLEuNtbpaHRMzeJigsDJcP6kzWDwZLeCgYveKiTlqv5QqN8x8M\nciEfUe/mmMcUMs5q3m0enqyrwtJ+VvEO9r+Teb0ldjDIelNzdPNx0YnBkbpC01rK\nZu+98S7egAnblFXOIW6qC2rUSwKBgQD4MBxjL55igxR+RJcLWkxeeJsu25gTivKz\nW3qrqnXl8g8xrV1/xjzSW7d2mU1bMMdIzjEWXhwRQLuhC4936zh4STrKXjBfHpLr\nuCNmH+j+z6ecEZjgaP2TB0Ii3zlHW6NvOqxlkFMkB5DMGZmpXr9yZbn1y2kZvfRp\nmENMOhWC9QKBgCR5XcM2R6u+6vC8E0Q5VgTun8HnAi2VPimnbrEm1z54RIPYWvEm\nUarIcKCARJUhrg0HU4/WcWQQdFri35hZ31o979UiQ5M1WJg55uwMZ03pRbtutDNK\noaymcTK/z4j5zqRmR+wwQRd8F9Id8oRmLEsCZ5tqSAM5lMPqK7ENPkfJAoGBANsh\nX28TtDw2j/mMhfA4IgWnZxzQNk3K+M7zjjPTpZUJS/EIqO0QEtOIt0u3v10sjEf0\nBdNB9HYnOYLPujSfMpTB026qCvtw+ze0tUyOECIrJkneH6TEDl+qoPI5NVGTz5F9\ntIlYDJBbPbV3RP0N8usGdlJW7s0TsqEpFwJOpn+hAoGABhoXVT4U2/3O/PXBdIN8\nh25A4AhWXK/I0OB5Uz7bKJ9nMckpWFgOYYtDoEbF+m6u9tho6dLD+U7gKCPMGiWB\niL2gd9KM06e199uEG47JztxnKgVaf6272hXRL4bZLCS6Lo0fTyPixaZ7ijaUpn5e\nKp/HLqiRGg3eMuVSi9mj2dg=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default async function updateGoogleSheet(body) {
    try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        // Update the Google Sheet with the new row
        process.env.TZ = 'Asia/Calcutta';
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() 
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        const newRow = { Name: body.full_name, Email: body.email, MobileNumber: body.mobile, Product: body.product, Date: date, Time: time}
        console.log(newRow)
        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(newRow);
        console.log('Google sheet successfully updated with row: ', newRow);
      } catch (e) {
        console.error('Error updating the google sheet: ', e);
      }
    
};
