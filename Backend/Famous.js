const famousData = [
    {
      "image": "  https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjgKa5470YLU2bp4P6DYRRYerGkkzfrqXpUELVQm17EpyNqu08",
      "heading": "Mona Lisa"
  },
  {
    "image": "  https://lh3.googleusercontent.com/Pd2nCUHUz4Ruc76LRh1-H0Dldl04hWSXw8P9uCYZ4TIWP7yNPArIgWlHZrf1qT9T=s1200 ",
    "heading": "The Starry Night"
  },
    {
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrIWkiaJWXUsow-iwMFhjOaGfE5Q-uZO-m6x0SmFrvrJ87_2DS",
        "heading": "Las Meninas"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/240px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
        "heading": "Lady with an Ermine"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg",
        "heading": "Flaming June"
    },
    {
        "image": "https://cms.guggenheim-bilbao.eus/uploads/2020/09/composition-8-768x535.jpg",
        "heading": "Composition 8"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/220px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
        "heading": "Wanderer above the Sea of Fog"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fragonard%2C_The_Swing.jpg",
        "heading": "The Swing"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/350px-La_Boh%C3%A9mienne_endormie.jpg",
        "heading": "The Sleeping Gypsy"
    },
    {
        "image": "https://uploads0.wikiart.org/images/leonardo-da-vinci/isabella-d-este-1500.jpg",
        "heading": "Portrait of Isabella d'Este"
    }
  ];
  
  app.get('/api/data', (req, res) => {
      res.json(data);
  });