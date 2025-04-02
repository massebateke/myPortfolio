
function Footer() {
    return (
        <>
        <br /><br />
        <footer className="footer">
            
            <ul className="footer__links">
                <li><a href="#containerAPropos">A propos de moi</a></li>
                <li><a href="#containerFormation">Mes formations</a></li>
                <li><a href="#containerFormation">Mes compétences</a></li>
                <li><a href="#containerProjet">Mes projets</a></li>
                <li><a href="#EmailForm">Me contacter</a></li>
            </ul>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Massé Website</p>
            <p>Hebergeur : Vercel</p>
            <p>Des questions par rapport à vos données ? <a href="mailto:massebateke4@gmail.com">Me contacter</a></p>
            <p>Ce site ne collecte aucune donnée personnelle, à l’exception des informations fournies via le formulaire de contact, qui sont utilisées uniquement pour répondre aux demandes et ne sont pas conservées.</p>

        </footer>
        </>
    );
}

export default Footer;
