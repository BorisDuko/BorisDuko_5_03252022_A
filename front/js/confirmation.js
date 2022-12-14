// DOM access
const confirmSpan = document.getElementById("orderId");
// --- URL Search Params ---
// get orderId key search location
const orderIdValue = window.location.search;
// create url parameter
const orderIdUrlParams = new URLSearchParams(orderIdValue);
// get() return value with given search parameter `?orderId=`
const orderId = orderIdUrlParams.get("orderId");
console.log(orderId);

// place orderId with innerTexts
confirmSpan.innerText = orderId;
