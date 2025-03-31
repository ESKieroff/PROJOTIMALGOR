// criar programa para resolver o problema de otimização da mochila (knapsack problem)

class Knapsack {
    constructor(capacity, weights, values) {
        this.capacity = capacity;
        this.weights = weights;
        this.values = values;
        this.n = weights.length;
        this.dp = Array.from({ length: this.n + 1 }, () => Array(this.capacity + 1).fill(0));
    }
    
    solve() {
        // Preenchendo a tabela dp
        for (let i = 1; i <= this.n; i++) {
        for (let w = 0; w <= this.capacity; w++) {
            if (this.weights[i - 1] <= w) {
            this.dp[i][w] = Math.max(this.dp[i - 1][w], this.dp[i - 1][w - this.weights[i - 1]] + this.values[i - 1]);
            } else {
            this.dp[i][w] = this.dp[i - 1][w];
            }
        }
        }
    
        return this.dp[this.n][this.capacity];
    }
    }

const capacity =15;
const weights = [12, 4, 2, 1, 1];
const values = [4, 10, 2, 2, 1];
const knapsack = new Knapsack(capacity, weights, values);
const maxValue = knapsack.solve();
console.log(`Valor máximo que pode ser obtido: ${maxValue}`);
