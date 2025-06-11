  async function getProducts() {
      console.log("...loading");

      try {
        
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

       
        const filtered = data.filter(function(product) {
          return product.price > 100;
        });

       
        if (filtered.length === 0) {
          alert("No products above $100");
          return;
        }

        
        console.log("Products above $100:");
        filtered.forEach(function(p) {
          console.log(p.title + " - $" + p.price + " - " + p.category);
        });

        
        filtered.sort(function(a, b) {
          return b.price - a.price;
        });

        console.log("Sorted by price:");
        filtered.forEach(function(p) {
          console.log(p.title + " - $" + p.price);
        });

       
        let total = 0;
        filtered.forEach(function(p) {
          total += p.rating.rate;
        });

        let avg = total / filtered.length;
        console.log("Average rating:", avg.toFixed(2));
        
      } catch (error) {
        console.log("Something went wrong!", error);
      }
    }

   
    getProducts();
    
