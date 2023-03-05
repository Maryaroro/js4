const name = document.getElementById('name');

const avatar = document.getElementById('avatar')


const comment = document.getElementById('comment')

const btn = document.querySelector('.btn')

const chatName = document.querySelector('.chat-name')

btn.addEventListener('click', function () {
	chatName.textContent = name.value ;
    document.write(chatName);
    
});

