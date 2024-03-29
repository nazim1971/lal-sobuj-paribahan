 const openTicketPage = document.getElementById('ButTicketBtn');

 openTicketPage.addEventListener('click',function(){
    const ticketCounter = document.getElementById('miamiParibahan');
    ticketCounter.scrollIntoView({behavior:'smooth'})
 })



// seat section 

const seatName = document.querySelector('.seat');
const clickBtn = document.querySelectorAll('.miamia');
const totalSeat = document.querySelector('.totalSeatNum');
const addedSeat = document.querySelector('.addSeatCount');
const finalButton = document.querySelector('.finalBtn');
const ticketDiv = document.querySelector('.ticketMainDiv');
const firstTotal = document.querySelector('.total');

let value1 = parseInt(totalSeat.innerText);
let value2 = parseInt(addedSeat.innerText);
let totalPrice = 0;

function handleBtnClick() {
    const isWhite = this.classList.contains('bg-white');
   
    if (isWhite && (value2 < 4 || value2 === 0)) { 
        value1--; 
        value2++; 
        this.classList.add('bg-[#1DD100]');
        finalButton.classList.remove('btn-disabled');

        // Coupon Input Field
        if(value2 == 4){
            couponInput.classList.remove('btn-disabled','bg-slate-300');
        }    
        
        // Create a new ticket div element
        const newTicketDiv = document.createElement('div');
        newTicketDiv.classList.add('font-semibold','justify-between','flex',);
        
        // Enter the seat information
        const seatName = document.createElement('p');
        const seatClass = document.createElement('p');
        seatClass.innerText = 'economy';
        const seatPrice = document.createElement('p');
        seatPrice.innerText = '550';
        
        seatName.innerText = `${this.innerText}`;
        newTicketDiv.appendChild(seatName);
        newTicketDiv.appendChild(seatClass);
        newTicketDiv.appendChild(seatPrice);
        
        // Append the new ticket div to the ticket main div
        
        ticketDiv.appendChild(newTicketDiv);
        firstTotal.innerText = totalPrice + 550;
         totalPrice+=550;

         // grandTotal
        grandPrice.innerText = totalPrice;
         
    } else { 
        value1++; 
        value2--; 
        this.classList.remove('bg-[#1DD100]');
        firstTotal.innerText = totalPrice - 550;
        totalPrice-=550;

        // coupon input field
        couponInput.classList.add('btn-disabled','bg-slate-300');

        // grandTotal
        grandPrice.innerText = totalPrice;

       // Remove the last added ticket div
    const lastTicketDiv = ticketDiv.lastElementChild;
    // Final Btn Disable Enable
    if( value2 < 1 ){
        finalButton.classList.add('btn-disabled');
    }
    else{
        finalButton.classList.remove('btn-disabled');   
    }
    if (lastTicketDiv) {
        lastTicketDiv.remove();
    }
    }
    this.classList.toggle('bg-white');
    totalSeat.innerText = value1;
    addedSeat.innerText = value2;
    // Disable buttons when the maximum number of seats is reached
    clickBtn.forEach(btn => {
        btn.disabled = value2 >= 4 ? !btn.classList.contains('bg-[#1DD100]') : false;
    });
}
// Click Btn function  
clickBtn.forEach(btn =>  {
    btn.addEventListener('click', handleBtnClick);
});


// Number input Field
const numberINput = document.querySelector('.pData');
finalButton.addEventListener('click', function() {
    const phoneNumber = numberINput.value.trim();
    if (!phoneNumber) {
        alert('Please enter your number.');   
    } 
});


// coupon section
const applyTopp = document.querySelector('.applyTop');
const couponDiv = document.querySelector('.applyDiv');
const couponBtn = document.querySelector('.applyBtn');
const couponInput = document.querySelector('.applyInput');
const grandPrice = document.querySelector('.grandTotal');


// Coupon Button
couponBtn.addEventListener('click', function(){
    couponDiv.classList.add('hidden');
    const discountData = document.createElement('p');
    discountData.innerText = 'Discount amount:';
    const discountPrice = document.createElement('p');
    discountPrice.classList.add('text-red-700');
    if(couponInput.value === 'NEW15'){
        
         // Calculate discount price
    discountPrice.innerText = totalPrice * 0.15; 

    applyTopp.appendChild(discountData);
    applyTopp.appendChild(discountPrice);
    applyTopp.classList.add('flex','p-3','justify-between','font-semibold');

    // Update grand total after discount
    grandPrice.innerText = totalPrice - (totalPrice * 0.15);
    } 
    else if (couponInput.value === 'COUPLE 20') {

          // Calculate discount price
    discountPrice.innerText = totalPrice * 0.20; 

    applyTopp.appendChild(discountData);
    applyTopp.appendChild(discountPrice);
    applyTopp.classList.add('flex','p-3','justify-between','font-semibold');
    // Update grand total after discount
    grandPrice.innerText = totalPrice - (totalPrice * 0.20);
    
}})

// coupon Input field
couponInput.addEventListener('input', function() {
    couponInput.value = couponInput.value.toUpperCase()
    if (couponInput.value === 'NEW15' || couponInput.value === 'COUPLE 20') {
        couponBtn.classList.remove('btn-disabled');
    } else {
        couponBtn.classList.add('btn-disabled');
    }
});



// reload Btn

document.querySelector(".reloadButton").addEventListener("click", function() {
    location.reload();})