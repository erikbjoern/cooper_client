import React, { Component } from 'react'
import { getData } from "../modules/performanceData"
import { Line } from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData()
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated()
    })
  }

  render() {
    let dataIndex

    if (this.state.performanceData != null) {

      dataIndex = {
        labels: this.state.performanceData.map(item => { 
          return item.created_at.substring(0, 10)
        }),
        datasets: [
          {
            label: 'Performance data',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.state.performanceData.map(item => { 
              return item.data.distance
            })
          }
        ]
      }
    }

    return (
      <div>
        <Line data={dataIndex} />
      </div>
    )
  }
}

export default DisplayPerformanceData
