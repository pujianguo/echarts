<template>
  <div ref="chart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    resize: Number
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
    resize () {
      this.resizeHandle()
    }
  },
  created () {
    this.chartInstance = null
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    this.chartInstance && this.chartInstance.dispose()
  },
  methods: {
    initChart () {
      this.chartInstance = echarts.init(this.$refs.chart)
      const option = {
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis', // 触发类型 item | axis | none
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 修改图表的大小
        grid: {
          left: '0%',
          top: '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true // 包含刻度文字在内
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '旅游行业',
              '教育培训',
              '游戏行业',
              '医疗行业',
              '电商行业',
              '社交行业',
              '金融行业'
            ],
            // 刻度线
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签 相关样式
            axisLabel: {
              color: 'rgba(255,255,255,.6) ',
              fontSize: '12'
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签 相关样式
            axisLabel: {
              color: 'rgba(255,255,255,.6) ',
              fontSize: 12
            },
            // y轴的线条改为了 2像素
            axisLine: {
              lineStyle: {
                // type: "solid"
                color: 'rgba(255,255,255,.1)',
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
          }
        ]
      }
      // 3. 把配置项给实例对象
      this.chartInstance.setOption(option)
      // this.chartInstance.showLoading('default', { color: '#00AD94' })
    },
    resizeHandle () {
      this.chartInstance && this.chartInstance.resize()
    }
  }
}
</script>
