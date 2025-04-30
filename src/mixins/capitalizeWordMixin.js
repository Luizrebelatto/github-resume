export default {
    methods: {
      capitalizeWords(text) {
        if (!text) return '';
        return text
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
    }
  }
  