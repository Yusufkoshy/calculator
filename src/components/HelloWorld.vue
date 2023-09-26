<template>
  <div class="hello flex items-center justify-center">
    <form
      @submit.prevent="display()"
      name="calc"
      class="calc m-3 p-3 text-center"
    >
      <div name="display" class="display text-white p-8 my-3 rounded-lg">
        {{ calcValue || 0 }}
      </div>
      <div class="row no-gutters max-w-xs text-center">
        <div class="col-3" v-for="n in calculatorElements" :key="n">
          <div
            class="number text-center lead text-white m-1 py-1 px-4 rounded cursor-pointer"
          >
            {{ n }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      calcValue: "",
      calculatorElements: [
        "c",
        "*",
        "/",
        "-",
        7,
        8,
        9,
        "+",
        4,
        5,
        6,
        "%",
        1,
        2,
        3,
        "=",
        0,
        ".",
      ],
    };
  },

  methods: {
    display: function () {
      var btn = document.querySelector(".btn");
      this.cacValue = btn.value;
      console.log(this.calcValue);
      console.log(btn.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calc {
  margin: auto;
  border-radius: 5%;
  background-color: #4a148c;
  box-shadow: 0 0 4px 3px #f144e0;
  margin-top: 20px;
}
.number {
  border-color: #97fff4;
  border-width: 3px;
  border-radius: 10px;
  color: #97fff4;
  box-shadow: 0 0 4px 3px #f144e0;
}

// .clear {
//   color: #e74c3c;
//   background-color: transparent;
//   border-color: #e74c3c;
//   border-width: 3px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0 0 4px 3px #e74c3c;
// }

.display {
  border-color: #ffbbff;
  border-width: 2px;
  outline: #f144e0 solid 2px;
  box-shadow: 0 0 4px 3px #f144e0;
  background-color: #671ec0;
}
</style>
