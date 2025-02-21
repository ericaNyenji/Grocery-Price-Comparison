const groceryData = [
    { item: "Milk (1 liter)", supermarket: "ALDI", price: 400, image: "images/milk.jpg" },
    { item: "Milk (1 liter)", supermarket: "LIDL", price: 420, image: "images/milk.jpg" },
    { item: "Milk (1 liter)", supermarket: "SPAR", price: 410, image: "images/milk.jpg" },
    { item: "Bread (500g loaf)", supermarket: "ALDI", price: 500, image: "images/bread.jpg" },
    { item: "Bread (500g loaf)", supermarket: "LIDL", price: 520, image: "images/bread.jpg" },
    { item: "Bread (500g loaf)", supermarket: "SPAR", price: 510, image: "images/bread.jpg" },
    { item: "Eggs (12 pcs)", supermarket: "ALDI", price: 990, image: "images/eggs.jpg" },
    { item: "Eggs (12 pcs)", supermarket: "LIDL", price: 1000, image: "images/eggs.jpg" },
    { item: "Eggs (12 pcs)", supermarket: "SPAR", price: 995, image: "images/eggs.jpg" },
    { item: "Rice (1 kg)", supermarket: "ALDI", price: 800, image: "images/rice.jpg" },
    { item: "Rice (1 kg)", supermarket: "LIDL", price: 820, image: "images/rice.jpg" },
    { item: "Rice (1 kg)", supermarket: "SPAR", price: 810, image: "images/rice.jpg" },
    { item: "Chicken (1 kg)", supermarket: "ALDI", price: 2200, image: "images/chicken.jpg" },
    { item: "Chicken (1 kg)", supermarket: "LIDL", price: 2250, image: "images/chicken.jpg" },
    { item: "Chicken (1 kg)", supermarket: "SPAR", price: 2230, image: "images/chicken.jpg" },
    { item: "Apples (1 kg)", supermarket: "ALDI", price: 600, image: "images/apples.jpg" },
    { item: "Apples (1 kg)", supermarket: "LIDL", price: 620, image: "images/apples.jpg" },
    { item: "Apples (1 kg)", supermarket: "SPAR", price: 610, image: "images/apples.jpg" },
    { item: "Bananas (1 kg)", supermarket: "ALDI", price: 650, image: "images/bananas.jpg" },
    { item: "Bananas (1 kg)", supermarket: "LIDL", price: 670, image: "images/bananas.jpg" },
    { item: "Bananas (1 kg)", supermarket: "SPAR", price: 660, image: "images/bananas.jpg" },
    { item: "Oranges (1 kg)", supermarket: "ALDI", price: 700, image: "images/oranges.jpg" },
    { item: "Oranges (1 kg)", supermarket: "LIDL", price: 720, image: "images/oranges.jpg" },
    { item: "Oranges (1 kg)", supermarket: "SPAR", price: 710, image: "images/oranges.jpg" },
    { item: "Tomatoes (1 kg)", supermarket: "ALDI", price: 1000, image: "images/tomatoes.jpg" },
    { item: "Tomatoes (1 kg)", supermarket: "LIDL", price: 1050, image: "images/tomatoes.jpg" },
    { item: "Tomatoes (1 kg)", supermarket: "SPAR", price: 1030, image: "images/tomatoes.jpg" },
    { item: "Potatoes (1 kg)", supermarket: "ALDI", price: 400, image: "images/potatoes.jpg" },
    { item: "Potatoes (1 kg)", supermarket: "LIDL", price: 420, image: "images/potatoes.jpg" },
    { item: "Potatoes (1 kg)", supermarket: "SPAR", price: 410, image: "images/potatoes.jpg" },
    { item: "Onions (1 kg)", supermarket: "ALDI", price: 500, image: "images/onions.jpg" },
    { item: "Onions (1 kg)", supermarket: "LIDL", price: 520, image: "images/onions.jpg" },
    { item: "Onions (1 kg)", supermarket: "SPAR", price: 510, image: "images/onions.jpg" },
    { item: "Carrots (1 kg)", supermarket: "ALDI", price: 450, image: "images/carrots.jpg" },
    { item: "Carrots (1 kg)", supermarket: "LIDL", price: 470, image: "images/carrots.jpg" },
    { item: "Carrots (1 kg)", supermarket: "SPAR", price: 460, image: "images/carrots.jpg" },
    { item: "Pasta (500g)", supermarket: "ALDI", price: 400, image: "images/pasta.jpg" },
    { item: "Pasta (500g)", supermarket: "LIDL", price: 420, image: "images/pasta.jpg" },
    { item: "Pasta (500g)", supermarket: "SPAR", price: 410, image: "images/pasta.jpg" },
    { item: "Sugar (1 kg)", supermarket: "ALDI", price: 400, image: "images/sugar.jpg" },
    { item: "Sugar (1 kg)", supermarket: "LIDL", price: 420, image: "images/sugar.jpg" },
    { item: "Sugar (1 kg)", supermarket: "SPAR", price: 410, image: "images/sugar.jpg" },
    { item: "Cooking Oil (1 liter)", supermarket: "ALDI", price: 910, image: "images/cooking oil.jpg" },
    { item: "Cooking Oil (1 liter)", supermarket: "LIDL", price: 920, image: "images/cooking oil.jpg" },
    { item: "Cooking Oil (1 liter)", supermarket: "SPAR", price: 900, image: "images/cooking oil.jpg" },
    { item: "Butter (250g)", supermarket: "ALDI", price: 800, image: "images/butter.jpg" },
    { item: "Butter (250g)", supermarket: "LIDL", price: 820, image: "images/butter.jpg" },
    { item: "Butter (250g)", supermarket: "SPAR", price: 810, image: "images/butter.jpg" },
    { item: "Fish (0.5  kg)", supermarket: "ALDI", price: 4000, image: "images/fish.jpg" },
    { item: "Fish (0.5  kg)", supermarket: "LIDL", price: 4200, image: "images/fish.jpg" },
    { item: "Fish (0.5  kg)", supermarket: "SPAR", price: 4100, image: "images/fish.jpg" },
    { item: "Beef (0.5 kg)", supermarket: "ALDI", price: 5050, image: "images/beef.jpg" },
    { item: "Beef (0.5  kg)", supermarket: "LIDL", price: 5100, image: "images/beef.jpg" },
    { item: "Beef (0.5  kg)", supermarket: "SPAR", price: 5000, image: "images/beef.jpg" },
    { item: "White Chocolate (100g)", supermarket: "ALDI", price: 500, image: "images/chocolate.jpg" },
    { item: "White Chocolate (100g)", supermarket: "LIDL", price: 520, image: "images/chocolate.jpg" },
    { item: "White Chocolate (100g)", supermarket: "SPAR", price: 510, image: "images/chocolate.jpg" },
    { item: "Fanta Orange (500ml)", supermarket: "ALDI", price: 500, image: "images/fanta orange.png" },
    { item: "Fanta Orange (500ml)", supermarket: "LIDL", price: 499, image: "images/fanta orange.png" },
    { item: "Fanta Orange (500ml)", supermarket: "SPAR", price: 549, image: "images/fanta orange.png" },
    { item: "Strawberry Yoghurt (500ml)", supermarket: "ALDI", price: 500, image: "images/yoghurt.jpg" },
    { item: "Strawberry Yoghurt (500ml)", supermarket: "LIDL", price: 499, image: "images/yoghurt.jpg" },
    { item: "Strawberry Yoghurt  (500ml)", supermarket: "SPAR", price: 549, image: "images/yoghurt.jpg" }
];



