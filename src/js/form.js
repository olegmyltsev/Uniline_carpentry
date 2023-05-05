const form = document.querySelector('.contact__form'),
    name  = form.querySelector('[name="name"]'),
    phone = form.querySelector('[name="phone"]'),
    email = form.querySelector('[name="email"]'),
    order = form.querySelector('[name="order"]')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let message =`name: ${name.value}%0Aphone:${phone.value}%0Aemail: ${email.value}%0Aorder: ${order.value}` 
    fetch(`https://api.telegram.org/bot6130561127:AAGc09-QEuhaIX-LFecXFsgLBWsKGf4ih08/sendMessage?chat_id=-1001937252193&parse_mode=html&text=${message}`) 
    console.log("");
})



