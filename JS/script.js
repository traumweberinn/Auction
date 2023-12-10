function confirmBid() {
    let confirmBid = confirm("Вы действительно хотите сделать ставку?");
    alert('Ваша ставка успешно принята!');
}



let bid = [];
loadBid();

document.getElementById('bid_add').onclick = function(){
    let bidAmount = document.getElementById('bid_amount');

    let bids = {
        bid_amount : bidAmount.value,
    }

    bidAmount.value = '';

    bid.push(bids);
    saveBid();
    showBid();
}

function saveBid(){
    localStorage.setItem('bid', JSON.stringify(bids));
}

function loadBid(){
    if (localStorage.getItem('bids')) bid = JSON.parse(localStorage.getItem('bids'));
    showBid();
}

function showBid (){
    let bidField = document.getElementById('bid_field');
    let out = '';
    bid.forEach(function(item){
        out += `<p class="alert_primary" role="alert">${item.bid_amount}</p>`;
    });
    bidField.innerHTML = out;
}

