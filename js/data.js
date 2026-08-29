// ============================================================
// MEDICONNECT — MOCK DATABASE
// Everything here fakes a backend using localStorage.
// ============================================================

const DB_KEY = 'mediconnect_db';
const DB_VERSION = 7; // bump this any time SEED_DATA's structure changes

// ---------- Seed data (used only the very first time the app runs) ---------- 
const SEED_DATA = {
 patients: [
  { id: 'P1', name: 'Sita Rai', email: 'sita@example.com', phone: '9841000001', password: 'patient123', active: true },
  { id: 'P2', name: 'Hari Thapa', email: 'hari@example.com', phone: '9841000002', password: 'patient123', active: true },
  { id: 'P3', name: 'Gita Lama', email: 'gita@example.com', phone: '9841000003', password: 'patient123', active: true },
],

doctors: [
  {
    id: 'D1', name: 'Dr. Ramesh Adhikari', email: 'ramesh@mediconnect.com', phone: '9851000001', password: 'doctor123',
    specialization: 'Cardiologist', experienceYears: 8, fee: 800, status: 'approved', active: true,
    rating: 4.8, reviewCount: 842, hospital: 'Grande International Hospital',
    nmcNumber: 'NMC-11234', photoUrl: null,
    bio: 'Senior Cardiologist at Grande International Hospital with 8 years of experience in interventional cardiology. Recipient of the 2023 Nepal Medical Excellence Award.',
    availability: [
      { day: 'Monday', start: '10:00', end: '14:00' },
      { day: 'Wednesday', start: '15:00', end: '18:00' },
    ],
  },
  {
    id: 'D2', name: 'Dr. Anjali Gurung', email: 'anjali@mediconnect.com', phone: '9851000002', password: 'doctor123',
    specialization: 'Dermatologist', experienceYears: 5, fee: 600, status: 'approved', active: true,
    rating: 4.5, reviewCount: 613, hospital: 'Norvic International Hospital',
    nmcNumber: 'NMC-11587', photoUrl: null,
    bio: 'Dermatologist at Norvic International Hospital, specializing in clinical and cosmetic dermatology. Trained at Tribhuvan University Teaching Hospital.',
    availability: [
      { day: 'Tuesday', start: '11:00', end: '15:00' },
    ],
  },
  {
    id: 'D3', name: 'Dr. Bikash Shrestha', email: 'bikash@mediconnect.com', phone: '9851000003', password: 'doctor123',
    specialization: 'General Physician', experienceYears: 10, fee: 500, status: 'approved', active: true,
    rating: 4.9, reviewCount: 957, hospital: 'Om Hospital & Research Center',
    nmcNumber: 'NMC-9821', photoUrl: null,
    bio: 'General Physician at Om Hospital & Research Center with over a decade of experience treating families across Kathmandu Valley.',
    availability: [
      { day: 'Monday', start: '09:00', end: '13:00' },
      { day: 'Tuesday', start: '09:00', end: '13:00' },
      { day: 'Wednesday', start: '09:00', end: '13:00' },
      { day: 'Thursday', start: '09:00', end: '13:00' },
      { day: 'Friday', start: '09:00', end: '13:00' },
    ],
  },
  {
    id: 'D4', name: 'Dr. Sunita Koirala', email: 'sunita@mediconnect.com', phone: '9851000004', password: 'doctor123',
    specialization: 'Pediatrician', experienceYears: 6, fee: 700, status: 'approved', active: true,
    rating: 4.3, reviewCount: 278, hospital: "Kanti Children's Hospital",
    nmcNumber: 'NMC-13042', photoUrl: null,
    bio: 'Pediatrician at Kanti Children\'s Hospital, focused on newborn and early childhood care.',
    availability: [
      { day: 'Thursday', start: '10:00', end: '16:00' },
    ],
  },
  {
    id: 'D5', name: 'Dr. Prakash Malla', email: 'prakash@mediconnect.com', phone: '9851000005', password: 'doctor123',
    specialization: 'Orthopedic', experienceYears: 4, fee: 900, status: 'pending', active: true,
    rating: 4.6, reviewCount: 134, hospital: 'Nepal Orthopedic Hospital',
    nmcNumber: 'NMC-14501', photoUrl: null,
    bio: 'Orthopedic surgeon at Nepal Orthopedic Hospital, specializing in sports injuries and joint replacement.',
    availability: [
      { day: 'Friday', start: '13:00', end: '17:00' },
    ],
  },
],
admins: [
  { id: 'ADMIN1', name: 'Admin User', email: 'admin@mediconnect.com', password: 'admin123' },
],
 appointments: [
    { id: 'A1', patientId: 'P1', doctorId: 'D1', date: '2026-08-22', time: '10:30 AM', address: 'Baneshwor, Kathmandu', status: 'pending', paymentStatus: 'unpaid', notes: '' },
{ id: 'A2', patientId: 'P2', doctorId: 'D3', date: '2026-08-20', time: '9:00 AM', address: 'Patan, Lalitpur', status: 'confirmed', paymentStatus: 'unpaid', notes: '' },
{ id: 'A3', patientId: 'P1', doctorId: 'D2', date: '2026-08-10', time: '11:00 AM', address: 'Baneshwor, Kathmandu', status: 'completed', paymentStatus: 'paid', paymentMethod: 'eSewa', transactionId: 'MC20260810001', amountPaid: 600, notes: 'Follow-up in 2 weeks' },
  ],

  prescriptions: [
    {
      id: 'RX1',
      appointmentId: 'A3',
      patientId: 'P1',
      doctorId: 'D2',
      diagnosis: 'Mild seasonal allergy',
      medicines: [
        { name: 'Cetirizine', dosage: '10mg', frequency: 'Once daily', duration: '5 days' },
      ],
      instructions: 'Take after fresh food. Avoid dust exposure.',
      notes: 'Return if symptoms persist beyond 5 days.',
      createdAt: '2026-08-10',
    },
  ],

  medicines: [
    { id: 'M1', name: 'Paracetamol', category: 'Painkiller' },
    { id: 'M2', name: 'Cetirizine', category: 'Antihistamine' },
    { id: 'M3', name: 'Amoxicillin', category: 'Antibiotic' },
    { id: 'M4', name: 'Ibuprofen', category: 'Painkiller' },
    { id: 'M5', name: 'Omeprazole', category: 'Antacid' },
  ],
meta: {
  nextId: { patient: 4, doctor: 6, appointment: 4, prescription: 2, medicine: 6, admin: 2 },
},
};
const WEEKDAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function doctorAvatarHTML(d, sizeClass = 'avatar-lg') {
  if (d.photoUrl) {
    return `<div class="avatar ${sizeClass}"><img src="${d.photoUrl}" alt="${d.name}"></div>`;
  }
  return `<div class="avatar ${sizeClass}">${d.name.split(' ').slice(-1)[0][0]}</div>`;
}

