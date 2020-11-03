<template>
  <div id="app">
    <header id="header">
      <h1>数据可视化-ECharts</h1>
      <div class="show-time">
        当前时间: {{time}}
      </div>
    </header>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>柱形图-就业行业</h2>
          <!-- <div class="chart"></div> -->
          <chart1 class="chart" :resize="resizeFlag"></chart1>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化 <a href="javacript:;" @click="changeChart2(0,$event)">2020</a
            ><a href="javascript:;"  @click="changeChart2(1,$event)">2021</a>
          </h2>
          <chart2 class="chart" :resize="resizeFlag" :list="yearData[currentChart2Index].data"></chart2>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <chart3 class="chart" :resize="resizeFlag"></chart3>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <ul class="no-hd">
            <li>125811</li>
            <li>100000</li>
          </ul>
          <ul class="no-bd">
            <li>前端需求人数</li>
            <li>市场供应人数</li>
          </ul>
        </div>
        <!-- 地图模块 -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <!-- <div class="chart"></div> -->
          <chart-map class="chart" :resize="resizeFlag"></chart-map>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>柱形图-就业行业</h2>
          <chart4 class="chart" :resize="resizeFlag"></chart4>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图-播放量</h2>
          <chart5 class="chart" :resize="resizeFlag"></chart5>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼形图-地区分布</h2>
          <chart6 class="chart" :resize="resizeFlag"></chart6>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chart1 from '@/components/home/Chart1'
import Chart2 from '@/components/home/Chart2'
import Chart3 from '@/components/home/Chart3'
import Chart4 from '@/components/home/Chart4'
import Chart5 from '@/components/home/Chart5'
import Chart6 from '@/components/home/Chart6'
import ChartMap from '@/components/home/ChartMap'
import _ from 'lodash'

export default {
  name: 'App',
  components: {
    Chart1, Chart2, Chart3, Chart4, Chart5, Chart6, ChartMap
  },
  data () {
    return {
      resizeFlag: 0,
      time: '',

      // Chart2切换数据
      currentChart2Index: 0,
      yearData: [
        {
          year: '2020', // 年份
          data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: '2021', // 年份
          data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ]
    }
  },
  mounted () {
    this.setTime()
    this.initTime()
    window.addEventListener('resize', this.resizeHandle)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandle)
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    resizeHandle: _.throttle(function (e) {
      // 设置统一的resize标识，传入图表组件，自动监听变化去resize
      this.resizeFlag++

      // 每一个示例都调用 resize()
      // this.chartColumn && this.chartColumn.resize()
      // this.chartBar && this.chartBar.resize()
      // this.chartLine && this.chartLine.resize()
      // this.chartPie && this.chartPie.resize()
      // this.chartInstance && this.chartInstance.resize()
    }, 300),

    initTime () {
      this.timer = setInterval(() => {
        this.setTime()
      }, 1000)
    },
    setTime () {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDay()
      const h = date.getHours()
      const m = date.getMinutes()
      const s = date.getSeconds()
      this.time = `${year}年${this.formatNumber(month)}月${this.formatNumber(day)}日 - ${this.formatNumber(h)}时${this.formatNumber(m)}分${this.formatNumber(s)}秒`
    },
    formatNumber (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    },

    changeChart2 (index, $event) {
      this.currentChart2Index = index
      $event.preventDefault()
    }
  }
}
</script>
