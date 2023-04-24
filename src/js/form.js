const form = document.querySelector('.contact__form'),
    name  = form.querySelector('[name="name"]'),
    phone = form.querySelector('[name="phone"]'),
    email = form.querySelector('[name="email"]'),
    order = form.querySelector('[name="order"]')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let message = 
    `name: ${name.value}, 
    phone: ${phone.value}, 
    email: ${email.value},
    order: ${order.value}`
    function massage() { fetch(`https://api.telegram.org/bot6130561127:AAGc09-QEuhaIX-LFecXFsgLBWsKGf4ih08/sendMessage?chat_id=-1001937252193&parse_mode=html&text=${massage}`) }
})



