<script setup>

import { ref, computed } from 'vue'
import { useToast } from "vue-toastification";

const toast = useToast();

const emit = defineEmits(['addTransaction']);

const text = ref('');
const amount = ref(0);

const addTransaction = () => {
    if (!text.value || !amount.value) {
        toast.error('Please add a text and amount');
        return;
    }

    const transactionData = {
        id: Math.floor(Math.random() * 100000000),
        text: text.value,
        amount: +amount.value
    };

    emit('addTransaction', transactionData);

    text.value = '';
    amount.value = 0;

};


</script>

<template>
    <div>
        <h3>Add new transaction</h3>
        <hr>
        <form id="form" @submit.prevent="addTransaction">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" placeholder="Enter text..." v-model="text" />
            </div>
            <div class="form-control">
                <label for="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" step="0.01" id="amount" placeholder="Enter amount..." v-model="amount" />
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </div>
</template>

<style scoped>
h3 {
    margin-bottom: 5px;
}

form {
    margin-top: 20px;
}

.form-control {
    margin-bottom: 10px;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    background: #444;
}
</style>