<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <myinfoblock title="用户数1" :number="accountNum" class="el-icon-s-custom" iconcolor="#67C23A"></myinfoblock>
      </el-col> 
      <el-col :span="6">
        <myinfoblock title="订单总数2" :number="policyNum" class="el-icon-s-claim" iconcolor="#F56C6C"></myinfoblock>
      </el-col>
      <el-col :span="6">
        <myinfoblock title="保单总额" number="99999" class="el-icon-s-order" iconcolor="#E6A23C"></myinfoblock>
      </el-col>
      <el-col :span="6">
        <myinfoblock title="保费总额" number="99999" class="el-icon-s-goods" iconcolor="#909399"></myinfoblock>
      </el-col>
    </el-row>

    <el-row :gutter="20" id="homepage-linetwo">
      <el-col :span="16">
        <el-card class="tongji">
          <div id="echart" class="echart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>最新消息</span>
            <el-button type="text" v-on:click="jump('/BasicSettings/Message')">查看更多</el-button>
          </div>
          <!-- <div v-for="item in latestNews" class="latestnews"> -->
            <div class="latestnews">
            <!-- <span>{{item.OperationContent}}</span>
            <span>{{item.LogTime_str}}</span> -->
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-col :span="24" id="homepage-linethree">
      <el-card>
        <div slot="header" class="clearfix">
          <span>诉讼列表</span>
          <el-button type="text" v-on:click="jump('/Case/Policy')">查看更多</el-button>
        </div>

        <el-table :data="tableData" border>
          <el-table-column prop="Account_name" label="联系人"></el-table-column>
          <el-table-column prop="Account_tel" label="联系方式"></el-table-column>
          <el-table-column prop="Applicant" label="申请人"></el-table-column>
          <el-table-column prop="Amount_str" label="保全金额（元）"></el-table-column>
          <el-table-column prop="EstimatedCost_str" label="保费"></el-table-column>
          <el-table-column prop="PostTime_str" label="创建时间"></el-table-column>
          <el-table-column prop="CourtId_str" label="法院"></el-table-column>
          <el-table-column prop="Status" label="状态">
            <template slot-scope="scope">
              <el-tag :type="scope.row.TagType" disable-transitions>{{scope.row.Status_str}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import myinfoblock from "@/components/mincomponent/InfoBlock.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      latestNews: [],
      tableData: [],
      accountNum: 0,
      policyNum: 0
    };
  },
  components:{
    myinfoblock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
