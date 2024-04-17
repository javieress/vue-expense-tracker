<script setup>

import { defineProps } from 'vue'

const emit = defineEmits(['deleteTransaction'])

const props = defineProps({
    transactions: Array
})

const deleteTransaction = (id) => {
    emit('deleteTransaction', id)
}

</script>


<template>
    <div class="history">
        <h3>History</h3>
        <hr>
        <template v-if="transactions.length === 0" class="no-transactions">
            <p>No transactions</p>
        </template>
        <ul id="list" class="list">
            <li v-for="transaction in transactions" :key="transaction.id"
                :class="transaction.amount < 0 ? 'minus' : 'plus'">
                {{ transaction.text }} <span>{{ transaction.amount > 0 ? '+' : '-' }}${{ Math.abs(transaction.amount)
                    }}</span>
                <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
            </li>
        </ul>

    </div>
</template>

<style scoped>
.history {
    margin-bottom: 20px;
}

.history h3 {
    margin-bottom: 5px;
}

.list {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
}

.list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    margin: 5px 0;
}

.list li.minus {
    border-right: 5px solid #c0392b;
    transition: all 0.5s ease;
}

.list li.minus:hover {
    border-right: 10px solid #c0392b;
    background-color: #f9d5d5;
    scale: 1.025;
    transition: all 0.3s ease;
}

.list li.plus {
    border-right: 5px solid #2ecc71;
    transition: all 0.5s ease;
}

.list li.plus:hover {
    border-right: 10px solid #2ecc71;
    background-color: #d5f9d5;
    scale: 1.025;
    transition: all 0.3s ease;
}

.delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-120%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.list li:hover .delete-btn {
    opacity: 1;
}

.delete-btn:hover {
    background-color: #c0392b;
}

.no-transactions {
    text-align: center;
    margin-top: 20px;
}
</style>