const API_KEY = 'eea9795e36msh7349ebddce92190p158553jsn40bc2ab71cf9';
const BASE_URL = 'https://coinranking1.p.rapidapi.com';

fetch(`${BASE_URL}/coins`, {
    headers: { 
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
     },
})
    .then((response) => response.json())
    .then((data) => {
        const marketTrendsWrapper = document.querySelector("#market_trend");

    data.data.coins.forEach((coin) => {
        const article = document.createElement("article");
        article.innerHTML = `
        <div class="flex">
            <div class="flex justify-evenly">
            <div class="rounded-xl border-green-200 border-2">
                <div class="flex justify-evenly px-3 pb-8 pt-4">
                    <img class="w-12 h-12 object-cover" src="${coin.iconUrl}">
                    <p>${coin.symbol}</p>
                    <p class="text-[8px]">${coin.name}</p>
                    <img class="" src="">
                </div>
                <div class="flex items-center text-center justify-between px-3 pb-4">
                    <div><p class="text-2xl pr-6 lg:pr-20">$${Number(coin.price).toFixed(2)}</p>
                    <p class="flex text-left">${coin.change}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `;

            marketTrendsWrapper.append(article);
        });
    });
