// ФОРМА
const form = document.getElementById('regForm');

// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
const patterns = {
    sename:   /^[A-Za-zА-Яа-яЁё\s]+$/,                 // ФИО: буквы и пробел
    name:     /^[A-Za-zА-Яа-яЁё\s]+$/,                 // Имя
    surname:  /^[A-Za-zА-Яа-яЁё\s]+$/,                 // Отчество
    login:    /^[A-Za-z0-9!@#$%^&*]{15,}$/,            // Логин: ≥15 символов
    email:    /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/,   // Email
    age:      /^(1[89]|[2-9][0-9])$/,                  // Возраст 18–99
    password: /^[А-Яа-яЁё0-9!@#$%^&*]{15,}$/           // Пароль: ≥15 символов
};


// ПОЛЯ
const senameInput   = document.getElementById('sename');
const nameInput     = document.getElementById('name');
const surnameInput  = document.getElementById('surname');
const loginInput    = document.getElementById('login');
const emailInput    = document.getElementById('email');
const ageInput      = document.getElementById('age');
const passwordInput = document.getElementById('password');


// МЕСТА ДЛЯ ОШИБОК
const senameError   = document.getElementById('senameError');
const nameError     = document.getElementById('nameError');
const surnameError  = document.getElementById('surnameError');
const loginError    = document.getElementById('loginError');
const emailError    = document.getElementById('emailError');
const ageError      = document.getElementById('ageError');
const passwordError = document.getElementById('passwordError');


// СООБЩЕНИЕ ФОРМЫ
const formMessage = document.getElementById('formMessage');


// ПРОВЕРКА ПРИ ВВОДЕ — ошибка исчезает сразу, если поле исправлено
senameInput.addEventListener('input', () => {
    if (patterns.sename.test(senameInput.value)) senameError.textContent = '';
});

nameInput.addEventListener('input', () => {
    if (patterns.name.test(nameInput.value)) nameError.textContent = '';
});

surnameInput.addEventListener('input', () => {
    if (patterns.surname.test(surnameInput.value)) surnameError.textContent = '';
});

loginInput.addEventListener('input', () => {
    if (patterns.login.test(loginInput.value)) loginError.textContent = '';
});

emailInput.addEventListener('input', () => {
    if (patterns.email.test(emailInput.value)) emailError.textContent = '';
});

ageInput.addEventListener('input', () => {
    if (patterns.age.test(ageInput.value)) ageError.textContent = '';
});

passwordInput.addEventListener('input', () => {
    if (patterns.password.test(passwordInput.value)) passwordError.textContent = '';
});



// ОТПРАВКА ФОРМЫ
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Очищаем все ошибки и сообщение
    senameError.textContent = '';
    nameError.textContent = '';
    surnameError.textContent = '';
    loginError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';

    let ok = true;

    // ===== Фамилия =====
    if (!patterns.sename.test(senameInput.value)) {
        senameError.textContent = 'Только буквы и пробел';
        ok = false;
    }

    // ===== Имя =====
    if (!patterns.name.test(nameInput.value)) {
        nameError.textContent = 'Только буквы и пробел';
        ok = false;
    }

    // ===== Отчество =====
    if (!patterns.surname.test(surnameInput.value)) {
        surnameError.textContent = 'Только буквы и пробел';
        ok = false;
    }

    // ===== Логин =====
    if (!patterns.login.test(loginInput.value)) {
        loginError.textContent = 'Минимум 15 символов: латиница, цифры, спецсимволы';
        ok = false;
    }

    // ===== Email =====
    if (!patterns.email.test(emailInput.value)) {
        emailError.textContent = 'Пример: user@mail.ru';
        ok = false;
    }

    // ===== Возраст =====
    if (!patterns.age.test(ageInput.value)) {
        ageError.textContent = 'От 18 до 99';
        ok = false;
    }

    // ===== Пароль =====
    if (!patterns.password.test(passwordInput.value)) {
        passwordError.textContent = 'Минимум 15 символов: кириллица, цифры, спецсимволы';
        ok = false;
    }

    // ===== Итог =====
    if (ok) {
        formMessage.textContent = '✅ Форма отправлена!';
        formMessage.style.color = 'green';

        // form.submit();   // раскомментируйте, когда будет сервер
    } else {
        formMessage.textContent = '❌ Проверьте правильность заполнения';
        formMessage.style.color = 'red';
    }
});