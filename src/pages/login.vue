<template>
  <div>
    我是登录页面
  </div>
</template>

<script>
export default {
  name:"login",
  data(){
    return{
      storeName:"登录"
    }
  },
  mounted(){
    console.log(this.$route)
  }

}
</script>