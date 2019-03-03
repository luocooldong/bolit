<template>
  <div class="hello">
    <div>
      <img src="../assets/robot-home.png" alt="" class="robot" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build">Get Started</router-link>
      building your first robot!
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.robot {
  height: 300px;
}
</style>
