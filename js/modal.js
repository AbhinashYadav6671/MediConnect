function ensureDetailsModal() {
  if (document.getElementById('details-modal')) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'details-modal';
  modal.innerHTML = `
    <div class="modal" style="width:360px;">
      <button class="modal-close" onclick="document.getElementById('details-modal').classList.remove('active')">&times;</button>
      <h2>Appointment Details</h2>
      <div id="details-modal-body" style="font-size:13.5px; color:var(--text-dark); line-height:1.9;"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

function viewAppointmentDetails(id) {
  ensureDetailsModal();
  const appt = MediConnectDB.getAppointmentById(id);
  const patient = MediConnectDB.getPatientById(appt.patientId);
  const doctor = MediConnectDB.getDoctorById(appt.doctorId);

  document.getElementById('details-modal-body').innerHTML = `
    <strong>Patient:</strong> ${patient ? patient.name : 'Unknown'}<br>
    <strong>Doctor:</strong> ${doctor ? doctor.name : 'Unknown'} (${doctor ? doctor.specialization : ''})<br>
    <strong>Date:</strong> ${appt.date}<br>
    <strong>Time:</strong> ${appt.time}<br>
    <strong>Home Address:</strong> ${appt.address || 'Not provided'}<br>
    <strong>Status:</strong> <span class="badge badge-${appt.status}">${appt.status}</span><br>
    <strong>Payment:</strong> <span class="badge badge-${appt.paymentStatus}">${appt.paymentStatus}</span>
    ${appt.paymentStatus === 'paid' ? ` (${appt.paymentMethod}, ${appt.transactionId})` : ''}<br>
    <strong>Notes:</strong> ${appt.notes || 'None'}
  `;
  document.getElementById('details-modal').classList.add('active');
}
function ensureConfirmModal() {
  if (document.getElementById('confirm-modal')) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'confirm-modal';
  modal.innerHTML = `
    <div class="modal" style="width:320px; text-align:center;">
      <div style="font-size:32px; color:#b45309; margin-bottom:10px;">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <p id="confirm-modal-message" style="margin-bottom:20px; color:var(--text-dark); font-size:14px;"></p>
      <div class="flex-row gap-sm" style="justify-content:center;">
        <button class="btn btn-outline" onclick="document.getElementById('confirm-modal').classList.remove('active')">Cancel</button>
        <button class="btn btn-primary" id="confirm-modal-yes">Yes, Continue</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

function confirmAction(message, onConfirm) {
  ensureConfirmModal();
  document.getElementById('confirm-modal-message').textContent = message;
  const modal = document.getElementById('confirm-modal');
  modal.classList.add('active');

  // Replace the button to wipe any previous click listener before adding a new one
  const oldBtn = document.getElementById('confirm-modal-yes');
  const newBtn = oldBtn.cloneNode(true);
  oldBtn.parentNode.replaceChild(newBtn, oldBtn);
  newBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    onConfirm();
  });
}