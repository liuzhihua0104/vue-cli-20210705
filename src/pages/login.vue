<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script>
export default {
  name: "login",
  data() {
    return {
      storeName: "登录",
    };
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  flex: 1;
}

.el-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>