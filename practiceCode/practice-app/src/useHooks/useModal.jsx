import { Modal } from 'antd';
import React,{ useState} from 'react';

export const useModal= ()=>{
    const [isModalVisible,setIsModalVisible] = useState(false);
    const setModal = ()=> setIsModalVisible(true);
    const myModal = (
        <Modal visible={isModalVisible} onOk={()=>setIsModalVisible(false)}  onCancel={()=>setIsModalVisible(false)}>弹窗</Modal>
    )
    return [myModal,setModal];
}