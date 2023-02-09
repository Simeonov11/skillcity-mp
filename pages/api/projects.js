export default function skillsHandler(req, res) {
    const skills = [
        { name: "API-Web Store Pet Planet" , url: "https://www.petplanet.co.uk/", imgUrl: "assets/1.png"},
        { name: "API-Counter React App" , url: "https://arnab-datta.github.io/counter-app/", imgUrl: "assets/2.png"},
        { name: "API-Calculator React App" , url: "https://ahfarmer.github.io/calculator/", imgUrl: "assets/3.png"}
    ];

    setTimeout(() => {
        res.json(skills);
    },3000);
  }
  