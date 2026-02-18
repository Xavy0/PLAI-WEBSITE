
// ----------------------
// Column and Member Data
// ----------------------
const columnKeys = [
  "consent",
  "name",
  "mailing",
  "birth",
  "personalEmail",
  "personalContact",
  "institution",
  "instAddress",
  "type",
  "designation",
  "license",
  "dateObtained",
  "instContact",
  "instEmail",
  "council",
  "licenseExp"
];

let visibleColumns = [
  "name",
  "personalEmail",
  "personalContact",
  "institution",
  "type",
  "designation"
];

// Sample members (you can keep adding more)
const members = [
  {
    consent: "I Agree",
    name: "Villafranca, Cyril James, Onday",
    mailing: "Mabini St, Maasin, Iloilo",
    birth: "1999-07-20",
    personalEmail: "",
    personalContact: "",
    institution: "Colegio de la Purisima Concepcion",
    instAddress: "Roxas City",
    type: "Private",
    designation: "Academic Librarian",
    license: "0010242",
    dateObtained: "2022-10-28",
    instContact: "",
    instEmail: "",
    council: "Region VI",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Jose, Miguel Correa",
    mailing: "42 Maalalahanin St, Teachers Village East, Quezon City",
    birth: "1988-11-07",
    personalEmail: "migueljose413@yahoo.com",
    personalContact: "09420474340",
    institution: "Mary the Queen College of Quezon City",
    instAddress: "Commonwealth Avenue, Diliman, Quezon City",
    type: "Private",
    designation: "School Librarian",
    license: "00006464",
    dateObtained: "2012-11-15",
    instContact: "N/A",
    instEmail: "N/A",
    council: "NCR",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Banjao, Mari Angeli Adriano",
    mailing: "B32 P3 L3 F1 Kapak St, Dagat Dagatan Ave, Caloocan City",
    birth: "1984-03-25",
    personalEmail: "mrsbanjao@gmail.com",
    personalContact: "09682346032",
    institution: "Gregoria de Jesús Elementary School",
    instAddress: "P. Sevilla St. Cor. 9th Ave, Caloocan City",
    type: "Government",
    designation: "Master Teacher 1",
    license: "005570",
    dateObtained: "2008-12-08",
    instContact: "09682346032",
    instEmail: "",
    council: "NCR",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Lumanas, Chelly Lumayno",
    mailing: "P3, Sta. Ana, San Francisco, Agusan del Sur",
    birth: "1984-03-14",
    personalEmail: "chellylumanas07@gmail.com",
    personalContact: "09075125901",
    institution: "Agusan del Sur State College of Agriculture and Technology",
    instAddress: "San Teodoro, Bunawan, Agusan del Sur",
    type: "Government",
    designation: "Academic Librarian",
    license: "0005360",
    dateObtained: "2008-01-29",
    instContact: "09075125901",
    instEmail: "library@asscat.edu.ph",
    council: "CAR",
    licenseExp: ""
  },
    {
    consent: "I Agree",
    name: "Villafranca, Cyril James, Onday",
    mailing: "Mabini St, Maasin, Iloilo",
    birth: "1999-07-20",
    personalEmail: "",
    personalContact: "",
    institution: "Colegio de la Purisima Concepcion",
    instAddress: "Roxas City",
    type: "Private",
    designation: "Academic Librarian",
    license: "0010242",
    dateObtained: "2022-10-28",
    instContact: "",
    instEmail: "",
    council: "Region VI",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Jose, Miguel Correa",
    mailing: "42 Maalalahanin St, Teachers Village East, Quezon City",
    birth: "1988-11-07",
    personalEmail: "migueljose413@yahoo.com",
    personalContact: "09420474340",
    institution: "Mary the Queen College of Quezon City",
    instAddress: "Commonwealth Avenue, Diliman, Quezon City",
    type: "Private",
    designation: "School Librarian",
    license: "00006464",
    dateObtained: "2012-11-15",
    instContact: "N/A",
    instEmail: "N/A",
    council: "NCR",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Banjao, Mari Angeli Adriano",
    mailing: "B32 P3 L3 F1 Kapak St, Dagat Dagatan Ave, Caloocan City",
    birth: "1984-03-25",
    personalEmail: "mrsbanjao@gmail.com",
    personalContact: "09682346032",
    institution: "Gregoria de Jesús Elementary School",
    instAddress: "P. Sevilla St. Cor. 9th Ave, Caloocan City",
    type: "Government",
    designation: "Master Teacher 1",
    license: "005570",
    dateObtained: "2008-12-08",
    instContact: "09682346032",
    instEmail: "",
    council: "NCR",
    licenseExp: ""
  },
  {
    consent: "I Agree",
    name: "Lumanas, Chelly Lumayno",
    mailing: "P3, Sta. Ana, San Francisco, Agusan del Sur",
    birth: "1984-03-14",
    personalEmail: "chellylumanas07@gmail.com",
    personalContact: "09075125901",
    institution: "Agusan del Sur State College of Agriculture and Technology",
    instAddress: "San Teodoro, Bunawan, Agusan del Sur",
    type: "Government",
    designation: "Academic Librarian",
    license: "0005360",
    dateObtained: "2008-01-29",
    instContact: "09075125901",
    instEmail: "library@asscat.edu.ph",
    council: "CAR",
    licenseExp: ""
  },
  // Add more realistic unique members
  {
    consent: "I Agree",
    name: "Garcia, Anna Marie Santos",
    mailing: "101 Rizal St, Cebu City",
    birth: "1992-05-14",
    personalEmail: "anna.garcia@email.com",
    personalContact: "09123456789",
    institution: "Cebu Normal University",
    instAddress: "Osmeña Blvd, Cebu City",
    type: "Government",
    designation: "Faculty Librarian",
    license: "0012356",
    dateObtained: "2015-03-12",
    instContact: "032-4112345",
    instEmail: "library@cnu.edu.ph",
    council: "Region VII",
    licenseExp: "2025-03-12"
  },
  {
    consent: "I Agree",
    name: "Lopez, Mark Anthony Cruz",
    mailing: "55 Mabini St, Bacolod City",
    birth: "1990-08-21",
    personalEmail: "mark.lopez@email.com",
    personalContact: "09234567890",
    institution: "University of Negros Occidental-Recoletos",
    instAddress: "Alijis St, Bacolod City",
    type: "Private",
    designation: "School Librarian",
    license: "0098765",
    dateObtained: "2010-07-15",
    instContact: "034-4335678",
    instEmail: "library@uno-r.edu.ph",
    council: "Region VI",
    licenseExp: "2024-07-15"
  },
  {
    consent: "I Agree",
    name: "Reyes, Patricia Joy Almeda",
    mailing: "23 Mabuhay St, Davao City",
    birth: "1985-09-10",
    personalEmail: "preyes@email.com",
    personalContact: "09187654321",
    institution: "Ateneo de Davao University",
    instAddress: "Jacinto St, Davao City",
    type: "Private",
    designation: "Academic Librarian",
    license: "0034578",
    dateObtained: "2013-06-20",
    instContact: "082-2270000",
    instEmail: "library@addu.edu.ph",
    council: "Region XI",
    licenseExp: "2023-06-20"
  },
    {
    consent: "I Agree",
    name: "Dela Cruz, Michael Angelo",
    mailing: "12 Mabini St, Quezon City",
    birth: "1991-02-17",
    personalEmail: "michael.delacruz@email.com",
    personalContact: "09123456701",
    institution: "Far Eastern University",
    instAddress: "Nicanor Reyes St, Sampaloc, Manila",
    type: "Private",
    designation: "School Librarian",
    license: "0045123",
    dateObtained: "2016-05-10",
    instContact: "02-8734567",
    instEmail: "library@feu.edu.ph",
    council: "NCR",
    licenseExp: "2026-05-10"
  },
  {
    consent: "I Agree",
    name: "Santos, Mary Grace",
    mailing: "45 Bonifacio Ave, Calamba City, Laguna",
    birth: "1987-12-05",
    personalEmail: "mary.santos@email.com",
    personalContact: "09234567891",
    institution: "Laguna State Polytechnic University",
    instAddress: "San Pablo City, Laguna",
    type: "Government",
    designation: "Academic Librarian",
    license: "0023456",
    dateObtained: "2010-08-20",
    instContact: "049-5612345",
    instEmail: "library@lspu.edu.ph",
    council: "Region IV",
    licenseExp: "2025-08-20"
  },
  {
    consent: "I Agree",
    name: "Torres, Juan Paolo",
    mailing: "22 Rizal St, Cebu City",
    birth: "1993-04-11",
    personalEmail: "juan.torres@email.com",
    personalContact: "09123456702",
    institution: "University of San Carlos",
    instAddress: "Cebu City, Cebu",
    type: "Private",
    designation: "Faculty Librarian",
    license: "0076543",
    dateObtained: "2017-09-15",
    instContact: "032-2334455",
    instEmail: "library@usc.edu.ph",
    council: "Region VII",
    licenseExp: "2027-09-15"
  },
  {
    consent: "I Agree",
    name: "Villanueva, Carla Mae",
    mailing: "89 Mabuhay St, Davao City",
    birth: "1989-06-22",
    personalEmail: "carla.villanueva@email.com",
    personalContact: "09234567892",
    institution: "University of Mindanao",
    instAddress: "Matina, Davao City",
    type: "Private",
    designation: "School Librarian",
    license: "0087654",
    dateObtained: "2012-11-10",
    instContact: "082-2213456",
    instEmail: "library@umindanao.edu.ph",
    council: "Region XI",
    licenseExp: "2024-11-10"
  },
  {
    consent: "I Agree",
    name: "Reyes, Jonathan Paul",
    mailing: "34 Mabini St, Iloilo City",
    birth: "1990-03-05",
    personalEmail: "jon.reyes@email.com",
    personalContact: "09123456703",
    institution: "Central Philippine University",
    instAddress: "Jaro, Iloilo City",
    type: "Private",
    designation: "Academic Librarian",
    license: "0034567",
    dateObtained: "2013-02-20",
    instContact: "033-3356789",
    instEmail: "library@cpu.edu.ph",
    council: "Region VI",
    licenseExp: "2025-02-20"
  },
  {
    consent: "I Agree",
    name: "Lopez, Kristine Anne",
    mailing: "12 Mabini St, Bacolod City",
    birth: "1992-07-18",
    personalEmail: "kristine.lopez@email.com",
    personalContact: "09234567893",
    institution: "University of Negros Occidental-Recoletos",
    instAddress: "Alijis St, Bacolod City",
    type: "Private",
    designation: "Faculty Librarian",
    license: "0098766",
    dateObtained: "2015-06-15",
    instContact: "034-4335679",
    instEmail: "library@uno-r.edu.ph",
    council: "Region VI",
    licenseExp: "2025-06-15"
  },
  {
    consent: "I Agree",
    name: "Garcia, Paolo Miguel",
    mailing: "56 Mabini St, Cebu City",
    birth: "1991-09-10",
    personalEmail: "paolo.garcia@email.com",
    personalContact: "09123456704",
    institution: "University of Cebu",
    instAddress: "Cebu City, Cebu",
    type: "Private",
    designation: "School Librarian",
    license: "0065432",
    dateObtained: "2014-03-10",
    instContact: "032-4123456",
    instEmail: "library@uc.edu.ph",
    council: "Region VII",
    licenseExp: "2024-03-10"
  },
  {
    consent: "I Agree",
    name: "Martinez, Anna Lourdes",
    mailing: "77 Mabini St, Quezon City",
    birth: "1988-08-22",
    personalEmail: "anna.martinez@email.com",
    personalContact: "09234567894",
    institution: "University of the Philippines, Diliman",
    instAddress: "Quezon City, Metro Manila",
    type: "Government",
    designation: "Academic Librarian",
    license: "0054321",
    dateObtained: "2011-05-05",
    instContact: "02-9812345",
    instEmail: "library@up.edu.ph",
    council: "NCR",
    licenseExp: "2026-05-05"
  },
  {
    consent: "I Agree",
    name: "Santos, Miguel Angelo",
    mailing: "88 Mabini St, Zamboanga City",
    birth: "1990-12-12",
    personalEmail: "miguel.santos@email.com",
    personalContact: "09234567895",
    institution: "Western Mindanao State University",
    instAddress: "Zamboanga City",
    type: "Government",
    designation: "Faculty Librarian",
    license: "0043210",
    dateObtained: "2012-07-18",
    instContact: "062-9912345",
    instEmail: "library@wmsu.edu.ph",
    council: "Region IX",
    licenseExp: "2024-07-18"
  },
  {
    consent: "I Agree",
    name: "Cruz, Mark Anthony",
    mailing: "33 Mabini St, Cagayan de Oro City",
    birth: "1991-11-05",
    personalEmail: "mark.cruz@email.com",
    personalContact: "09234567896",
    institution: "Xavier University-Ateneo de Cagayan",
    instAddress: "Cagayan de Oro City",
    type: "Private",
    designation: "Academic Librarian",
    license: "0076543",
    dateObtained: "2013-09-25",
    instContact: "088-1234567",
    instEmail: "library@xu.edu.ph",
    council: "Region X",
    licenseExp: "2025-09-25"
  }  
  // Add other members here...
];

