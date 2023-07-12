import React from 'react'
import { Space, Spin, Empty } from 'antd'

const Loading = () => {
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%'
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
      <Empty description={false} />

    </div>
  )
}

export default Loading
