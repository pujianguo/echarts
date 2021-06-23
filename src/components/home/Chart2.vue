<template>
  <div ref="chart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    resize: Number,
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
    list () {
      this.initChart()
    },
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
        // 通过这个color修改两条线的颜色
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // 如果series 对象有name 值，则 legend可以不用写data
          // data: ['新增粉丝', '新增游客'],
          // 修改图例组件 文字颜色
          textStyle: {
            color: '#4c9bfd'
          },
          // 这个10% 必须加引号
          right: '10%'
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true, // 显示边框
          borderColor: '#012f4a', // 边框颜色
          containLabel: true // 包含刻度文字在内
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: '#012f4a' // 分割线颜色
            }
          }
        },
        series: [
          {
            name: '新增粉丝',
            type: 'line',
            smooth: true, // true 可以让我们的折线显示带有弧度
            data: this.list[0]
          },
          {
            name: '新增游客',
            type: 'line',
            smooth: true,
            data: this.list[1]
          }
        ]
      }
      // 3. 把配置项给实例对象
      this.chartInstance.setOption(option)
    },
    resizeHandle () {
      this.chartInstance && this.chartInstance.resize()
    }
  }
}
</script>
