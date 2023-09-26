<template>
  <HelloWorld msg="Simple Calculator" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

html {
  background-color: #671ec0;
}
</style>
