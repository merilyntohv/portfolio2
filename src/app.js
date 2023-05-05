import { getCoins, getCoin, getHistory } from "../API/coinService.js";

const data = await getCoins();

const marketTrendsWrapper = document.querySelector("#market_trend");

data.data.coins.forEach((coin) => {
        const article = document.createElement("article");

       /* html elemendi meetod*/
        article.setAttribute('data-uuid', coin.uuid);
        article.innerHTML = `
        <div class="kaart flex w-full">
            <div class="flex justify-evenly">
            <div id="border" class="rounded-xl  border-2">
                <div class="flex justify-evenly px-3 pb-8 pt-4">
                    <img class="w-12 h-12 object-cover" src="${coin.iconUrl}">
                    <p>${coin.symbol}</p>
                    <p class="text-[8px]">${coin.name}</p>
                    <img class="" src="">
                </div>
                <div class="flex items-center text-center justify-between px-3 pb-4">
                    <div><p class="text-2xl pr-6 lg:pr-12">$${Number(coin.price).toFixed(2)}</p>
                    <p class="${String(coin.change).startsWith('-') ? 'text-red-500' : 'text-green-500'} flex text-left">${coin.change}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `;

        const borderColorWeDontWant = ["#000000"];
        article.querySelector("#border").style.borderColor = borderColorWeDontWant.includes(coin.color)
            ? "#73FDAA"
            : coin.color


    marketTrendsWrapper.append(article);
});

const cards = document.querySelectorAll('#market_trend article');
cards.forEach((node) => {
    node.addEventListener("click", async (event) => {
        const uuid = event.currentTarget.getAttribute("data-uuid");
        const response = await getCoin(uuid);
        const history = await getHistory(uuid);
        
        const result = {...response.data.coin, ...history.data};
        console.log(result);
    })
}); 
    
