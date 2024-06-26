const products = [
    {
      id: 1,
      name: "Esprit Ruffle Shirt",
      price: "$16.64",
      imgSrc: "images/product-01.jpg",
      category: "women",
    },
    {
      id: 2,
      name: "Herschel supply",
      price: "$35.31",
      imgSrc: "images/product-02.jpg",
      category: "women",
    },
    {
      id: 3,
      name: "Only Check Trouser",
      price: "$25.50",
      imgSrc: "images/product-03.jpg",
      category: "men",
    },
    {
      id: 4,
      name: "Classic Trench Coat",
      price: "$75.00",
      imgSrc: "images/product-04.jpg",
      category: "women",
    },
    {
      id: 5,
      name: "Front Pocket Jumper",
      price: "$34.75",
      imgSrc: "images/product-05.jpg",
      category: "women",
    },
    {
      id: 6,
      name: "Vintage Inspired Classic",
      price: "$93.20",
      imgSrc: "images/product-06.jpg",
      category: "watches",
    },
    {
      id: 7,
      name: "Shirt in Stretch Cotton",
      price: "$52.66",
      imgSrc: "images/product-07.jpg",
      category: "women",
    },
    {
      id: 8,
      name: "Pieces Metallic Printed",
      price: "$18.96",
      imgSrc: "images/product-08.jpg",
      category: "women",
    },
    {
      id: 9,
      name: "Converse All Star Hi Plimsolls",
      price: "$75.00",
      imgSrc: "images/product-09.jpg",
      category: "shoes",
    },
    {
      id: 10,
      name: "Femme T-Shirt In Stripe",
      price: "$25.85",
      imgSrc: "images/product-10.jpg",
      category: "women",
    },
    {
      id: 11,
      name: "Herschel supply",
      price: "$63.16",
      imgSrc: "images/product-11.jpg",
      category: "men",
    },
    {
      id: 12,
      name: "Herschel supply",
      price: "$63.15",
      imgSrc: "images/product-12.jpg",
      category: "men",
    },
    {
      id: 13,
      name: "T-Shirt with Sleeve",
      price: "$18.49",
      imgSrc: "images/product-13.jpg",
      category: "women",
    },
    {
      id: 14,
      name: "Pretty Little Thing",
      price: "$54.79",
      imgSrc: "images/product-14.jpg",
      category: "women",
    },
    {
      id: 15,
      name: "Mini Silver Mesh Watch",
      price: "$86.85",
      imgSrc: "images/product-15.jpg",
      category: "watches",
    },
    {
      id: 16,
      name: "Square Neck Back",
      price: "$29.64",
      imgSrc: "images/product-16.jpg",
      category: "women",
    },
  ];

  (async function () {
      let data = await fetch("./data/mens.json").then((response) => response.json());
    console.log(data);

    })();

  const productList = document.getElementById("product-list");
  function renderProducts(products) {
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add(
        "col-sm-6",
        "col-md-4",
        "col-lg-3",
        "p-b-35",
        "isotope-item",
        product.category
      );
      productElement.innerHTML = `
                <div class="block2">
                    <div class="block2-pic hov-img0">
                        <img src="${product.imgSrc}" alt="IMG-PRODUCT">
                        <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">Quick View</a>
                    </div>
                    <div class="block2-txt flex-w flex-t p-t-14">
                        <div class="block2-txt-child1 flex-col-l ">
                            <a href="product-detail.html" class="cl6"><b class="Nunito" style="color: #323232;">${product.brand || ""}</b></a>
                            <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-3 Gambetta">${product.name}</a>
                            <span class="stext-105 p-b-12 cl3">${product.price}</span>
                        </div>
                        <div class="block2-txt-child2 flex-r p-t-3">
                            <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
                                <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
                            </a>
                        </div>
                    </div>
                </div>
            `;
      productList.appendChild(productElement);
    });
  }
  renderProducts(products);
  document.getElementById("load-more").addEventListener("click", (e) => {
    e.preventDefault();
    // Load more products logic here
  });