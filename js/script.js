let balance = 0;

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginScreen = document.getElementById('login-screen');
const appContainer = document.querySelector('.app-container');
const userNameDisplay = document.getElementById('user-name');
const balanceDisplay = document.getElementById('balance');
const sendAmountInput = document.getElementById('send-amount');
const rechargeAmountInput = document.getElementById('recharge-amount');
const loanAmountInput = document.getElementById('loan-amount');
const screens = document.querySelectorAll('.screen');

const login = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === "user" && password === "password") {
        loginScreen.style   = 'display:none;'
        loginScreen.classList.add('hidden');
        appContainer.classList.remove('hidden');
        userNameDisplay.textContent = username;
        showSection('dashboard');
    } else {
        alert("Invalid login credentials");
    }
};

const logout = () => {
    loginScreen.classList.remove('hidden');
    appContainer.classList.add('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
};

const sendMoney = () => {
    const sendAmount = parseFloat(sendAmountInput.value);
    if (sendAmount && sendAmount > 0) {
        if (sendAmount <= balance) {
            balance -= sendAmount;
            updateBalance();
            alert("Money sent successfully.");
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid amount to send.");
    }
    sendAmountInput.value = '';
};

const rechargePhone = () => {
    const rechargeAmount = parseFloat(rechargeAmountInput.value);
    if (rechargeAmount && rechargeAmount > 0) {
        if (rechargeAmount <= balance) {
            balance -= rechargeAmount;
            updateBalance();
            alert("Phone recharged successfully");
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid amount to recharge.");
    }
    rechargeAmountInput.value = '';
};

const applyLoan = () => {
    const loanAmount = parseFloat(loanAmountInput.value);
    if (loanAmount && loanAmount > 0) {
        balance += loanAmount;
        updateBalance();
        alert("Loan applied successfully");
    } else {
        alert("Please enter a valid amount for the loan.");
    }
    loanAmountInput.value = '';
};

const updateBalance = () => {
    balanceDisplay.textContent = balance.toFixed(2);
};

const showSection = (sectionId) => {
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('visible');
    });
    const section = document.getElementById(sectionId);
    section.classList.add('visible');
    section.classList.remove('hidden');
};

document.addEventListener('DOMContentLoaded', () => {
    appContainer.classList.add('hidden');
});
