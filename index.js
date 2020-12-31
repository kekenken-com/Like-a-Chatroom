const button = document.getElementById('button');
const content = document.getElementById('content');
const tweet   = document.getElementById('tweet');

function typed(fn){
    button.addEventListener('click', function(){
        const type = window.prompt('本当によろしいですか？よろしければ、「確認」と入力してください')
        if(type == '確認'){
            fn();
        }
    })
}

function Ok(){
    let newTweet = document.createElement('div');
    tweet.insertAdjacentElement('afterbegin', newTweet);
    newTweet.textContent = content.value
    window.alert('確認されました')
    console.log('正常にツイートされました')
}

typed(Ok);