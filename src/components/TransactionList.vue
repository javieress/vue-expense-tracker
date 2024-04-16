<script>
export default {
    name: 'TransactionList'
}
</script>

<template>
    <div class="history">
        <h3>History</h3>
        <hr>
        <ul id="list" class="list">
            <li class="minus">
                <span>Cash</span>
                <span>
                    -$400
                    <button class="delete-btn">x</button>
                </span>
            </li>
            <li class="plus">
                <span>Paycheck</span>
                <span>
                    +$400
                    <button class="delete-btn">x</button>
                </span>
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
</style>