const $form = document.getAnimations('#form')
const $buttonMailto = document.getElementById('#mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}