// DATA JADWAL PELAJARAN
const jadwal = [
  { hari: 'Senin', mapel: ['PKK', 'PKK', 'Bindo', 'MM', 'Sejarah'] },
  { hari: 'Selasa', mapel: ['PKK', 'PKK', 'Inggris', 'MM', 'Sejarah'] },
  { hari: 'Rabu', mapel: ['PKK', 'PKK', 'Matematika', 'MM', 'PJOK'] },
  { hari: 'Kamis', mapel: ['PKK', 'PKK', 'PKN', 'MM', 'Seni Budaya'] },
  { hari: 'Jumat', mapel: ['PKK', 'PKK', 'Agama', 'MM', 'Bahasa Jawa'] },
];

// DATA SISWA
const siswa = [
  { nama: 'Andi Wijaya', foto: 'img/foto-siswa-1.jpg' },
  { nama: 'Budi Santoso', foto: 'img/foto-siswa-2.jpg' },
  { nama: 'Citra Lestari', foto: 'img/foto-siswa-3.jpg' },
  { nama: 'Dewi Anggraeni', foto: 'img/foto-siswa-4.jpg' },
  { nama: 'Eko Prasetyo', foto: 'img/foto-siswa-5.jpg' },
  { nama: 'Fitri Handayani', foto: 'img/foto-siswa-6.jpg' },
  { nama: 'Guntur Wibowo', foto: 'img/foto-siswa-7.jpg' },
  { nama: 'Hana Susanti', foto: 'img/foto-siswa-8.jpg' },
  { nama: 'Indra Kurniawan', foto: 'img/foto-siswa-9.jpg' },
  { nama: 'Joko Nugroho', foto: 'img/foto-siswa-10.jpg' },
  { nama: 'Kiki Amalia', foto: 'img/foto-siswa-11.jpg' },
  { nama: 'Lina Marlina', foto: 'img/foto-siswa-12.jpg' },
  { nama: 'Maman Abdurrahman', foto: 'img/foto-siswa-13.jpg' },
  { nama: 'Nina Sari', foto: 'img/foto-siswa-14.jpg' },
  { nama: 'Oki Ramadhan', foto: 'img/foto-siswa-15.jpg' },
  { nama: 'Putri Amelia', foto: 'img/foto-siswa-16.jpg' },
  { nama: 'Rizky Pratama', foto: 'img/foto-siswa-17.jpg' },
];

// JADWAL PIKET (ROTASI)
const piket = [];
for (let i = 0; i < 7; i++) {
  const dayNames = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  piket.push({ hari: dayNames[i], nama: siswa[i % siswa.length].nama });
}

// RENDER JADWAL PELAJARAN
const tJadwal = document.getElementById('tabelJadwal');
tJadwal.innerHTML = '<tr><th>Hari</th><th>Jam 1</th><th>Jam 2</th><th>Jam 3</th><th>Jam 4</th><th>Jam 5</th></tr>';
jadwal.forEach(j => {
  tJadwal.innerHTML += `<tr><td>${j.hari}</td>${j.mapel.map(m => `<td>${m}</td>`).join('')}</tr>`;
});

// RENDER JADWAL PIKET
const tPiket = document.getElementById('tabelPiket');
tPiket.innerHTML = '<tr><th>Hari</th><th>Siswa Piket</th></tr>';
piket.forEach(p => {
  tPiket.innerHTML += `<tr><td>${p.hari}</td><td>${p.nama}</td></tr>`;
});

// RENDER DAFTAR SISWA
const gridSiswa = document.getElementById('gridSiswa');
siswa.forEach(s => {
  gridSiswa.innerHTML += `
    <div class="card-siswa">
      <img src="${s.foto}" onerror="this.src='https://via.placeholder.com/80?text=TKJ'"/>
      <p>${s.nama}</p>
    </div>`;
});

// FORUM DISKUSI (SIMPLE)
const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.createElement('p');
  msg.textContent = `Saya: ${chatInput.value}`;
  chatBox.appendChild(msg);
  chatInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});
