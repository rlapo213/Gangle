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
  background-color: black;
  
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
