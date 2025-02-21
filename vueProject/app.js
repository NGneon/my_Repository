const { createApp } = Vue;

createApp({
	data() {
		return {
			amount: null,
			fromCurrency: 'RUB',
			toCurrency: 'USD',
			currencies: ['USD', 'EUR', 'RUB'],
			exchangeRates: {
				USD: 1,
				EUR: 0.85,
				RUB: 73.5,
			},
			conversionHistory: [],
			maxHistoryItems: 15,
			convertedAmount: null,
		}
	},
	methods: {
		convertCurrency() {
			const result =
				this.amount *
				(this.exchangeRates[this.toCurrency] /
					this.exchangeRates[this.fromCurrency])
			this.convertedAmount = result.toFixed(2);
		},
		saveToHistory() {
			if (this.convertedAmount !== null) {
				const conversion = {
					from: this.fromCurrency,
					to: this.toCurrency,
					amount: this.amount,
					result: this.convertedAmount,
				}
				this.conversionHistory.unshift(conversion);
				if (this.conversionHistory.length > this.maxHistoryItems) {
					this.conversionHistory.pop();
				}
				this.saveHistoryToLocalStorage();
			}
		},
		clearHistory() {
			this.conversionHistory = [];
			this.saveHistoryToLocalStorage();
		},
		saveHistoryToLocalStorage() {
			localStorage.setItem(
				'conversionHistory',
				JSON.stringify(this.conversionHistory)
			);
		},
		loadHistoryFromLocalStorage() {
			const savedHistory = localStorage.getItem('conversionHistory');
			if (savedHistory) {
				this.conversionHistory = JSON.parse(savedHistory)
			}
		},
	},
	computed: {
		isValidInput() {
			return this.amount > 0 && this.fromCurrency !== this.toCurrency;
		},
	},
	mounted() {
		this.loadHistoryFromLocalStorage();
	},
}).mount('#app')
