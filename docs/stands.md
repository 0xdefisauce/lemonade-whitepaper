# Lemonade Stands

The game is based around NFTs that can be minted, staked, and bought and sold on secondary markets like NFT Trader. The Lemonade Stand is one such NFT.

When a Lemonade Stand is minted, a Chainlink [^1] provable random number is generated, and from that "roll", the Stand's attributes are set. Currently we have the following stand types:

- Stand (<span class="text-green-500">Common</span>)
- Cart (<span class="text-blue-500">Rare</span>)
- Van (<span class="text-purple-500">Epic</span>)
- Shop (<span class="text-yellow-500">Legendary</span>)

These stands are then randomly assigned a location using another Chainlink [^1] provably fair random number range:

- Dump (<span class="text-green-500">Common</span>)
- Residential (<span class="text-green-500">Common</span>)
- Park (<span class="text-blue-500">Rare</span>)
- Work site (<span class="text-blue-500">Rare</span>)
- Downtown (<span class="text-purple-500">Epic</span>)
- Mall (<span class="text-yellow-500">Legendary</span>)

## Lemonade Per Minute (LPM)

Together, these rarity variability effect the Lemonade stand's $Lemonade production per minute. The base value is from the stand's type, while the location provides a modifier.

And example would be a <span class="text-purple-500">Van</span> at the <span class="text-blue-500">Park</span> would produce <span class="text-purple-500">1.4</span> \* <span class="text-blue-500">1.4</span> for a total of **1.96 LPM**.

---

[^1]: We pay extra costs out of our own team wallet to use Chainlink provable fairness oracle, because openess and fairness are a core principle of our project and our team! []
