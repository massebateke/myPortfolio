import Header from './Header.jsx';
import Footer from './Footer.jsx';
import APropos from './APropos.jsx';
import AProposTitre from './AProposTitre.jsx';
import Projet from './Projet.jsx';
import ProjetTitre from './ProjetTitre.jsx';
import Formation from './Formation.jsx';
import FormationTitre from './FormationTitre.jsx';
import Competences from './Competences.jsx';
import CompetencesTitre from './CompetencesTitre.jsx';
import ContactTitre from './ContactTitre.jsx';
import Moi from './Moi.jsx';
import ok from '../assets/ok.png';
import css from '../assets/css.png';
import sass from '../assets/téléchargement (1).jpg';
import html from '../assets/html.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/téléchargement (4).png';
import js from '../assets/téléchargement (5).png';
import php from '../assets/php.png';
import mysql from '../assets/téléchargement (6).png';
import meetic from '../assets/meetic.png';
import twitter from '../assets/twitter.png';
import puissance4 from '../assets/p4.jpg';
import puissance4img from '../assets/4.png';
import hetic from '../assets/hetic.jpg';
import web from '../assets/webb.png';
import twitterimg from '../assets/image.webp';
import meeticimg from '../assets/meeticprojet.png';
import EmailForm from './EmailForm.jsx';




export default function Home() {
    return (
        <>
            <Header></Header>
            <div id="containerAPropos"></div>
            <AProposTitre></AProposTitre>
            <Moi img={ok}></Moi>
            <div className="containerAPropos">
            <APropos description="Depuis petite, j'ai toujours rêvé de voyager. J'ai eu la chance de découvrir différents horizons, et chaque voyage a enrichi mon expérience de manière unique. Ces aventures ont non seulement élargi ma vision du monde, mais m'ont aussi appris à apprécier les différences culturelles et à m'adapter à de nouveaux environnements."></APropos>
            <APropos description="La musique occupe une place importante dans ma vie. J'aime écouter différents genres musicaux et m'inspirer de ce qui se fait de nouveau. Cela m’a aussi amenée à réaliser un petit projet personnel : un lecteur musical en JavaScript. Ce projet m'a permis d'explorer des aspects techniques comme le contrôle de lecture audio et l'interface utilisateur, tout en combinant ma passion pour la musique et le développement." link='https://massebateke.github.io/music-player/'></APropos>
            </div>
            <div id="containerFormation"></div>
            <FormationTitre></FormationTitre>
            <div className="containerFormation">
            <Formation title = "Formation Web Academy by Epitech (94270) (2024-2026)" img = {web} description="Actuellement en formation en développement web à la Web Academy, je suis en train d'apprendre à coder en autonomie grâce à une pédagogie axée sur 'apprendre à apprendre'. Cette approche me permet de développer une grande capacité d’adaptation et de renforcer mes compétences en JavaScript, PHP, SQL, Tailwind, SASS et React."></Formation>
            <Formation title = "Formation HETIC, l'école du Web (93100) (2022-2024)" img = {hetic} description="J’ai suivi une formation en développement web à HETIC, où j’ai acquis des compétences en JavaScript, PHP et SQL. J’ai travaillé sur plusieurs projets, dont un jeu en JavaScript, et développé mes capacités en gestion de projet et en résolution de problèmes techniques."></Formation>
            </div>
            <div id="containerCompetences"></div>
            <CompetencesTitre></CompetencesTitre>
            <div className="containerCompetences">
            <Competences title = 'HTML' img = {html}></Competences>
            <Competences title = 'CSS' img = {css}></Competences>
            <Competences title = 'JS' img = {js}></Competences>
            <Competences title = 'PHP' img = {php}></Competences>
            <Competences title = 'MySQL' img = {mysql}></Competences>
            <Competences title = 'Tailwind CSS' img = {tailwind} ></Competences>
            <Competences title = 'SCSS' img = {sass}></Competences>
            <Competences title = 'React JS' img = {react} ></Competences>
            </div>
            <div id="containerProjet"></div>
            <ProjetTitre ></ProjetTitre>
            <div className="containerProjet">
            <Projet title = 'Puissance 4' lien="https://massebateke.github.io/Puissance4/" img = {puissance4} imgdemo= {puissance4img} description="Le projet Puissance 4 est un jeu développé en JavaScript sous forme de plugin, avec un plateau interactif où les joueurs placent leurs jetons tour à tour. Il détecte automatiquement les combinaisons gagnantes en ligne, colonne et diagonale. J’ai ajouté des fonctionnalités comme l’annulation du dernier coup et la gestion de la fin de partie. Ce projet m’a permis d’approfondir la manipulation du DOM et d’optimiser les algorithmes de détection des victoires. J'ai utilisé les languages HTML ,SASS et JS" date='Mars 2025'></Projet>
            <Projet title = 'My Twitter' lien="https://github.com/massebateke/myTwitter" img = {twitter}  imgdemo= {twitterimg} description="Le projet MyTwitter est un mini réseau social inspiré de Twitter, développé en PHP avec une base de données MySQL. Il permet aux utilisateurs de s’inscrire, publier des posts, liker et commenter. J’ai également implémenté la gestion des profils et un système d’authentification sécurisé. Ce projet m’a aidé à mieux comprendre la programmation orientée objet en PHP et la gestion des bases de données relationnelles.J'ai utilisé les languages PHP ,Tailwind CSS, HTML et JS" date ='Mars 2025'></Projet>
            <Projet title = 'My Meetic' lien="https://github.com/massebateke/MyMeetic" img = {meetic} imgdemo= {meeticimg} description="Le projet My Meetic est une plateforme de rencontres où les utilisateurs peuvent créer un profil, rechercher des personnes compatibles et échanger des messages privés. J’ai conçu un système d’inscription sécurisé et une base de données structurée pour gérer les relations entre utilisateurs. Ce projet m’a permis de renforcer mes compétences en PHP et en gestion des bases de données.J'ai utilisé les languages PHP ,CSS, HTML et JS" date = 'Fevrier 2025'></Projet>
            </div>
            <ContactTitre></ContactTitre>
            <div id="EmailForm"></div>
            <EmailForm></EmailForm>
            <Footer></Footer>
        </>
    );
}