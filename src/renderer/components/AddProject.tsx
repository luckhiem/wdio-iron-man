import React, { useState } from 'react';
import { Button } from 'antd';
import AddProjectModal from './AddProjectModal';
import { ipcRenderer, IpcRendererEvent } from 'electron';

const AddProject = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          ipcRenderer.send('show-open-dialog', null);
          const listener = (event: IpcRendererEvent, response: any )=>{
            console.log(event);
            ipcRenderer.removeListener('show-open-dialog', listener);
          }
          ipcRenderer.on('show-open-dialog', listener);
        }}
      >Add Project
      </Button>
      {/* <AddProjectModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </div>

  );
};

export default AddProject;