<template>
  <div class="user">
    <!-- ****** BEGIN: dialog 弹窗 ****** -->
    <el-button
      type="primary"
      icon="el-icon-plus"
      @click="dialogVisible = true"
      class="add-user-button"
      size="mini"
    >
      新增用户
    </el-button>
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="姓名">
          <el-input
            v-model="form.name"
            style="width: 30%"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input
            v-model="form.age"
            style="width: 30%"
            placeholder="请输入年龄"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" style="width: 50%">
          <el-date-picker
            type="date"
            placeholder="选择出生日期"
            v-model="form.birthday"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" style="width: 70%">
          <el-input v-model="form.address" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <!-- ****** E N D: dialog 弹窗 ****** -->
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        sex: "",
        age: "",
        birthday: "",
        address: "",
      },
    };
  },
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClose(done) {
      this.$confirm("内容未保存，确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
button.add-user-button {
  margin-top: 20px;
}
</style>