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
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化 <a href="javacript:;">2020</a
            ><a href="javascript:;">2021</a>
          </h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart"></div>
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
          <div class="chart"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图-播放量</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼形图-地区分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      time: ''
    }
  },
  mounted () {
    this.setTime()
    this.initTime()
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
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
    }
  }
}
</script>