// ----------------------
// Render Table
// ----------------------
const tbody = document.getElementById("membershipBody");

function renderTable(data) {
  tbody.innerHTML = "";

  data.forEach(member => {
    const tr = document.createElement("tr");

    columnKeys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = member[key] || "";
      td.style.display = visibleColumns.includes(key) ? "" : "none";
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  updateHeaderVisibility();
}

function updateHeaderVisibility() {
  const headers = document.querySelectorAll("#membershipTable th");

  columnKeys.forEach((key, index) => {
    headers[index].style.display = visibleColumns.includes(key) ? "" : "none";
  });
}

// ----------------------
// Update Visible Columns from Checkbox
// ----------------------
function updateVisibleColumns() {
  const checkboxes = document.querySelectorAll("#fieldOptions input[type='checkbox']");
  visibleColumns = [];

  checkboxes.forEach(cb => {
    if (cb.checked) visibleColumns.push(cb.value);
  });

  renderTable(filteredMembers); // render with current filtered list
}

// ----------------------
// Filters
// ----------------------
let filteredMembers = members.slice();

function applyFilters() {
  const councilFilter = document.getElementById("filterCouncil").value.toLowerCase();
  const nameFilter = document.getElementById("searchName").value.toLowerCase();

  filteredMembers = members.filter(member => {
    const matchCouncil = councilFilter === "all" || member.council.toLowerCase() === councilFilter;
    const matchName = member.name.toLowerCase().includes(nameFilter);
    return matchCouncil && matchName;
  });

  renderTable(filteredMembers);
}

// ----------------------
// Sorting
// ----------------------
let sortDirection = {};

document.querySelectorAll("#membershipTable th").forEach((th, index) => {
  th.style.cursor = "pointer";
  th.addEventListener("click", () => {
    const dataKey = columnKeys[index];
    sortDirection[dataKey] = !sortDirection[dataKey];

    filteredMembers.sort((a, b) => {
      let valA = a[dataKey] || "";
      let valB = b[dataKey] || "";
      if (valA < valB) return sortDirection[dataKey] ? -1 : 1;
      if (valA > valB) return sortDirection[dataKey] ? 1 : -1;
      return 0;
    });

    renderTable(filteredMembers);
  });
});

// ----------------------
// Export CSV
// ----------------------
function exportToCSV() {
  const headers = visibleColumns.map(key => 
    document.querySelector(`#membershipTable th:nth-child(${columnKeys.indexOf(key)+1})`).innerText
  );

  const rows = [headers];

  document.querySelectorAll("#membershipBody tr").forEach(tr => {
    const row = [];
    visibleColumns.forEach(key => {
      const index = columnKeys.indexOf(key);
      row.push(`"${tr.children[index].innerText}"`);
    });
    rows.push(row);
  });

  const csv = rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "membership_records.csv";
  link.click();
}

// ----------------------
// Initial Load
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  renderTable(members); // default showing all members
});