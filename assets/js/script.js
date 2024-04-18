window.addEventListener('DOMContentLoaded',function(){
    const btn = this.document.getElementById("btnPassion")
    let passions = ["Madeon","MGMT","Musique","Graphisme","Jeu Vidéo","Mangas","Roller","Férivopathe"]
    const zone = this.document.getElementById("passionRandom")

    btn.addEventListener('click',function(){
        let randomPassion = passions[Math.floor(Math.random()*20)%passions.length]

        zone.innerHTML = "<h1>"+randomPassion+"</h1>"
        switch (randomPassion){
            case 'Madeon':
                zone.innerHTML+=`<img src="https://media.timeout.com/images/106040632/750/422/image.jpg" alt="image de Madeon"><p>Madeon est pour moi une des plus grosses références que je peux avoir aujourd'hui. Il représente des tonnes d'idées et références que j'adore, avec le groupe MGMT, il représente deux des plus gros pilliers de ma musique</p>`
                break;
            
            case 'MGMT':
                zone.innerHTML+=`<img src="https://faroutmagazine.co.uk/static/uploads/1/2021/06/MGMT-are-back-in-the-studio.jpg" alt=""><p>MGMT est avec Madeon, une icone de la musique où je peux écouter leurs albums et musiques sans aucune lassitude. C'est certes un style spécial, mais un style que j'apprécie grandement et qui est un point de repère mental</p>`               
                break;

            case "Musique":
                zone.innerHTML+=`<img src="https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/Justice.jpg?fit=770%2C513&ssl=1" alt="">
                <p>Composante principale de ce qui devient ma personne aujourd'hui. La musique m'accompagne chaque jour a travers divers artistes. Mes préférés y sont Madeon et MGMT, la musique est un vecteur de liberté pour moi. Sans la musique, je ne sais pas ce que je serais.</p>`
                break;
            }
            })

})