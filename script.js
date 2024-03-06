const contentLogin = document.querySelector('.contentLogin');
const btnLogin = document.querySelector('header button');
const btnClose = document.querySelector('.closeBtn button');
const btnsVira = document.querySelectorAll('.page .btnVira');
const page = document.querySelector('.page');
const forms = contentLogin.querySelectorAll('form');

const toggleContentLogin = (isVisible) => {
    contentLogin.style.display = isVisible ? 'flex' : 'none';
    requestAnimationFrame(() => {
        contentLogin.style.transform = `scale(${isVisible ? 1 : 0.1})`;
        if (!isVisible) {
            page.classList.remove('flipped');

            forms.forEach(form => form.reset());

            const passInputs = contentLogin.querySelectorAll('.pass input');
            passInputs.forEach(input => input.type = "password");

            const viewIcon = contentLogin.querySelectorAll('.pass i');
            viewIcon.forEach(icon => {
                icon.classList.remove('fa-eye-low-vision')
                icon.classList.add('fa-eye')
            });
        }
    });
};

btnLogin.addEventListener('click', () => toggleContentLogin(true));
btnClose.addEventListener('click', () => toggleContentLogin(false));

btnsVira.forEach(btn => {
    btn.addEventListener('click', () => {
        page.classList.toggle('flipped');
        forms.forEach(form => form.reset());
    });
});

function viewPass(event, inputId) {
    event.preventDefault();
    event.stopPropagation();

    const inputPass = document.getElementById(inputId);
    inputPass.type = inputPass.type === "password" ? "text" : "password";

    const iconView = event.target;

    if (iconView.tagName === 'I' && (iconView.classList.contains('fa-eye') || iconView.classList.contains('fa-eye-low-vision'))) {
        iconView.classList.toggle('fa-eye');
        iconView.classList.toggle('fa-eye-low-vision');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.viewPass').forEach(icon => {
        icon.classList.add('hidden');
    });

    document.querySelectorAll('.pass input').forEach(input => {
        input.addEventListener('input', function() {
            const viewIcon = this.parentNode.querySelector('.viewPass');

            if (this.value !== '') {
                viewIcon.classList.remove('hidden');
            } else {
                viewIcon.classList.add('hidden');
            }
        });
    });
});
