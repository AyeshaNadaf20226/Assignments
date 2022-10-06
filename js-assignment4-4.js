function getVideo(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(getVideo()){
                resolve('Got Video')
            }
            else{
                reject('Did not got video')
            }
        },3000)
    })
}
let methodForResolve=(result)=>{
    console.log('Message After Resolve='+result);
}
let methodForReject=(reject)=>{
    console.log('Message After Reject'+reject);
}
function addIntro(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addIntro()){
                resolve('Intro Added')
            }else{
                reject("intro not added")

            }
        },3000);
    })
}
function addSummery(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addSummery()){
                resolve('Summery Added')
            }else{
                reject('Summery not added')
            }
        },3000);
    })
}
getVideo().then(methodForResolve).catch(methodForReject);
addIntro().then(methodForResolve).catch(methodForReject);
addSummery().then(methodForResolve).catch(methodForReject);
