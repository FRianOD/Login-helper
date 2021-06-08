function showPassword() {
    const eye = document.getElementById('eye')
    const eyeslash = document.getElementById('eye-slash')
    const fieldPasword = document.getElementById('field-password')

    if(eye.style.display === 'none') {
        eye.style.display = 'block'
        eyeslash.style.display = 'none'
        fieldPasword.type = 'text'
    } else {
        eye.style.display = 'none'
        eyeslash.style.display = 'block'
        fieldPasword.type = 'password'
    }
}

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault()
    alert('Logado!')
})