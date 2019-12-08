<template>
    <el-card class="box-card homepageInfo" v-on:mouseenter.native="enter($event)" v-on:mouseleave.native="leave($event)">
    <div class="my-icon">
        <i :class=classname></i>
    </div>
    <div class="homepageInfo-content">
        <p>{{title}}</p>
        <p>{{number}}</p>
    </div>
</el-card>
</template>

<script>
   export default {
       data() {
       },
   }
</script>