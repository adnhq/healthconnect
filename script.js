const toggleOptions = document.querySelectorAll('.toggle-option');
const patientFields = document.querySelectorAll('.patient-only');
const doctorFields = document.querySelectorAll('.doctor-only');

toggleOptions.forEach(option => {
  option.addEventListener('click', () => {
    toggleOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');

    if (option.dataset.toggle === 'patient') {
      patientFields.forEach(field => field.style.display = 'block');
      doctorFields.forEach(field => field.style.display = 'none');
    } else {
      patientFields.forEach(field => field.style.display = 'none');
      doctorFields.forEach(field => field.style.display = 'block');
    }
  });
});