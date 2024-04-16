<script>
export default {
    name: 'IncomeExpenses'
}
</script>

<template>
    <div class="inc-exp-container">
        <div class="income">
            <h4>INCOME</h4>
            <p class="money plus
            ">+$0.00</p>
        </div>
        <hr>
        <div class="expense">
            <h4>EXPENSE</h4>
            <p class="money minus">-$0.00</p>
        </div>
    </div>
</template>

<style scoped>
.inc-exp-container {
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
}

.inc-exp-container div {
    text-align: center;
}

.inc-exp-container div p {
    font-size: 20px;
    margin: 5px 0;
}

.plus {
    color: #2ecc71;
}

.minus {
    color: #c0392b;
}
</style>