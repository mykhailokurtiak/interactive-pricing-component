const pageViews = document.getElementById('card-p');
const price = document.getElementById('card-value');
const slider = document.getElementById('slider');
const priceToggle = document.getElementById('price-toogle');
const discount = document.querySelector('.discount');
const yearContainer = document.getElementById('card-time');
const startTrial = document.getElementById('btn');
const alertContainer = document.getElementById('alert-message');
let yearState = true;

window.addEventListener('DOMContentLoaded', setPrice, changeYearState);
slider.addEventListener('change', setPrice);
priceToggle.addEventListener('click', () => {
  changeYearState();
});

startTrial.addEventListener('click', function () {
  const alertMessage = document.createElement('p1');
  alertMessage.innerHTML = '🥱 ohh sorry...';
  if (!alertContainer.innerHTML) alertContainer.appendChild(alertMessage);
});

function setPrice() {
  let value = parseInt(slider.value);
  switch (value) {
    case 1:
      pageViews.innerText = '10K pageviews';
      price.innerText = getPrice(yearState, value, 8);
      break;
    case 2:
      pageViews.textContent = '50K Pageviews';
      price.textContent = getPrice(yearState, value, 12);
      break;
    case 3:
      pageViews.textContent = '100K Pageviews';
      price.textContent = getPrice(yearState, value, 16);
      break;
    case 4:
      pageViews.textContent = '500K Pageviews';
      price.textContent = getPrice(yearState, value, 24);
      break;
    case 5:
      pageViews.textContent = '1M Pageviews';
      price.textContent = getPrice(yearState, value, 36);
      break;

    default:
      break;
  }
}

function changeYearState() {
  if (!priceToggle.checked) {
    yearState = false;
    setPrice();
  }
  if (priceToggle.checked) {
    yearState = true;
    setPrice();
  }
}

function getPrice(state, value, price) {
  let newPrice;
  if (state) {
    switch (value) {
      case 1:
        newPrice = `$${price}.00`;
        break;
      case 2:
        newPrice = `$${price}.00`;
        break;
      case 3:
        newPrice = `$${price}.00`;
        break;
      case 4:
        newPrice = `$${price}.00`;
        break;
      case 5:
        newPrice = `$${price}.00`;
        break;

      default:
        break;
    }
  }
  if (!state) {
    switch (value) {
      case 1:
        newPrice = getDiscount(price);
        break;
      case 2:
        newPrice = getDiscount(price);
        break;
      case 3:
        newPrice = getDiscount(price);
        break;
      case 4:
        newPrice = getDiscount(price);
        break;
      case 5:
        newPrice = getDiscount(price);
        break;

      default:
        break;
    }
  }
  return newPrice;
}

function getDiscount(price) {
  money = price - price * 0.25;
  return `$${money}.00`;
}
