import React, { useState } from 'react';
import { Button } from 'antd';
import AddProjectModal from './AddProjectModal';

const AddProject = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setModalVisible(true);
        }}
      >Add Project
      </Button>
      <AddProjectModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>

  );
};

export default AddProject;