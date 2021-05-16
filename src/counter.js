const Counter = {
  template: `
<span>Counter: {{ counter }}</span>
<button @click="inc">+</button>
<button @click="dec">-</button>
`,
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    },
  },
};
