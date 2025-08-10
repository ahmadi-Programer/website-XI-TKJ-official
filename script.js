const students = [
  'Putry','Jeriko','Pratiwi','Lista','Damar','Windi','Raka','Eki','Hendri',
  'Fajri','Fadly','Salsa','Dicky','Nadia','Rizky','Lutfi','Ayu'
];

// --- Schedule data ---
const schedule = [
  {day:'Senin',slots:['PKK','PKK','Bindo','MM','Sejarah']},
  {day:'Selasa',slots:['PKK','PKK','Inggris','MM','Sejarah']},
  {day:'Rabu',slots:['PKK','PKK','MTK','MM','PJOK']},
  {day:'Kamis',slots:['PKK','PKK','PKN','MM','Seni']},
  {day:'Jumat',slots:['PKK','PKK','Agama','MM','Jawa']}
];

// Render schedule
const stBody=document.querySelector('#scheduleTable tbody');
schedule.forEach(({day,slots})=>{
  stBody.innerHTML+=`<tr><td>${day}</td>${slots.map(s=>`<td>${s}</td>`).join('')}</tr>`;
});

// Render piket
const pBody=document.querySelector('#piketTable tbody');
['Senin','Selasa','Rabu','Kamis','Jumat'].forEach((d,i)=>{
  pBody.innerHTML+=`<tr><td>${d}</td><td>${students[i % students.length]}</td></tr>`;
});

// Render 17 student cards
const grid=document.getElementById('studentGrid');
students.forEach((name,i)=>{
  grid.innerHTML+=`
    <div class="card">
      <img src="assets/student-${i+1}.jpg" onerror="this.src='https://via.placeholder.com/100?text=${name}'"/>
      ${name}
    </div>`;
});

// Mini chat
const box=document.getElementById('chatBox');
document.getElementById('chatForm').addEventListener('submit',e=>{
  e.preventDefault();
  const p=document.createElement('p');
  p.textContent=`Anon: ${e.target.chatInput.value}`;
  box.appendChild(p);
  e.target.chatInput.value='';
  box.scrollTop=box.scrollHeight;
});

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
