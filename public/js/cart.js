const payBtn = document.querySelector('.btn-button');

//evento para rrecopilar los seleccionados en memoria y mandarlos al banckend a la pasarela
payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem("cartItems")),
        }),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((url) => {
        if (url) {
            location.href = url;
            cleartCart();
        } else {
            throw new Error("URL de redirección no proporcionada.");
        }
    })
    .catch((err) => console.error(err));
});