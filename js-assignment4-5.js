async function myfunc(){
    function getVideo(){
        console.log('got video');
    }
    function AddIntro(){
         return console.log('Intro Added');
    }
    function AddSummery(){
       return  console.log('Summery Added');
    }
    getVideo();
    await AddIntro();
    AddSummery();
}
myfunc();
console.log('The await function verifying...');