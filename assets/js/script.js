window.addEventListener('DOMContentLoaded',function(){
    const btn = this.document.getElementById("btnPassion")
    let passions = ["Madeon","MGMT","Musique","Graphisme","Jeu Vidéo","Mangas","Roller","Férivopathe"]
    const zone = this.document.getElementById("passionRandom")

    let copyP = [...passions]


    btn.addEventListener('click',function(){
        
        let randomIndex = Math.floor(Math.random()*20)%copyP.length
        console.log(randomIndex)
        zone.innerHTML = "<h1>"+copyP[randomIndex]+"</h1>"
        switch (copyP[randomIndex]){
            case 'Madeon':
                zone.innerHTML+=`<img src="https://media.timeout.com/images/106040632/750/422/image.jpg" alt="Image de Madeon"><p>Madeon est pour moi une des plus grosses références que je peux avoir aujourd'hui. Il représente des tonnes d'idées et références que j'adore, avec le groupe MGMT, il représente deux des plus gros pilliers de ma musique.</p>`
                break;
            
            case 'MGMT':
                zone.innerHTML+=`<img src="https://faroutmagazine.co.uk/static/uploads/1/2021/06/MGMT-are-back-in-the-studio.jpg" alt="Image du duo MGMT"><p>MGMT est avec Madeon, une icône de la musique où je peux écouter leurs albums et musiques sans aucune lassitude. C'est certes un style spécial, mais un style que j'apprécie grandement et qui est un point de repère mental.</p>`               
                break;

            case "Musique":
                zone.innerHTML+=`<img src="https://i0.wp.com/thegroovecartel.com/wp-content/uploads/2024/01/Justice.jpg?fit=770%2C513&ssl=1" alt="Image du groupe Justice">
                <p>Composante principale de ce qui devient ma personne aujourd'hui. La musique m'accompagne chaque jour a travers divers artistes. Mes préférés y sont Madeon et MGMT, la musique est un vecteur de liberté pour moi. Sans la musique, je ne sais pas ce que je serais.</p>`
                break;
            case "Graphisme":
                zone.innerHTML += `                <img src="https://www.geeky-gadgets.com/wp-content/uploads/2023/10/How-to-create-vector-graphics-using-AI-and-Adobe-Illustrator.webp" alt="Image vectorielle">
                <p>Une des plus grandes passions que j'ai dans la vie de tous les jours, c'est le graphisme. Des projets de plus en plus grands m'animent et font que je suis cette personne aujourd'hui.</p>`
                break;
            case "Jeu Vidéo":
                zone.innerHTML+=`                <img src="https://live.staticflickr.com/65535/50042619457_77f1da6d0c_k.jpg" alt="Image du jeu Cyberpunk 2077">
                <p>De Night City au mont Céleste, le jeu vidéo est un vecteur d'escapades et d'exploration de soi-même. Même si depuis mes études, je joue moins, c'est une de mes passions qui me suit depuis ma jeunesse.</p>`
                break;
            case "Roller":
                zone.innerHTML += `                <img src="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/guide-shopping/quel-type-de-rollers-choisir-pour-debuter-4187348/60238468-1-fre-FR/Quel-type-de-rollers-choisir-pour-debuter.jpg" alt="Image de personnes faisant du roller">
                <p>Depuis septembre 2023, le roller m'accompagne dans mon quotidien et représente un réel moyen de m'échapper dans la vie de tous les jours. Ce sport me permet chaque semaine d'aller plus loin dans mes limites.</p>`
                break;
            case "Mangas":
                zone.innerHTML += `                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYZz9cHoPyxUzXWUq-Yonr9bq3HFPN8nVwj155l18G8FcYUEGF_sZKR2WIY-IVjJqeMMwn0EePIm7VIfusid3mMPuMgs57vnLbRF.jpg?r=43c" alt="Image issue du manga Gambling School">
                <p>La culture japonaise et les mangas sont une pièce du puzzle définissant mes passions. Parmis ceux que j'aime le plus, Gmabling School et Made in Abyss y figurent.</p>`
                break;
            case "Férivopathe":
                zone.innerHTML += `                <img src="https://tennessine.co.uk/metro/scripts/sharing_image.php" alt="Image d'un plan de métro">
                <p>Être férivopathe c'est l'appréciation des réseaux féroviaires et des transports en commun. C'est une affection que j'ai qui a défini le style de ce site web. </p>`

            }
        
        if(copyP.length===1){
            copyP = [...passions]
        }else{
            copyP.splice(randomIndex,1)
        }
    })

})