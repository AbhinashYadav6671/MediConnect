const PATIENT_NAV = [
  { label: 'Dashboard', icon: 'fa-gauge', href: 'dashboard.html' },
  { label: 'Find Doctors', icon: 'fa-user-doctor', href: 'find-doctors.html' },
  { label: 'Appointments', icon: 'fa-calendar-check', href: 'appointments.html' },
  { label: 'Prescriptions', icon: 'fa-file-prescription', href: 'prescriptions.html' },
  { label: 'Health Records', icon: 'fa-folder-open', href: 'health-records.html' },
];

const DOCTOR_NAV = [
  { label: 'Dashboard', icon: 'fa-gauge', href: 'dashboard.html' },
  { label: 'Appointments', icon: 'fa-calendar-check', href: 'appointments.html' },
  { label: 'Prescriptions', icon: 'fa-file-prescription', href: 'prescriptions.html' },
  { label: 'Patient History', icon: 'fa-notes-medical', href: 'patient-history.html' },
  { label: 'My Profile', icon: 'fa-id-card', href: 'profile.html' },
];

const ADMIN_NAV = [
  { label: 'Dashboard', icon: 'fa-gauge', href: 'dashboard.html' },
  { label: 'Patients', icon: 'fa-user-injured', href: 'patients.html' },
  { label: 'Doctors', icon: 'fa-user-doctor', href: 'doctors.html' },
  { label: 'Appointments', icon: 'fa-calendar-check', href: 'appointments.html' },
  { label: 'Medicines', icon: 'fa-pills', href: 'medicines.html' },
];

function renderDashboardShell({ role, navItems, activeHref, pageTitle }) {
  const user = getCurrentUser();
  let displayName = 'User';
  let topbarAvatarHTML = '';

  if (role === 'patient') {
    const p = MediConnectDB.getPatientById(user.id);
    if (p) displayName = p.name;
    const initials = displayName.split(' ').map(w => w[0]).slice(0, 2).join('');
    topbarAvatarHTML = `<div class="avatar">${initials}</div>`;
  } else if (role === 'doctor') {
    const d = MediConnectDB.getDoctorById(user.id);
    if (d) displayName = d.name;
    topbarAvatarHTML = d ? doctorAvatarHTML(d, '') : `<div class="avatar">D</div>`;
  } else if (role === 'admin') {
    displayName = 'Admin';
    topbarAvatarHTML = `<div class="avatar">A</div>`;
  }

  let unpaidCount = 0;
  if (role === 'patient') {
    unpaidCount = MediConnectDB.getAppointments({ patientId: user.id, status: 'confirmed' })
      .filter(a => a.paymentStatus === 'unpaid').length;
  }

  const sidebarHTML = `
    <div class="sidebar">
      <div class="sidebar-logo">Medi<span>Connect</span></div>
      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <a href="${item.href}" class="${item.href === activeHref ? 'active' : ''}">
            <i class="fa-solid ${item.icon}"></i> ${item.label}
            ${item.label === 'Appointments' && unpaidCount > 0 ? `<span class="nav-badge">${unpaidCount}</span>` : ''}
          </a>
        `).join('')}
        <a href="../../index.html">
          <i class="fa-solid fa-right-from-bracket"></i> Log Out
        </a>
      </nav>
    </div>
  `;

  const topbarHTML = `
    <div class="topbar">
      <div class="flex-row">
        <button class="hamburger-btn" id="hamburger-btn"><i class="fa-solid fa-bars"></i></button>
        <h2>${pageTitle}</h2>
      </div>
      <div class="flex-row gap-sm">
        <span style="font-size:14px; color:var(--text-gray);">${displayName}</span>
        ${topbarAvatarHTML}
      </div>
    </div>
  `;

  document.getElementById('sidebar-container').outerHTML = sidebarHTML;
  document.getElementById('topbar-container').outerHTML = topbarHTML;

  if (!document.getElementById('sidebar-backdrop')) {
    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    backdrop.id = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }
  const sidebarEl = document.querySelector('.sidebar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const backdropEl = document.getElementById('sidebar-backdrop');

  function openMobileSidebar() {
    sidebarEl.classList.add('mobile-open');
    backdropEl.classList.add('active');
  }
  function closeMobileSidebar() {
    sidebarEl.classList.remove('mobile-open');
    backdropEl.classList.remove('active');
  }
  hamburgerBtn.addEventListener('click', openMobileSidebar);
  backdropEl.addEventListener('click', closeMobileSidebar);
  sidebarEl.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileSidebar));
}