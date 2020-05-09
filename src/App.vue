<template>
  <div>
    <Game/>
    <Gangle/>
    <Ranking/>
  </div>
</template>


<script>
import Game from '@/components/Game'
import Gangle from '@/views/Gangle'
import Ranking from '@/views/Ranking'
export default {
  name: 'App',
  components: { 
    Game,
    Gangle,
    Ranking 
  },
  data(){
    return{
      a:0
    }
  }
}
</script>


<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: black;
}
</style>
