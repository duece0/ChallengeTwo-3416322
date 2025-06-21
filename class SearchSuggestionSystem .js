class SearchSuggestionSystem {
    constructor(products) {
        this.sortedProducts = [...products].sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        for (let i = 1; i <= searchWord.length; i++) {
            const prefix = searchWord.substring(0, i);
            const startIdx = this.lowerBound(prefix);
            const suggestions = [];
            for (let j = 0; j < 3; j++) {
                if (startIdx + j >= this.sortedProducts.length) break;
                const candidate = this.sortedProducts[startIdx + j];
                if (candidate.startsWith(prefix)) {
                    suggestions.push(candidate);
                } else {
                    break;
                }
            }
            result.push(suggestions);
        }
        return result;
    }

    lowerBound(prefix) {
        let left = 0;
        let right = this.sortedProducts.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.sortedProducts[mid] < prefix) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}