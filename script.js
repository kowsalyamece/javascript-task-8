
let api = document.querySelector(".api");
let products = document.querySelector("#products");


api.innerHTML = "Loading...";


fetch("https://fakestoreapi.com/products")

.then(function(response) {
    return response.json();
})

.then(function(data) {

    
    api.innerHTML = "API data loaded successfully";

    

    data.forEach(function(product) {

        
        let t1 = document.createElement("div");
        t1.innerHTML = "<h1>" + product.title + "</h1>";
        document.querySelector("#task1").innerHTML += t1.innerHTML;

        
        let t2 = document.createElement("div");
        t2.innerHTML = "<h2>" + product.id + " - " + product.title + "</h2>";
        document.querySelector("#task2").innerHTML += t2.innerHTML;

        
        let t3 = document.createElement("div");
        t3.innerHTML = "<p>" + product.title.slice(0, 30) + "</p>";
        document.querySelector("#task3").innerHTML += t3.innerHTML;

        
        let t4 = document.createElement("div");
        t4.innerHTML = "<p>" + product.description.slice(0, 100) + "</p>";
        document.querySelector("#task4").innerHTML += t4.innerHTML;

        
        let t5 = document.createElement("div");
        t5.innerHTML = "<div><img src='" + product.image + "' width='200'></div>";
        document.querySelector("#task5").innerHTML += t5.innerHTML;

        
        let t6 = document.createElement("div");
        t6.innerHTML =
            "<div><h3>" + product.title + "</h3>" +
            "<p>" + product.description + "</p>" +
            "<img src='" + product.image + "' width='100'></div>";
        document.querySelector("#task6").innerHTML += t6.innerHTML;

        
        let t7 = document.createElement("div");
        t7.innerHTML = "<p>Price: $" + product.price + "</p>";
        document.querySelector("#task7").innerHTML += t7.innerHTML;

    
        let t8 = document.createElement("div");
        t8.innerHTML = "<h3>" + product.category + "</h3>";
        document.querySelector("#task8").innerHTML += t8.innerHTML;

        
        let t9 = document.createElement("div");
        t9.innerHTML = "<p class='uppercase'>" + product.title + "</p>";
        document.querySelector("#task9").innerHTML += t9.innerHTML;

        
        let t10 = document.createElement("div");
        t10.innerHTML =
            "<p>" + product.title +
            " - Character Count: " + product.title.length + "</p>";
        document.querySelector("#task10").innerHTML += t10.innerHTML;

        
        let t12 = document.createElement("div");
        t12.innerHTML =
            "<p>ID: " + product.id +
            " | Title: " + product.title +
            " | Price: $" + product.price + "</p>";
        document.querySelector("#task12").innerHTML += t12.innerHTML;

        
        let t13 = document.createElement("div");
        t13.innerHTML = "<img src='" + product.image + "' width='200px'>";
        document.querySelector("#task13").innerHTML += t13.innerHTML;

        
        let t14 = document.createElement("div");
        t14.className = "card";
        t14.innerHTML = "<h3>" + product.title + "</h3>";
        document.querySelector("#task14").innerHTML += t14.outerHTML;

        
        let t15 = document.createElement("div");
        t15.innerHTML =
            "<h3>" + product.title + "</h3>" +
            "<p>" + product.description.slice(0, 50) + "</p>";
        document.querySelector("#task15").innerHTML += t15.innerHTML;

        
        console.log(product.title);

        let t16 = document.createElement("div");
        t16.innerHTML = "<p>" + product.title + "</p>";
        document.querySelector("#task16").innerHTML += t16.innerHTML;


        let t17 = document.createElement("div");
        t17.innerHTML =
            "<div><h3>" + product.title +
            "</h3><p>" + product.category + "</p></div>";
        document.querySelector("#task17").innerHTML += t17.innerHTML;

    });

    
    data.slice(0, 5).forEach(function(product) {

        let t11 = document.createElement("div");
        t11.innerHTML =
            "<p>" + product.id + " - " + product.title + "</p>";

        document.querySelector("#task11").innerHTML += t11.innerHTML;

    });

    

    data.forEach(function(product) {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML =
            "<h3>Product ID: " + product.id + "</h3>" +

            "<h2>" + product.title.slice(0, 50) + "</h2>" +

            "<p>Price: $" + product.price + "</p>" +

            "<p>" + product.description.slice(0, 100) + "</p>" +

            "<img src='" + product.image + "' width='200'>";

        products.innerHTML += card.outerHTML;

    });

})

.catch(function(error) {

    
    api.innerHTML =
        "<p style='color:red'>API Error: " + error.message + "</p>";

})

.finally(function() {

    
    api.innerHTML += "<p>API request completed</p>";

});