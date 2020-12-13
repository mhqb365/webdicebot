const API_URL = window.location.hostname == 'webdicebot.xyz' ? 'https://api.webdicebot.xyz' : 'http://localhost:8001'

const bots = [
    {
        name: 'Select bot you need',
        value: ``
    },
    {
        name: '999dice.com',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/999dice'
document.body.appendChild(script)`
    },
    {
        name: 'betfury.io - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/betfury-dice'
document.body.appendChild(script)`
    },
    {
        name: 'bitsler.com - boom',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/bitsler-boom'
document.body.appendChild(script)`
    },
    {
        name: 'bitsler.com - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/bitsler-dice'
document.body.appendChild(script)`
    },
    {
        name: 'bitvest.io - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/bitvest'
document.body.appendChild(script)`
    },
    {
        name: 'casinoroyale.bet - dice classic',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/casinoroyale-dice-classic'
document.body.appendChild(script)`
    },
    {
        name: 'crypto.games - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/crypto-games-dice'
document.body.appendChild(script)`
    },
    {
        name: 'duckdice.io',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/duckdice'
document.body.appendChild(script)`
    },
    {
        name: 'freebitco.in',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/freebitco'
document.body.appendChild(script)`
    },
    {
        name: 'freetron - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/freetron'
document.body.appendChild(script)`
    },
    {
        name: 'gigabet.com',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/gigabet-dice'
document.body.appendChild(script)`
    },
    {
        name: 'luckyfish.io - dice classic',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/luckyfish-dice-classic'
document.body.appendChild(script)`
    },
    {
        name: 'nanogames.io - hash dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/nanogames-hash-dice'
document.body.appendChild(script)`
    },
    {
        name: 'paradice.in - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/paradice'
document.body.appendChild(script)`
    },
    {
        name: 'primedice.com',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/primedice'
document.body.appendChild(script)`
    },
    {
        name: 'stake.com - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/stake-dice'
document.body.appendChild(script)`
    },
    {
        name: 'trustdice.win - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/trustdice-dice'
document.body.appendChild(script)`
    },
    {
        name: 'wixiplay.io - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/wixiplay-dice'
document.body.appendChild(script)`
    },
    {
        name: 'wolf.bet - dice',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/wolf'
document.body.appendChild(script)`
    },
    {
        name: 'yolodice.com',
        value: `const BOT_URL = '${API_URL}'
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = BOT_URL+'/bot/init/yolodice'
document.body.appendChild(script)`
    }
]

function fectPrices() {
    $.ajax({
        url: API_URL + '/price',
        method: 'GET'
    }).done(response => {
        var priceElements = response.map(res => `<tr><td>${res.limit} Days</td><td>${res.amount.pay.toLocaleString('vi-VN')} Doge</td></tr>`)

        $('#listPrice').html(priceElements)
    })
}

function changeBot() {
    var index = bots.findIndex(bot => bot.name == $('#selectBot').val())
    // console.log(index)
    $('#contentBot').val(bots[index].value)
}

function buyLicense() {
    var email = $('#email').val()
    var hash = $('#hash').val()

    if (email == '' || hash == '') return alert('Type your email and hash/txid transaction')

    $('.btn').prop('disabled', true)

    $.ajax({
        url: API_URL + '/license/order',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify({
            email, hash
        })
    }).done(response => {
        // console.log(response)
        $('.btn').prop('disabled', false)
        alert(response.message)
    })
}

function recoverLicense() {
    var email = $('#emailRecover').val()

    if (email == '') return alert('Type your email')

    $('.btn').prop('disabled', true)

    $.ajax({
        url: API_URL + '/license/recover',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify({
            email
        })
    }).done(response => {
        // console.log(response)
        $('.btn').prop('disabled', false)
        alert(response.message)
    })
}

$(document).ready(() => {
    new ClipboardJS('.btn');

    $("#myModal").modal()

    var selectBot = bots.map(bot => `<option value="${bot.name}">${bot.name}</option>`)

    $('#selectBot').html(selectBot)

    fectPrices()

    $('#currentYear').text(new Date().getFullYear())
})