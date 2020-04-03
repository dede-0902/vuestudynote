<template>
  <div class="all">
    <h2>{{message}}</h2>
    <Cpn></Cpn>
  </div>
</template>
<script>
import Cpn from '../vue/Cpn'
export default {
  name:'App',
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello,dede'
    }
  }
}
</script>
<style lang="">
  .all{
    background-color: #fff;
  }
</style>