<template>
  <div class="settingBox">
    <div class="settingTop">
      <div class="setTop">
        <el-tabs @tab-click="handleTabClick" v-model="activeName" class="topLab">

            <el-tab-pane v-if="show('point-job')"  name="jobs" class="rInfo">
              <span slot="label">岗位管理</span>
              <component v-if="tabRefresh.jobs" v-bind:is="jobList"></component>
            </el-tab-pane>

            <el-tab-pane v-if="show('point-applicant-0')" name="applicantList0" class="rInfo">
              <span slot="label">简历初筛</span>
              <component v-if="tabRefresh.applicant0" v-bind:is="applicantList0"></component>
            </el-tab-pane>

            <el-tab-pane v-if="show('point-applicant-1')" name="applicantList1" class="rInfo">
              <span slot="label">笔试管理</span>
              <component v-if="tabRefresh.applicant1" v-bind:is="applicantList1"></component>
            </el-tab-pane>

            <el-tab-pane v-if="show('point-applicant-2')" name="applicantList2" class="rInfo">
              <span slot="label">面试管理</span>
              <component v-if="tabRefresh.applicant2" v-bind:is="applicantList2"></component>
            </el-tab-pane>

            <el-tab-pane v-if="show('point-applicant-3')" name="applicantList3" class="rInfo">
              <span slot="label">入职管理</span>
              <component v-if="tabRefresh.applicant3" v-bind:is="applicantList3"></component>
            </el-tab-pane>

            <el-tab-pane v-if="false" name="applicantList4" class="rInfo">
              <span slot="label">入职管理</span>
              <component v-bind:is="applicantList"></component>
            </el-tab-pane>

        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import jobList from './../components/job-list'
import applicantList0 from './../components/applicant-list0'
import applicantList1 from './../components/applicant-list1'
import applicantList2 from './../components/applicant-list2'
import applicantList3 from './../components/applicant-list3'

import {hasPermissionPoint} from '@/utils/permission'
export default {
  name: 'settings-table-index',
  components: { jobList,applicantList0,applicantList1,applicantList2,applicantList3 },
  data() {
    return {
      jobList: 'jobList',
      applicantList0:'applicantList0',
      applicantList1:'applicantList1',
      applicantList2:'applicantList2',
      applicantList3:'applicantList3',
      
      activeName: 'jobs',
      tabRefresh: {
        jobs: true,
        applicant0: false,
        applicant1: false,
        applicant2: false,
        applicant3: false,
      }
    }
  },
  methods: {
    show(name){
      return hasPermissionPoint(name)
    },
    handleTabClick(tab){
      this.activeName = tab.name
      console.log(this.activeName)
      switch (this.activeName) {
        case 'jobs':
          this.switchTab('jobs')
          break
        case 'applicantList0':
          this.switchTab('applicant0')
          break
        case 'applicantList1':
          this.switchTab('applicant1')
          break
        case 'applicantList2':
          this.switchTab('applicant2')
          break
        case 'applicantList3':
          this.switchTab('applicant3')
          break
      }
    },
    switchTab (tab) {
      for (let key in this.tabRefresh) {
        if (key === tab) {
          this.tabRefresh[key] = true
        } else {
          this.tabRefresh[key] = false
        }
      }
    }

  }
}
</script>
<style>
.disabled .el-upload--picture-card {
  display: none !important;
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
@import './../../styles/variables.scss';
.settingBox {
  padding: 20px;
  background: #fff;
  border-radius: 3px;
  margin: 15px;
  border: 1px solid #ebeef5;
  .setTop {
    color: #666;
    //border-bottom: solid 1px #ccc;
    line-height: 40px;
    span {
      display: inline-block;
      padding: 0 25px;
      font-size: 18px;
      cursor: pointer;
    }
    .act {
      color: $green;
      border-bottom: solid 2px $green;
    }
  }
  .settingCont {
    background: #fff;
    .tips {
      background: #f4f4f4;
      color: #666;
      margin: 10px 0;
      padding: 0 10px;
      line-height: 30px;
      i {
        margin-right: 5px;
        position: relative;
        top: 1px;
        color: $orange;
      }
    }
    .formList {
    }
    .jurisdictionSet {
      position: relative;
      .addAdmin {
        text-align: right;
        line-height: 40px;
        position: relative;
        top: -5px;
        i {
          border: solid 1px #666;
          color: #666;
          display: inline-block;
          margin-right: 5px;
          border-radius: 3px;
          padding: 0 3px 2px 3px;
          line-height: 12px;
        }
      }
      .jurTabLab {
        line-height: 40px;
        span {
          display: inline-block;
          margin-right: 20px;
          cursor: pointer;
        }
        .act {
          color: $green;
        }
      }
      .jurContent {
        .name-wrapper {
          span {
            display: inline-block;
            border: solid 1px #ccc;
            margin-right: 10px;
            padding: 0 10px;
            border-radius: 3px;
            background: #f4f4f4;
          }
        }
      }
    }
  }
  .inputWt {
    width: 400px;
  }
}
</style>
