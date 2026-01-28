// ==================== ELEMENTS ====================
const registrationFormModal = document.getElementById("registrationFormModal");
const formTitle = document.getElementById("formTitle");
const participantFields = document.getElementById("participantFields");
const registrationForm = document.getElementById("registrationForm");

// ==================== REGIONAL COUNCIL OPTIONS ====================
const regionalCouncilOptions = `
    <option value="">Select Regional Council *</option>
    <option>Region 1 Ilocos Region</option>
    <option>Region 2- Cagayan Valley</option>
    <option>Region 3 - Central Luzon</option>
    <option>Region 4 - Southern Tagalog</option>
    <option>Region 5-Bicol</option>
    <option>Region 6- Western Visayas</option>
    <option>Region 7 - Central Visayas</option>
    <option>Region 8 - Eastern Visayas</option>
    <option>Region 9-Zamboanga Peninsula</option>
    <option>Region 10-Northern Mindanao</option>
    <option>Region 11- Davao Region</option>
    <option>Region 12-SOCCSKSARGEN</option>
    <option>Region 13-Caraga</option>
    <option>NCR - National Capital Region</option>
    <option>CAR - Cordillera Administrative Region</option>
    <option>BARMM - Bangsamoro Autonomous Region in Muslim Mindanao</option>
    <option>NIRLC - Negros Island Region Librarians Council</option>
`;

const province = `
    <option value="">Select Province *</option>
    <option>Aurora</option>
    <option>Bataan</option>
    <option>Bulacan</option>
    <option>Nueva Ecija</option>
    <option>Pampanga</option>
    <option>Zambales</option>
`;
// ==================== PARTICIPANT DATA ====================
const participantData = {
  "plai-nbot": `
    <div class="field-divider">Personal Information</div>
    <input type="text" placeholder="Full Name (As it appears in ID) *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="text" placeholder="Office Address *" required>
    <input type="text" placeholder="Designation/Position *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <input type="text" placeholder="Mobile Number *" required>
    <input type="text" placeholder="License Number *" required>
    <select required>${regionalCouncilOptions}</select>
    <input type="text" placeholder="Position in the NBOT *" required>
  `,
  "house-delegates": `
    <div class="field-divider">Delegate Details</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <input type="text" placeholder="License Number *" required>
    <select required>${regionalCouncilOptions}</select>
    <input type="text" placeholder="Position in the Regional Council *" required>
    <div class="field-divider">Documentation</div>
    <label class="file-label">Proof of Payment *</label>
    <input type="file" required>
    <label class="file-label">Official Receipt for 2023 Annual Due Payment *</label>
    <input type="file" required>
  `,
  "plai-members": `
    <div class="field-divider">Member Information</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <input type="text" placeholder="License Number (Write N/A if not registered) *" required>
    <select required>${regionalCouncilOptions}</select>
    <div class="field-divider">Payment Verification</div>
    <label class="file-label">Proof of Payment *</label>
    <input type="file" required>
  `,
  "non-plai-members": `
    <div class="field-divider">Participant Information</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <select required>${regionalCouncilOptions}</select>
    <div class="field-divider">Payment Verification</div>
    <label class="file-label">Proof of Payment *</label>
    <input type="file" required>
  `,
  "paper-presenters": `
    <div class="field-divider">Presenter Information</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <input type="text" placeholder="License Number (if applicable)">
    <select required>${regionalCouncilOptions}</select>
  `,
  "plenary-speakers": `
    <div class="field-divider">Speaker Information</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <select required>${regionalCouncilOptions}</select>
  `,
  "volunteers": `
    <div class="field-divider">Volunteer Information</div>
    <input type="text" placeholder="Full Name *" required>
    <input type="text" placeholder="Home Address *" required>
    <input type="text" placeholder="Institution/Affiliation *" required>
    <input type="email" placeholder="E-mail Address *" required>
    <input type="text" placeholder="License Number (if applicable)">
    <select required>${province}</select>
  `
};

// ==================== OPEN FORM FUNCTION ====================
function openForm(category) {
  if (!category || !participantData[category]) return; // Prevent auto open

  // Set the title
  formTitle.innerHTML = `<span style="color:#d4af37">${category.replace(/-/g,' ').toUpperCase()}</span> REGISTRATION`;

  // Load the fields
  participantFields.innerHTML = participantData[category];

  // Show modal
  registrationFormModal.style.display = "flex";

  // Reset scroll
  const rightPanel = document.querySelector(".modal-right-panel");
  if (rightPanel) rightPanel.scrollTop = 0;

  // Reset the form fields
  registrationForm.reset();
}

// ==================== CLOSE FORM FUNCTION ====================
function closeForm() {
  registrationFormModal.style.display = "none";
  participantFields.innerHTML = "";
  registrationForm.reset();
}

// ==================== CLOSE IF CLICK OUTSIDE ====================
window.addEventListener("click", function(event) {
  if (event.target === registrationFormModal) {
    closeForm();
  }
});
const agreePolicy = document.getElementById("agreePolicy");
const formFieldsWrapper = document.getElementById("formFieldsWrapper");

// Disable fields by default
formFieldsWrapper.classList.add("disabled");

agreePolicy.addEventListener("change", () => {
  formFieldsWrapper.classList.toggle("disabled", !agreePolicy.checked);
});

registrationForm.addEventListener("submit", function(e){
  e.preventDefault();

  // Use correct checkbox ID
  if(!agreePolicy.checked) {
    alert("Please agree to the Data Declaration Policy.");
    return;
  }

  // Collect all inputs and selects
  const fields = Array.from(participantFields.querySelectorAll("input, select"));
  const formData = {};

  fields.forEach(field => {
    if(field.type === "file") {
      // Save only the file name for demo purposes
      const label = field.previousElementSibling?.textContent || field.name;
      formData[label] = field.files.length > 0 ? field.files[0].name : "";
    } else {
      const key = field.placeholder || field.name;
      formData[key] = field.value;
    }
  });

  // Save category from the form title
  formData["Category"] = formTitle.textContent.split(" REGISTRATION")[0];

  // Get existing registrations
  let registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
  registrations.push(formData);
  localStorage.setItem("registrations", JSON.stringify(registrations));

  alert("Registration submitted successfully!");

  // Reset form and close modal
  registrationForm.reset();
  agreePolicy.checked = false;
  formFieldsWrapper.classList.add("disabled");
  closeForm();
});
