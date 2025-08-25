function saveChecklist() {
  const data = document.getElementById('newChecklist').value;
  localStorage.setItem('newChecklist', data);
  alert('Checklist kaydedildi!');
}

document.addEventListener('DOMContentLoaded', () => {
  const upload = document.getElementById('jsonUpload');
  if(upload){
    upload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        localStorage.setItem('uploadedChecklist', e.target.result);
        alert('Checklist JSON yüklendi!');
      };
      reader.readAsText(file);
    });
  }
});