// Sample Data
const rawRecords = [
  { name: "Xavier Luis David", category: "plai-members", home: "Malolos", office: "BulSU", designation: "Member", institution: "BulSU Library", email: "xavier.david@example.com", mobile: "09178001234", license: "22334", council: "Region 3 - Central Luzon", nb_position: "", rc_position: "", province: "Bulacan", gender: "Male", status: "Verified" },
  { name: "Niña Sophia Santiago", category: "house-delegates", home: "Makati", office: "UP", designation: "Delegate", institution: "UP Library", email: "nina.santiago@example.com", mobile: "09178901234", license: "33445", council: "NCR - National Capital Region", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Pending" },
  { name: "Christian Galicio", category: "paper-presenters", home: "Cavite", office: "CLSU", designation: "Presenter", institution: "CLSU", email: "christian.galicio@example.com", mobile: "09179012345", license: "44556", council: "Region 4 - Southern Tagalog", nb_position: "", rc_position: "", province: "Cavite", gender: "Male", status: "Verified" },
  { name: "Cyrus Delacruz", category: "plenary-speakers", home: "Manila", office: "DLSU", designation: "Speaker", institution: "DLSU", email: "cyrus.delacruz@example.com", mobile: "09170123456", license: "55667", council: "NCR - National Capital Region", nb_position: "", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Emmanuel Santiago", category: "plai-nbot", home: "Quezon City", office: "National Library", designation: "Director", institution: "National Library", email: "emmanuel.santiago@example.com", mobile: "09170234567", license: "66778", council: "Region 3 - Central Luzon", nb_position: "Chair", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Andrei Gapuz", category: "volunteers", home: "Bulacan", office: "BulSU", designation: "Volunteer", institution: "BulSU Library", email: "andrei.gapuz@example.com", mobile: "09170345678", license: "N/A", council: "", nb_position: "", rc_position: "", province: "Bulacan", gender: "Male", status: "Verified" },
  { name: "Norella Belen", category: "plai-members", home: "Malolos", office: "BulSU", designation: "Member", institution: "BulSU Library", email: "norella.belen@example.com", mobile: "09170456789", license: "77889", council: "Region 3 - Central Luzon", nb_position: "", rc_position: "", province: "Bulacan", gender: "Female", status: "Verified" },
  { name: "Ronally Villaroman", category: "non-plai-members", home: "Makati", office: "Ateneo", designation: "Participant", institution: "Ateneo Library", email: "ronally.villaroman@example.com", mobile: "09170567890", license: "N/A", council: "NCR - National Capital Region", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Verified" },
  { name: "Veronica Vicente", category: "house-delegates", home: "Manila", office: "UP", designation: "Delegate", institution: "UP Library", email: "veronica.vicente@example.com", mobile: "09170678901", license: "88990", council: "NCR - National Capital Region", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Pending" },
  { name: "Angela Licyayo", category: "paper-presenters", home: "Laguna", office: "CLSU", designation: "Presenter", institution: "CLSU Library", email: "angela.licyayo@example.com", mobile: "09170789012", license: "99001", council: "Region 4 - Southern Tagalog", nb_position: "", rc_position: "", province: "Laguna", gender: "Female", status: "Verified" },
  { name: "Norraine Layug", category: "plai-members", home: "Manila", office: "UST Library", designation: "Member", institution: "UST Library", email: "norraine.layug@example.com", mobile: "09170890123", license: "10112", council: "Region 4 - Southern Tagalog", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Verified" },
  { name: "Cristal Flores", category: "non-plai-members", home: "Baguio", office: "Ateneo", designation: "Participant", institution: "Ateneo Library", email: "cristal.flores@example.com", mobile: "09170901234", license: "N/A", council: "Region 1 - Ilocos Region", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Verified" },

  { name: "Juan Dela Cruz", category: "plai-nbot", home: "Quezon City", office: "National Library", designation: "Director", institution: "National Library", email: "juan@example.com", mobile: "09171234567", license: "12345", council: "Region 3 - Central Luzon", nb_position: "Chair", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Maria Clara", category: "house-delegates", home: "Makati", office: "UP Diliman", designation: "Delegate", institution: "UP", email: "maria@example.com", mobile: "09179876543", license: "67890", council: "NCR - National Capital Region", nb_position: "", rc_position: "Secretary", province: "", gender: "Female", status: "Pending" },
  { name: "Crisostomo Ibarra", category: "plai-members", home: "Manila", office: "UST Library", designation: "Member", institution: "UST Library", email: "crisostomo@example.com", mobile: "09172345678", license: "11223", council: "Region 4 - Southern Tagalog", nb_position: "", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Leonor Rivera", category: "non-plai-members", home: "Baguio", office: "Ateneo de Manila", designation: "Participant", institution: "Ateneo", email: "leonor@example.com", mobile: "09173456789", license: "N/A", council: "Region 1 Ilocos Region", nb_position: "", rc_position: "", province: "", gender: "Female", status: "Verified" },
  { name: "Elias Salome", category: "paper-presenters", home: "Laguna", office: "CLSU", designation: "Presenter", institution: "CLSU", email: "elias@example.com", mobile: "09174567890", license: "55443", council: "Region 3 - Central Luzon", nb_position: "", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Pilosopo Tasyo", category: "plenary-speakers", home: "Manila", office: "DLSU", designation: "Speaker", institution: "DLSU", email: "tasyo@example.com", mobile: "09175678901", license: "99887", council: "NCR - National Capital Region", nb_position: "", rc_position: "", province: "", gender: "Male", status: "Verified" },
  { name: "Basilio Santos", category: "volunteers", home: "Bulacan", office: "BulSU", designation: "Volunteer", institution: "BulSU", email: "basilio@example.com", mobile: "09176789012", license: "N/A", council: "", nb_position: "", rc_position: "", province: "Bulacan", gender: "Male", status: "Verified" },

];


// Default visible columns
let visibleColumns = ["name", "category", "institution", "email", "mobile", "status"];

// Pagination
let currentPage = 1;
let rowsPerPage = 5; // default

// Filter and render table
function applyFilters() {
  const cat = document.getElementById('filterCategory').value;
  const gender = document.getElementById('filterGender').value;
  const name = document.getElementById('searchName').value.toLowerCase();

  let filtered = rawRecords.filter(r => {
    return (cat === "all" || r.category === cat) &&
           (gender === "all" || r.gender === gender) &&
           r.name.toLowerCase().includes(name);
  });

  renderTable(filtered);
}

// Render table dynamically based on visible columns
function renderTable(data) {
  const body = document.getElementById('recordBody');
  const thead = document.querySelector("#congressTable thead tr");

  // Build table header dynamically
  thead.innerHTML = "";
  visibleColumns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col.replace(/_/g, " ").toUpperCase();
    thead.appendChild(th);
  });

  // Build table rows
  body.innerHTML = "";
  let start = (currentPage - 1) * rowsPerPage;
  let end = rowsPerPage === 'all' ? data.length : start + rowsPerPage;
  const paginated = data.slice(start, end);

  paginated.forEach(row => {
    const tr = document.createElement("tr");
    visibleColumns.forEach(col => {
      const td = document.createElement("td");
      td.textContent = row[col] || "";
      if(col === "status") td.style.color = row.status === "Verified" ? "green" : "orange";
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  renderPagination(data.length);
}

// Render pagination
function renderPagination(totalRows) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = "";
  if(rowsPerPage === 'all') return;

  const pageCount = Math.ceil(totalRows / rowsPerPage);
  for(let i=1; i<=pageCount; i++){
    const btn = document.createElement('button');
    btn.textContent = i;
    if(i === currentPage) btn.classList.add('active');
    btn.onclick = () => { currentPage = i; applyFilters(); };
    pagination.appendChild(btn);
  }
}

// Update visible columns from checkboxes
function updateVisibleColumns() {
  const checkboxes = document.querySelectorAll('#fieldOptions input[type="checkbox"]');
  visibleColumns = [];
  checkboxes.forEach(cb => { if(cb.checked) visibleColumns.push(cb.value); });
  currentPage = 1;
  applyFilters();
}

// Export CSV
function exportToCSV() {
  let csvContent = "data:text/csv;charset=utf-8," + visibleColumns.map(c => c.toUpperCase()).join(",") + "\n";
  let filtered = rawRecords.filter(r => {
    const cat = document.getElementById('filterCategory').value;
    const gender = document.getElementById('filterGender').value;
    const name = document.getElementById('searchName').value.toLowerCase();
    return (cat === "all" || r.category === cat) &&
           (gender === "all" || r.gender === gender) &&
           r.name.toLowerCase().includes(name);
  });
  filtered.forEach(r => {
    csvContent += visibleColumns.map(c => r[c] || "").join(",") + "\n";
  });
  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvContent));
  link.setAttribute("download", "PLAI_Congress_Records.csv");
  document.body.appendChild(link);
  link.click();
}

// Change rows per page
function changeRowsPerPage() {
  const select = document.getElementById('rowsPerPageSelect').value;
  rowsPerPage = select === "all" ? 'all' : parseInt(select);
  currentPage = 1;
  applyFilters();
}

// Initial load
window.onload = () => applyFilters();
