import React, { useEffect } from 'react';
import { Avatar, Button, Card, Form, Input, Modal, notification, Tag, Menu, Popconfirm} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addData, completeData, deleteData, editData, getData } from './reducers/todos';
import { AppDispatch, RootState } from './store/Store'; 
import styled from 'styled-components';
import {useState } from "react"
const App: React.FC = () => {
  const StyledButton = styled(Button)`
  color: black;
  &:hover {
    color: white;
  }
`;
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.todos.data);
const [text,setText]=useState<string>("")
// const [Modal,setModal]=useState<boolean>(false)

const [addModalVisible, setAddModalVisible] = useState<boolean>(false);

  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
const [editText, setEdittext] = useState<string>("");
  const [idx, setIdx] = useState<null|Number>(null);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const openNotification = (type: string) => {
    let description;
    if (type === 'add') {
      description = 'You have added an item successfully.';
    } else if (type === 'edit') {
      description = 'You have edited an item successfully.';
    } else if (type === 'delete') {
      description = 'You have deleted an item successfully.';  
    }
  
    notification.open({
      message: 'Notification Title',
      description,
    });
  };
  
  

  return (
    <div className="container mx-auto px-4 bg-gray-100 min-h-screen">
    <Menu mode="horizontal">
      <Menu.Item key="home">
        Home
      </Menu.Item>
      <Menu.Item key="about">
        About
      </Menu.Item>
    </Menu>

    <div className="flex justify-end my-4">
    <StyledButton 
  type="primary" 
  onClick={() => setAddModalVisible(true)}
>
  Add
</StyledButton>
    </div>

    {/* Add Modal */}
    <Modal
      title="Add Item"
      visible={addModalVisible}
      onOk={() => {
        if (text.trim().length === 0) {
          alert("Please enter text");
        } else {
          dispatch(addData({ title: text }));
          setText("");
          setAddModalVisible(false);
          openNotification('add');
        }
      }}
      onCancel={() => setAddModalVisible(false)}
    >
      <Form layout="vertical">
        <Form.Item label="Item">
          <Input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </Form.Item>
      </Form>
    </Modal>

    {/* Data Cards */}
    {
      data.map((e: any) => (
        <Card key={e.id} className="my-4">
          <Card.Meta
            avatar={<Avatar>{e.title[0]}</Avatar>}
            title={e.title}
            description={
              <div className="flex justify-end">
                <Button 
                  onClick={() => {
                    setEditModalVisible(true);
                    setIdx(e.id);
                    setEdittext(e.title);
                  }}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure to delete this item?"
                  onConfirm={() => {
                    dispatch(deleteData(e.id));
                    openNotification('delete'); 
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button 
                    danger
                    className="ml-2"
                  >
                    Delete
                  </Button>
                </Popconfirm>
                <Button 
                  onClick={() => dispatch(completeData({ id: e.id, title: e.title, complete: e.complete }))}
                  type={e.complete ? "primary" : "default"}
                  className="ml-2"
                >
                  {e.complete ? "Active" : "inActive"}
                </Button>
                <Tag color={e.complete ? "green" : "volcano"} className="ml-2">
                  {e.complete ? "Completed" : "Pending"}
                </Tag>
              </div>
            }
          />
        </Card>
      ))
    }

    {/* Edit Modal */}
    <Modal
      title="Edit Item"
      visible={editModalVisible}
      onOk={() => {
        dispatch(editData({ title: editText, id: idx }));
        setEditModalVisible(false);
        openNotification('edit');
      }}
      onCancel={() => setEditModalVisible(false)}
    >
      <Form layout="vertical">
        <Form.Item label="Item">
          <Input 
            value={editText} 
            onChange={(e) => setEdittext(e.target.value)} 
          />
        </Form.Item>
      </Form>
    </Modal>
  </div>
  );
};


export default App;


