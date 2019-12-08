<template>
  <div>
    <el-menu-item
      v-if="itemData.Children==null"
      :index="itemData.Value.Urlstr.toString()"
      class="menu-item"
      :key="itemData.Id"
    >
      <router-link :to="itemData.Value.Urlstr">
        <i v-bind:class="itemData.Value.Icon" id="menu-item-icon"></i>
        <span class="menuTag">{{itemData.Name}}</span>
      </router-link>
    </el-menu-item>
    <el-submenu v-if="itemData.Children!=null" :index="itemData.Id.toString()" :key="itemData.Id">
      <template slot="title">
        <i v-bind:class="itemData.Value.Icon" id="menu-item-icon"></i>
        <span slot="title">{{itemData.Name}}</span>
      </template>
      <!--调用组件自身，循环item的nodes，实现递归 -->
      <mymenu v-for="item in itemData.Children" :item-data="item" :key="item.Id"></mymenu>
    </el-submenu>
  </div>
</template>


<script>
export default {
  // 组件递归必要条件，name属性
  name: "mymenu",
  props: {
    itemData: {
      type: Object,
      default: []
    }
  },
};
</script>