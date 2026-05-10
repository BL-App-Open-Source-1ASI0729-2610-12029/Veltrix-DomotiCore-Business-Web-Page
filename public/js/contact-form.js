function sendForm() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('fe').value.trim();
  if (!n || !e) { alert(t('contact.form.alert')); return; }
  const msg = document.getElementById('smsg');
  msg.style.display = 'block';
  document.getElementById('fn').value = '';
  document.getElementById('fe').value = '';
  document.getElementById('fs').value = '';
  document.getElementById('fm').value = '';
  setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

window.sendForm = sendForm;
