<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <van-button type="primary">1234646</van-button>
    </el-main>
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
<style scoped lang="less">
.el-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size:0.32rem;

  .el-header,
  .el-footer {
    background-color: skyblue;
    color: #333;
    text-align: center;
    height:1rem !important;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    flex: 1;
  }
}
</style>