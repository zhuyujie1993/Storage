<template>
  <div id="app">
    <el-container
      class="top-container"
      style="min-height:60px;"
      v-loading.fullscreen.lock="fullscreenLoading"
      :element-loading-text="loadingText"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-header class="top" height="100%">
        <el-row>
          <el-col :span="5" class="logo">法律保险系统</el-col>
          <el-col :span="19" class="info">
            <div class>昵称</div>
            <div class="head">
              <el-dropdown placement="bottom">
                <span class="el-dropdown-link">
                  <el-avatar icon="el-icon-user-solid headtitle" :size="40"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div>当前角色：系统管理员</div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
    <el-container class="index">
      <el-aside class="aside" style="width:200px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="rgb(38,50,56)"
          :unique-opened="true"
          text-color="#fff"
          :active-text-color="SelTextCol"
          style="width:100%"
          :collapse="isCollapse"
        >
          <div v-for="(item,index) in treedata" :item-data="item" :key="index" :active-text-color="SelTextCol">
          <mymenu :itemData=item></mymenu>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="childpage">
          <router-view v-if="isReload"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mymenu from "@/components/menu.vue";

export default {
  name: "app",
  data() {
    return {
      treedata: [],
      haveselected: "",
      navSelect: "",
      SelTextCol: "white",
      isCollapse: false,
      isReload: true,
      loading: false,
      overallCurrentNode: "",
      overallIsEdit: false,
      overtreecode: "",
      fullscreenLoading: false,
      loadingText: ""
    };
  },
  components: {
    mymenu
  },
  methods: {
    reload: function() {
      console.log("reload");
      this.isReload = false;
      this.$nextTick(function() {
        this.isReload = true;
      });
    }
  },
  created() {
    this.navSelect = this.$route.path;
    var obj = this;
    //get或者post , api为接口地址
    this.$axios({
      method: "post",
      url: "/Admin/GetMenu",
      data: {
        //get这里应为params
        //请求参数
      },
      //withCredentials:true, //局部携带cookie
      headers: {} //如果需要添加请求头可在这写
    }).then(res => {
        //res是返回结果
        if (res.Status != "" || res.Status != null) {
          obj.treedata = res.data;
          console.log(obj.treedata)
        } else {
          obj.$message({
            type: "error",
            message: "获取数据失败:" + res.Describe
          });
        }
      }).catch(err => {
          console.log(err);
        //请求失败就会捕获报错信息
        //err.response可拿到服务器返回的报错数据
      });

  }
};

</script>
