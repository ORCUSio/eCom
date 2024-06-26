document.addEventListener("DOMContentLoaded", function () {
  const fetchProduct = async () => {
    const response = await fetch("./getforcategory.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  let data = fetchProduct().then((data) => {
    console.log("single data", data);
  });

  const { products } = data;
});