function findCheapest() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredItems = groceryData.filter(item => item.item.toLowerCase().includes(searchQuery));

    if (filteredItems.length > 0) {
        const cheapest = filteredItems.reduce((min, item) => (item.price < min.price ? item : min));

        
        let supermarketLogo = "";
        if (cheapest.supermarket.toLowerCase() === "spar") {
            supermarketLogo = "images/Spar.png";
        } else if (cheapest.supermarket.toLowerCase() === "lidl") {
            supermarketLogo = "images/Lidl.png";
        } else if (cheapest.supermarket.toLowerCase() === "aldi") {
            supermarketLogo = "images/Aldi.jpg";
        }

        
        document.getElementById("cheapestResult").innerHTML = `
            <div style="text-align: center;">
                Cheapest ${cheapest.item}:<br><br>
                <strong>HUF ${cheapest.price.toFixed(0)}</strong> at ${cheapest.supermarket}<br><br>
                <img src="${cheapest.image}" alt="${cheapest.item}" style="width:200px; height:auto; margin-top:10px;">
            </div>
        `;

        // Update the supermarket logo in the bottom right
        const logoElement = document.getElementById("supermarketLogo");
        logoElement.src = supermarketLogo;
        logoElement.style.display = "block"; // Show the logo
    } else {
        document.getElementById("cheapestResult").innerText = "Item not found.";
        document.getElementById("supermarketLogo").style.display = "none"; // Hide logo if no match
    }
}


// function findCheapest() {
//     const searchQuery = document.getElementById("searchInput").value.toLowerCase();
//     const filteredItems = groceryData.filter(item => item.item.toLowerCase().includes(searchQuery));
    
//     if (filteredItems.length > 0) {
//         const cheapest = filteredItems.reduce((min, item) => (item.price < min.price ? item : min));
//         document.getElementById("cheapestResult").innerHTML = `
//             Cheapest ${cheapest.item}:<br><br><br> HUF ${cheapest.price.toFixed(0)} at ${cheapest.supermarket}<br>
//             <img src="${cheapest.image}" alt="${cheapest.item}" style="width:200px; height:auto; margin-top:10px;">
//         `;
//     } else {
//         document.getElementById("cheapestResult").innerText = "Item not found.";
//     }
// }

       
        // function findCheapest() {
        //     const searchQuery = document.getElementById("searchInput").value.toLowerCase();
        //     const filteredItems = groceryData.filter(item => item.item.toLowerCase().includes(searchQuery));
            
        //     if (filteredItems.length > 0) {
        //         const cheapest = filteredItems.reduce((min, item) => (item.price < min.price ? item : min));
        //         document.getElementById("cheapestResult").innerText = 
        //             `Cheapest ${cheapest.item}: $${cheapest.price.toFixed(2)} at ${cheapest.supermarket}`;
        //     } else {
        //         document.getElementById("cheapestResult").innerText = "";
        //     }
        // }

        
     
    