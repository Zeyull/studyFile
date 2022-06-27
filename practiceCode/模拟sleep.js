function sleep(timeout){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve();
        },timeout);
    })
}

async function test(){
    console.log('a');
    await sleep(3000);
    console.log('b');
}

test();