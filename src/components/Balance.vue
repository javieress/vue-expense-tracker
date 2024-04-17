<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    total: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <div class="balance">
        <h4>YOUR BALANCE</h4>
        <h1>${{ total.toFixed(2) }}</h1>
    </div>
</template>

<style scoped>
.balance {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}

.balance h4 {
    margin-bottom: 2px;
}

.balance h1 {
    font-size: 40px;
    margin: 0;
}
</style>