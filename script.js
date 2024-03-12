const itemContainer = document.getElementsByClassName("shop-item");

const baseUrl = "https://watches-fks5.onrender.com";
const getItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/item/get?limit=12`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Work with the JSON data here
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
    return [];
  }
};

(async () => {
  const items = await getItems();

  console.log(itemContainer);
  console.log(items);

  //   items?.items?.forEach((item) => {
  //     itemContainer[0].innerHTML += `
  //   <h1>asdasdasd</h1>
  //         `;
  //   });

  items?.items?.forEach((item) => {
    itemContainer[0].innerHTML += `
          <div class="item-image">
              <img src=${item.image} alt="item" />
          </div>
          <div class="item-details">
              <p>category</p>
              <h5>${item.name}</h5>
              <h6>${item.price}</h6>
              <div class="flex">
                <div style="display: flex">
                  <p>${item.rating}</p>
                  <i id="star" class="bi bi-star-fill"></i>
                </div>
                <p>(100) reviews</p>
              </div>
          </div>

          `;
  });
})();
