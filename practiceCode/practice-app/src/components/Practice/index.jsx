import React,{ useEffect, useState, useCallback} from 'react'
import {Button} from 'antd';
import { useModal } from '../../useHooks';

export default function Practice() {
    const [modal,setModal] = useModal();
    const [againRender,setAgainRender] = useState(1);
    console.log('1');
    const handleClick1 = ()=>{
        console.log('我生成了一次');
        setAgainRender((State)=>State+1)
    }

    const handleClick2 = useCallback(
        () => {
            console.log('useCallback 我生成了一次');
            setAgainRender((State)=>State+1)
        },
        [],
    );
    return (
        <>
            <p>{againRender}</p>
            <Button onClick={setModal}>点击跳出弹框</Button>
            {modal}
            <Button onClick={()=>setAgainRender((State)=>State+1)}>重新渲染一次</Button>
            <Button onClick={handleClick1}>no useCallback</Button>
            <Button onClick={handleClick2}>useCallback</Button>
        </>
    );
}
