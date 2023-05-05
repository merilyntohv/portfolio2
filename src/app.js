import { getCoins } from "../API/coinService.js";

const data = await getCoins();

const marketTrendsWrapper = document.querySelector("#market_trend");

data.data.coins.forEach((coin) => {
        const article = document.createElement("article");
        article.innerHTML = `
        <div class="flex w-full">
            <div class="flex justify-evenly ">
            <div id="border" class="rounded-xl  border-2">
                <div class="flex justify-evenly px-3 pb-8 pt-4">
                    <img class="w-12 h-12 object-cover" src="${coin.iconUrl}">
                    <p>${coin.symbol}</p>
                    <p class="text-[8px]">${coin.name}</p>
                    <img class="" src="">
                </div>
                <div class="flex items-center text-center justify-between px-3 pb-4">
                    <div><p class="text-2xl pr-6 lg:pr-12">$${Number(coin.price).toFixed(2)}</p>
                    <p class="flex text-left">${coin.change}</p>
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

