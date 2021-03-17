window.addEventListener('load', () => {
    const $ = id => document.getElementById(id);
    let empForm = $('empForm');
    empForm.addEventListener('click', (e) => {
        let child = e.target.id;
        if (child === "submit") {
            e.preventDefault();
            empForm.reportValidity(); //Bringing back HTML5 constraint validation
            if (empForm.checkValidity() === true) {
            console.log(`ID: ${$('id').value}\nName: ${$('name').value}\nExtension: ${$('ext').value}\nEmail: ${$('email').value}\nDepartment: ${$('department').value}`);
            }
        }
    });
});