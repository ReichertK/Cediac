fetch('formulario.html')
.then(response => response.text())
.then(content => {
    document.getElementById('form-container').innerHTML = content;
});