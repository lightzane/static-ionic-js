const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = null;
    amountInput.value = null;
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason?.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount?.trim().length <= 0
    ) {
        presentAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = `${enteredReason}: $${enteredAmount}`;

    expensesList.appendChild(newItem);
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', () => {
    clear();
});

const presentAlert = async () => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid inputs';
    alert.subHeader = 'Alert message';
    alert.message = 'Please enter valid reason and amount.';
    alert.buttons = ['Okay', 'Alright'];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
};