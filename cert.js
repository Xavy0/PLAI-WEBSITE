document.getElementById("evaluationForm").addEventListener("submit", function(e) {
  // e.preventDefault(); // remove this to allow refresh OR we can manually refresh

  const name = document.getElementById("participantName").value || "Participant";

  // Open a new window for the certificate
  const win = window.open("", "_blank");

  win.document.write(`
    <html>
    <head>
      <title>Certificate of Participation</title>
      <style>
        @media print { button { display: none; } }
        body { font-family: 'Georgia', serif; margin:0; padding:0; background:#f9f9f9; }
        .certificate-wrapper { width:100%; height:100vh; display:flex; align-items:center; justify-content:center; background:#f4f4f4; }
        .certificate { width:800px; max-width:90%; border:12px double #600000; padding:60px 40px; background:#fff; text-align:center; box-shadow:0 8px 20px rgba(0,0,0,0.1); }
        .certificate h1 { font-size:36px; color:#600000; margin-bottom:20px; }
        .certificate h2 { font-size:28px; margin:10px 0; font-style:italic; }
        .certificate h3 { font-size:22px; margin:15px 0; }
        .certificate p { font-size:16px; margin:8px 0; }
        button { margin-top:30px; padding:12px 25px; font-size:16px; border:none; border-radius:25px; background:linear-gradient(135deg,#600000,#8a0000); color:#fff; cursor:pointer; transition:0.3s ease; }
        button:hover { background:linear-gradient(135deg,#8a0000,#600000); }
      </style>
    </head>
    <body>
      <div class="certificate-wrapper">
        <div class="certificate">
          <h1>Certificate of Participation</h1>
          <p>This certifies that</p>
          <h2>${name}</h2>
          <p>has successfully completed the</p>
          <h3>2025 PLAI National Congress</h3>
          <p>held on November 23–26, 2025</p>
          <p><strong>Philippine Librarians Association, Inc.</strong></p>
          <button onclick="window.print()">Print Certificate</button>
        </div>
      </div>
    </body>
    </html>
  `);

  // Refresh the current page after opening certificate
  setTimeout(() => {
    window.location.reload();
  }, 100); // small delay to ensure certificate window opens first
});
