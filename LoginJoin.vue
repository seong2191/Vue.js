<template>
  <div class="container">
      <div class="backbox">
        <LoginMsg></LoginMsg>
      </div>
      <div class="frontbox">
        <Login></Login>
        <Join></Join>
      </div>
  </div>

</template>

<script>
import Login from './LoginPage.vue'
import Join from './JoinPage.vue'
import LoginMsg from '../user/LoginMsg/LoginMsg.vue'
export default {
  components: {
    LoginMsg,
    Login,
    Join
  }
}
</script>

<style lang="scss">
 @import "@/assets/scss/loginjoin.scss"
</style>
