<template>
  <el-tabs class="analysis__tab" v-model="activeTab">
    <el-tab-pane label="销售量" name="totalSales">
      <el-row>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="16" :xl="16"
          class="tab__chart"
        >
          <h4 class="chart__title">销售趋势</h4>
          <chart-bar
            class="chart__body"
            :labels="chartData.labels"
            :datasets="chartData.datasets"
            :options="chartOptions"
          ></chart-bar>
        </el-col>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
          class="tab__rank"
        >
          <h4 class="rank__title">门店销售额排名</h4>
          <Rank></Rank>
        </el-col>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="访问量" name="totalVisitors">
      <el-row>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="16" :xl="16"
          class="tab__chart"
        >
          <h4 class="chart__title">访问量趋势</h4>
          <chart-bar
            class="chart__body"
            :labels="chartData.labels"
            :datasets="chartData.datasets"
            :options="chartOptions"
          ></chart-bar>
        </el-col>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
          class="tab__rank"
        >
          <h4 class="rank__title">门店访问量排名</h4>
          <Rank></Rank>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ChartBar from 'COMPONENTS/Chart/Bar'
import Rank from 'COMPONENTS/Rank'
export default {
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          labels: ['sample'],
          datasets: [1]
        }
      }
    }
  },

  data () {
    return {
      activeTab: 'totalSales',
      chartOptions: {
        responsive: true, // 设置 true 以适应容器宽高
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    }
  },

  components: {
    ChartBar,
    Rank
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.analysis
  &__tab
    padding: 16px
    background-color: $background-lightest
    font-size: 14px
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
    border-radius: 4px

.chart__title, .rank__title
  margin-top: 0
  margin-bottom: 20px
  color: rgba(0,0,0,.85)
  font-weight: 500

.chart
  &__body
    height: 260px

.rank__title
  padding: 0 32px 0 72px

/deep/ .el-tabs__header
  margin-bottom: 24px

</style>
