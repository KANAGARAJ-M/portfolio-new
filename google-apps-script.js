// Google Apps Script for Portfolio Contact Form
// Instructions:
// 1. Create a new Google Sheet with headers: Timestamp | Name | Email | Subject | Message
// 2. Go to Extensions -> Apps Script
// 3. Replace the default code with this script
// 4. Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
// 5. Replace 'YOUR_EMAIL' with your Gmail address
// 6. Deploy as Web App with access for "Anyone"
// 7. Copy the Web App URL and replace in Contact.jsx

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Your Google Sheet ID (found in the URL)
    const SHEET_ID = 'YOUR_SHEET_ID_HERE';
    
    // Your email for notifications
    const YOUR_EMAIL = 'kanagarajm638@gmail.com';
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Add data to sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    // Send email notification
    const emailSubject = `New Portfolio Contact: ${data.subject}`;
    const emailBody = `
New contact form submission from your portfolio:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
Timestamp: ${data.timestamp}

You can reply directly to this person at: ${data.email}
    `;
    
    MailApp.sendEmail({
      to: YOUR_EMAIL,
      subject: emailSubject,
      body: emailBody
    });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Error processing form submission'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Portfolio Contact Form API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Test function to verify sheet access
function testSheetAccess() {
  const SHEET_ID = 'YOUR_SHEET_ID_HERE';
  
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet access successful!');
    
    // Test adding a row
    sheet.appendRow([
      new Date().toLocaleString(),
      'Test Name',
      'test@email.com',
      'Test Subject',
      'Test Message'
    ]);
    
    console.log('Test row added successfully!');
    
  } catch (error) {
    console.error('Error accessing sheet:', error);
  }
}
