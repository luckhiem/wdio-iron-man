import React from 'react';
import { Tabs } from 'antd';
import ConfigFile from './ConfigFile';
const { TabPane } = Tabs;


const ProjectDetail = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Project Config" key="1">
        <ConfigFile />
      </TabPane>
      <TabPane tab="Running Log" key="2">
        Content of Tab Pane 2
    </TabPane>
      <TabPane tab="Test Report" key="3">
        Content of Tab Pane 3
    </TabPane>
    </Tabs>
  );
};

export default ProjectDetail;