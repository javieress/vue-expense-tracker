<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([])

// get total
const total = computed(() => {
  return transactions.value.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)
})

// get income
const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
});

// get expenses
const expenses = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
});

// add transaction
const handleAddTransaction = (transaction) => {
  transactions.value.push(transaction)
  toast.success('Transaction added successfully')
}

// delete transaction
const handleDeleteTransaction = (id) => {
  transactions.value = transactions.value.filter(transaction => transaction.id !== id)
  toast.success('Transaction deleted successfully')
}

</script>

<template>
  <div id="app">
    <Header />
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" @deleteTransaction="handleDeleteTransaction" />
    <AddTransaction @addTransaction="handleAddTransaction" />
  </div>
</template>