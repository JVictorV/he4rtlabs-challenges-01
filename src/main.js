const hoursPerDayInput = document.getElementById('hoursPerDay');
const workDaysInput = document.getElementById('workDays');
const vacancyDaysInput = document.getElementById('vacancyDays');
const budgetInput = document.getElementById('budget');

const resultElement = document.getElementById('result');

const submitButton = document.getElementById('submit');

function isFormValid() {
    return (
        hoursPerDayInput.checkValidity() &&
        workDaysInput.checkValidity() &&
        vacancyDaysInput.checkValidity() &&
        budgetInput.checkValidity()
    );
}

function calculateValuePerHour() {
    const budget = Number(budgetInput.value);
    const workDays = Number(workDaysInput.value);
    const hoursPerDay = Number(hoursPerDayInput.value);
    const vacancyDays = Number(vacancyDaysInput.value);

    return (
        budget / (workDays * 4 * hoursPerDay) +
        vacancyDays * workDays * hoursPerDay
    ).toFixed(0);
}

submitButton.onclick = () => {
    if (isFormValid()) {
        resultElement.innerText = `R$${calculateValuePerHour()}/h`;
    }
};
