<template>
  <div class="root">
    <div class="calculator section">
      <div class="result" style="grid-area: result">
        {{ equation }}
      </div>

      <button class="button button--round" style="grid-area: ac" @click="clear">
        AC
      </button>
      <button
        class="button button--round"
        style="grid-area: plus-minus"
        @click="calculateToggle"
      >
        ±
      </button>
      <button
        class="button button--round"
        style="grid-area: percent"
        @click="calculatePercentage"
      >
        %
      </button>
      <button
        class="button button--round"
        style="grid-area: add"
        @click="append('+')"
      >
        +
      </button>
      <button
        class="button button--round"
        style="grid-area: subtract"
        @click="append('-')"
      >
        -
      </button>
      <button
        class="button button--round"
        style="grid-area: multiply"
        @click="append('×')"
      >
        ×
      </button>
      <button
        class="button button--round"
        style="grid-area: divide"
        @click="append('÷')"
      >
        ÷
      </button>
      <button
        class="button button--round"
        style="grid-area: equal"
        @click="calculate"
      >
        =
      </button>
      <button
        class="button button--round"
        style="grid-area: number-1"
        @click="append(1)"
      >
        1
      </button>
      <button
        class="button button--round"
        style="grid-area: number-2"
        @click="append(2)"
      >
        2
      </button>
      <button
        class="button button--round"
        style="grid-area: number-3"
        @click="append(3)"
      >
        3
      </button>
      <button
        class="button button--round"
        style="grid-area: number-4"
        @click="append(4)"
      >
        4
      </button>
      <button
        class="button button--round"
        style="grid-area: number-5"
        @click="append(5)"
      >
        5
      </button>
      <button
        class="button button--round"
        style="grid-area: number-6"
        @click="append(6)"
      >
        6
      </button>
      <button
        class="button button--round"
        style="grid-area: number-7"
        @click="append(7)"
      >
        7
      </button>
      <button
        class="button button--round"
        style="grid-area: number-8"
        @click="append(8)"
      >
        8
      </button>
      <button
        class="button button--round"
        style="grid-area: number-9"
        @click="append(9)"
      >
        9
      </button>
      <button
        class="button button--round1"
        style="grid-area: number-0"
        @click="append(0)"
      >
        0
      </button>
      <button
        class="button button--round"
        style="grid-area: dot"
        @click="append('.')"
      >
        ·
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Calculator extends Vue {
  equation: string = '0';
  isDecimalAdded: boolean = false;
  isOperatorAdded: boolean = false;
  isStarted: boolean = false;

  /**
   * Check if the character is + / - / × / ÷
   */
  isOperator(character: string) {
    return ['+', '-', '×', '÷'].indexOf(character) > -1;
  }

  /**
   * When pressed Operators or Numbers
   */
  append(character: string) {
    // Start
    if (this.equation === '0' && !this.isOperator(character)) {
      if (character === '.') {
        this.equation += '' + character;
        this.isDecimalAdded = true;
      } else {
        this.equation = '' + character;
      }

      this.isStarted = true;
      return;
    }

    // If Number
    if (!this.isOperator(character)) {
      if (character === '.' && this.isDecimalAdded) {
        return;
      }

      if (character === '.') {
        this.isDecimalAdded = true;
        this.isOperatorAdded = true;
      } else {
        this.isOperatorAdded = false;
      }

      this.equation += '' + character;
    }

    // Added Operator
    if (this.isOperator(character) && !this.isOperatorAdded) {
      this.equation += '' + character;
      this.isDecimalAdded = false;
      this.isOperatorAdded = true;
    }
  }

  /**
   * When pressed '='
   */
  calculate() {
    let result = this.equation
      .replace(new RegExp('×', 'g'), '*')
      .replace(new RegExp('÷', 'g'), '/');

    let ans: number = eval(result);
    if (ans < 1.0e9) {
      this.equation = parseFloat(ans.toFixed(9)).toString();
    } else {
      this.equation = parseFloat(ans.toExponential(3)).toString();
    }
    this.isDecimalAdded = false;
    this.isOperatorAdded = false;
  }

  /**
   * When pressed '+/-'
   */
  calculateToggle() {
    if (this.isOperatorAdded || !this.isStarted) {
      return;
    }

    this.equation = this.equation + '* -1';
    this.calculate();
  }

  /**
   *  When pressed '%'
   */
  calculatePercentage() {
    if (this.isOperatorAdded || !this.isStarted) {
      return;
    }

    this.equation = this.equation + '* 0.01';
    this.calculate();
  }

  /**
   * When pressed 'AC'
   */
  clear() {
    this.equation = '0';
    this.isDecimalAdded = false;
    this.isOperatorAdded = false;
    this.isStarted = false;
  }
}
</script>

<style lang="scss" scoped>
.root {
  @include f-r-c;
  min-height: 100vh;
  background-color: $background;
}
.calculator {
  --button-width: 80px;
  --button-height: 80px;

  display: grid;
  grid-template-areas:
    'result result result result'
    'ac plus-minus percent divide'
    'number-7 number-8 number-9 multiply'
    'number-4 number-5 number-6 subtract'
    'number-1 number-2 number-3 add'
    'number-0 number-0 dot equal';
  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(6, var(--button-height));

  box-shadow: -8px -8px 16px -10px rgba(255, 255, 255, 1),
    8px 8px 16px -10px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 20px;
}
.calculator button {
  margin: 8px;
  font-size: 24px;
  font-family: Helvetica;
}
.calculator button:active {
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset,
    4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
}
.result {
  text-align: right;
  line-height: var(--button-height);
  font-size: 48px;
  font-family: Helvetica;
  padding: 0 20px;
  color: #666666;
  overflow: hidden;
}
</style>
