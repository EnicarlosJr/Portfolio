import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function SkillsChart() {
  const option = {
    backgroundColor: 'transparent',
    radar: {
      indicator: [
        { name: 'Backend', max: 100 },
        { name: 'Frontend', max: 100 },
        { name: 'Dados', max: 100 },
        { name: 'Entrega', max: 100 },
        { name: 'Seguranca', max: 100 },
      ],
      axisName: { color: '#cbd5e1' },
      splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.2)' } },
      splitArea: { areaStyle: { color: ['rgba(15, 23, 42, 0.2)', 'rgba(15, 23, 42, 0.35)'] } },
      axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.18)' } },
    },
    series: [
      {
        type: 'radar',
        data: [{ value: [82, 76, 72, 68, 58], name: 'Perfil atual' }],
        areaStyle: { color: 'rgba(16, 185, 129, 0.18)' },
        lineStyle: { color: '#34d399' },
        itemStyle: { color: '#34d399' },
      },
    ],
  }

  return (
    <div className="panel p-4">
      <h3 className="font-semibold text-white">Radar tecnico</h3>
      <ReactECharts option={option} style={{ height: 300 }} />
    </div>
  )
}
