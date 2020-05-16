<template>
  <div>
    <router-view />
  </div>
</template>


<script>

export default {
  name: 'App',
}
</script>


<style lang="scss">
*{
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  background-color: white;
}
body{
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>
