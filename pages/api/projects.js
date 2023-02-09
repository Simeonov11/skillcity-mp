export default function skillsHandler(req, res) {
    const skills = [
        { name: "Web Store Pet Planet" , url: "https://www.petplanet.co.uk/", imgUrl: "assets/1.png"},
        { name: "Counter React App" , url: "https://arnab-datta.github.io/counter-app/", imgUrl: "assets/2.png"},
        { name: "Calculator React App" , url: "https://ahfarmer.github.io/calculator/", imgUrl: "assets/3.png"}
    ];

    setTimeout(() => {
        res.json(skills);
    },3000);
  }
  