function compressImage(file, maxSize = 300, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height) {
          if (width > maxSize) { height *= maxSize / width; width = maxSize; }
        } else {
          if (height > maxSize) { width *= maxSize / height; height = maxSize; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatTimeStr(t) {
  let [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
}

// ---------- Low-level load/save (nothing outside this file should call these directly) ----------
function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  const storedVersion = localStorage.getItem(DB_KEY + '_version');

  if (!raw || storedVersion !== String(DB_VERSION)) {
    saveDB(SEED_DATA);
    localStorage.setItem(DB_KEY + '_version', String(DB_VERSION));
    return JSON.parse(JSON.stringify(SEED_DATA));
  }
  return JSON.parse(raw);
}

function saveDB(db) {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch (err) {
    console.error('Storage save failed:', err);
    if (typeof showToast === 'function') {
      showToast('Could not save — storage is full. Try a smaller photo or reset demo data.', 'error');
    }
  }
}
function nextId(db, type) {
  const prefix = { patient: 'P', doctor: 'D', appointment: 'A', prescription: 'RX', medicine: 'M', admin: 'ADMIN' }[type];
  const num = db.meta.nextId[type]++;
  return `${prefix}${num}`;
}
// ============================================================
// PUBLIC API — every page uses only these functions
// ============================================================
   const MediConnectDB = {

    // ---------- Auth ----------
 registerPatient({ name, email, phone, password }) {
  const db = loadDB();
  const exists = db.patients.some(p => p.email.toLowerCase() === email.toLowerCase() || p.phone === phone);
  if (exists) return { success: false, message: 'An account with this email or phone already exists.' };

  const patient = { id: nextId(db, 'patient'), name, email, phone, password, active: true };
  db.patients.push(patient);
  saveDB(db);
  return { success: true, user: patient };
},

loginPatient(identifier, password) {
  const id = identifier.toLowerCase();
  const patient = loadDB().patients.find(p => p.email.toLowerCase() === id || p.phone === identifier);
  if (!patient) return { success: false, message: 'No account found with this email or phone.' };
  if (patient.password !== password) return { success: false, message: 'Incorrect password.' };
  if (!patient.active) return { success: false, message: 'This account has been deactivated. Contact the clinic.' };
  return { success: true, user: patient };
},

loginDoctor(identifier, password) {
  const id = identifier.toLowerCase();
  const doctor = loadDB().doctors.find(d => d.email.toLowerCase() === id || d.phone === identifier);
  if (!doctor) return { success: false, message: 'No account found with this email or phone.' };
  if (doctor.password !== password) return { success: false, message: 'Incorrect password.' };
  if (doctor.status === 'rejected') return { success: false, message: 'This registration was rejected by the admin.' };
  if (!doctor.active) return { success: false, message: 'This account has been deactivated. Contact the admin.' };
  return { success: true, user: doctor };
},

  loginAdmin(email, password) {
    const admin = loadDB().admins.find(a => a.email.toLowerCase() === email.toLowerCase());
    if (!admin) return { success: false, message: 'No admin account found with this email.' };
    if (admin.password !== password) return { success: false, message: 'Incorrect password.' };
    return { success: true, user: admin };
  },
  
  // ---------- Doctors ----------
  getAllDoctors() {
    return loadDB().doctors;
  },
  getApprovedDoctors(specialization) {
    const doctors = loadDB().doctors.filter(d => d.status === 'approved' && d.active);
    if (!specialization) return doctors;
    return doctors.filter(d => d.specialization.toLowerCase().includes(specialization.toLowerCase()));
  },
    getAvailabilityForDate(doctorId, dateStr) {
    const doctor = this.getDoctorById(doctorId);
    if (!doctor || !dateStr) return null;
    const dayName = WEEKDAY_NAMES[new Date(dateStr + 'T00:00:00').getDay()];
    return doctor.availability.find(slot => slot.day === dayName) || null;
  },
  getDoctorById(id) {
    return loadDB().doctors.find(d => d.id === id) || null;
  },
  approveDoctor(id) {
    const db = loadDB();
    const doc = db.doctors.find(d => d.id === id);
    if (doc) { doc.status = 'approved'; saveDB(db); }
    return doc;
  },
  rejectDoctor(id) {
    const db = loadDB();
    const doc = db.doctors.find(d => d.id === id);
    if (doc) { doc.status = 'rejected'; saveDB(db); }
    return doc;
  },
  toggleDoctorActive(id) {
    const db = loadDB();
    const doc = db.doctors.find(d => d.id === id);
    if (doc) { doc.active = !doc.active; saveDB(db); }
    return doc;
  },
    updateDoctorProfile(id, data) {
    const db = loadDB();
    const doc = db.doctors.find(d => d.id === id);
    if (doc) { Object.assign(doc, data); saveDB(db); }
    return doc;
  },

  // ---------- Patients ----------
  getAllPatients() {
    return loadDB().patients;
  },
  getPatientById(id) {
    return loadDB().patients.find(p => p.id === id) || null;
  },
  togglePatientActive(id) {
    const db = loadDB();
    const p = db.patients.find(p => p.id === id);
    if (p) { p.active = !p.active; saveDB(db); }
    return p;
  },

  // ---------- Appointments ----------
  getAppointments(filter = {}) {
    let list = loadDB().appointments;
    if (filter.patientId) list = list.filter(a => a.patientId === filter.patientId);
    if (filter.doctorId) list = list.filter(a => a.doctorId === filter.doctorId);
    if (filter.status) list = list.filter(a => a.status === filter.status);
    return list;
  },
 bookAppointment({ patientId, doctorId, date, time, address, notes = '' }) {
  const db = loadDB();
  const appointment = {
    id: nextId(db, 'appointment'),
    patientId, doctorId, date, time, address,
    status: 'pending',
    paymentStatus: 'unpaid',
    notes,
  };
  db.appointments.push(appointment);
  saveDB(db);
  return appointment;
},
  updateAppointmentStatus(id, status) {
    const db = loadDB();
    const appt = db.appointments.find(a => a.id === id);
    if (appt) { appt.status = status; saveDB(db); }
    return appt;
  },
    getAppointmentById(id) {
    return loadDB().appointments.find(a => a.id === id) || null;
  },
  updateAppointmentNotes(id, notes) {
    const db = loadDB();
    const appt = db.appointments.find(a => a.id === id);
    if (appt) { appt.notes = notes; saveDB(db); }
    return appt;
  },

  // ---------- Prescriptions ----------
  getPrescriptions(filter = {}) {
    let list = loadDB().prescriptions;
    if (filter.patientId) list = list.filter(p => p.patientId === filter.patientId);
    if (filter.doctorId) list = list.filter(p => p.doctorId === filter.doctorId);
    if (filter.appointmentId) list = list.filter(p => p.appointmentId === filter.appointmentId);
    return list;
  },
  createPrescription({ appointmentId, patientId, doctorId, diagnosis, medicines, instructions, notes = '' }) {
    const db = loadDB();
    const prescription = {
      id: nextId(db, 'prescription'),
      appointmentId, patientId, doctorId, diagnosis, medicines, instructions, notes,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    db.prescriptions.push(prescription);
    saveDB(db);
    return prescription;
  },

  // ---------- Medicines ----------
  getMedicines() {
    return loadDB().medicines;
  },
  addMedicine({ name, category }) {
    const db = loadDB();
    const medicine = { id: nextId(db, 'medicine'), name, category };
    db.medicines.push(medicine);
    saveDB(db);
    return medicine;
  },
  updateMedicine(id, data) {
    const db = loadDB();
    const med = db.medicines.find(m => m.id === id);
    if (med) { Object.assign(med, data); saveDB(db); }
    return med;
  },
  deleteMedicine(id) {
    const db = loadDB();
    db.medicines = db.medicines.filter(m => m.id !== id);
    saveDB(db);
  },
  payForAppointment(id, { method }) {
  const db = loadDB();
  const appt = db.appointments.find(a => a.id === id);
  if (!appt) return null;
  const doctor = db.doctors.find(d => d.id === appt.doctorId);

  appt.paymentStatus = 'paid';
  appt.paymentMethod = method;
  appt.amountPaid = doctor ? doctor.fee : 0;
  appt.transactionId = 'MC' + appt.date.replace(/-/g, '') + Math.floor(100 + Math.random() * 900);
  saveDB(db);
  return appt;
},

  // ---------- Utility ----------
  resetDemoData() {
    saveDB(SEED_DATA);
  },
};