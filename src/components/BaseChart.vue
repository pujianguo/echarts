<template>
  <div class="chart-base" :ref="chartName"></div>
</template>
<script>
import echarts from 'echarts'

export default {
  props: {
    chartName: {
      type: String,
      default: 'chartBase'
    },
    resize: Number, // 一般在一个页面有多个图，只在父级页面监听window.resize,通过变量控制传到子组件中来更新resize
    refresh: Boolean, // 数据变化时，通过refresh字段控制刷新图例
    option: Object
  },
  data () {
    return {
    }
  },
  watch: {
    refresh () {
      this.drawChart()
    },
    resize () {
      this.resizeHandle()
    }
  },
  methods: {
    initChart () {
      const dom = this.$refs[this.chartName]
      echarts.init(dom, 'light').setOption(this.option) // 第一次需要初始化
      this.chartInstance = echarts.getInstanceByDom(dom)
    },
    initChart1 () {
      const dom = this.$refs[this.chartName]
      this.chartInstance = echarts.init(dom, 'light').setOption(this.option) // 第一次需要初始化
    },
    drawChart () {
      if (!this.chartInstance) {
        this.initChart()
      } else {
        this.chartInstance.clear()
      }
      this.chartInstance.setOption(this.option)
    },
    // showLoading、hideLoading可以暴露给父组件，结合异步加载数据来显示
    showLoading () {
      if (!this.chartInstance) {
        this.initChart()
      }
      this.chartInstance.showLoading('default', { color: '#00AD94' })
    },
    hideLoading () {
      this.chartInstance && this.chartInstance.hideLoading()
    },
    resizeHandle () {
      this.chartInstance && this.chartInstance.resize()
    }
  },
  mounted () {
    this.chartInstance = null
  },
  beforeDestroy () {
    this.chartInstance && this.chartInstance.dispose()
  }
}
</script>

<style lang="scss">
.chart-base{
  width: 100%;
  height: 100%;
}
</style>
