# Google Sheets Contact Form Integration Setup Guide

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename it to "Portfolio Contact Form"
4. Add these headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Subject`
   - E1: `Message`

## Step 2: Get Sheet ID

1. Look at your Google Sheet URL
2. Copy the ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://sheets.google.com/d/1ABC123xyz456/edit`
   - Sheet ID: `1ABC123xyz456`

## Step 3: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default `myFunction()` code
3. Copy and paste the code from `google-apps-script.js`
4. Replace `YOUR_SHEET_ID_HERE` with your actual Sheet ID
5. Replace the email with your actual Gmail address
6. Save the project (give it a name like "Portfolio Contact Form")

## Step 4: Deploy as Web App

1. Click **Deploy** → **New Deployment**
2. Choose **Web app** as the type
3. Set these options:
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: Copy the Web App URL (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

## Step 5: Test the Script (Optional)

1. In Apps Script, run the `testSheetAccess()` function
2. Grant necessary permissions when prompted
3. Check if a test row appears in your sheet

## Step 6: Update Your React App

1. Open `src/components/Contact.jsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```
3. Replace with your actual Web App URL from Step 4

## Step 7: Test Your Contact Form

1. Run your portfolio: `npm run dev`
2. Fill out and submit the contact form
3. Check your Google Sheet for the new entry
4. Check your Gmail for the notification email

## Features Included

✅ **Google Sheets Integration**: All form submissions saved automatically
✅ **Email Notifications**: Get notified via Gmail for each submission
✅ **Animated Submit Button**: Loading, success, and error states
✅ **Form Validation**: Built-in HTML5 validation
✅ **Responsive Design**: Works on all devices
✅ **Success/Error Messages**: User feedback for form submission

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Normal with `no-cors` mode, form should still work
2. **Permission Denied**: Re-run the Apps Script function and grant permissions
3. **Sheet Not Found**: Double-check your Sheet ID
4. **Email Not Sending**: Ensure Gmail permissions are granted in Apps Script

### Testing Tips:

- Use the Apps Script debugger to test your function
- Check the Apps Script execution history for errors
- Verify your sheet has the correct headers
- Test with different browsers

## Security Notes

- The Web App URL is public but only accepts POST requests
- No sensitive data is exposed in the frontend code
- Google Apps Script handles authentication securely
- Form submissions are validated server-side

## Customization Options

You can modify the Google Apps Script to:
- Add more form fields
- Change email formatting
- Add auto-reply functionality
- Include additional validation
- Format the Google Sheet data differently

---

**Important**: After setup, your contact form will:
1. Save all submissions to Google Sheets
2. Send you email notifications
3. Show animated feedback to users
4. Work reliably across all devices

Make sure to test the complete flow before going live!
