function Header(){

    const handleDownload = () => {
        const cvUrl = "./CV.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "CV-Masse BATEKE.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <header>
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                <a href="index.html">Masse Bateke</a>
                 </div>
                 <ul className="nav-links">
                    <li><a href="#containerAPropos">A propos de moi</a></li>
                    <li><a href="#containerFormation">Mes formations</a></li>
                    <li><a href="#containerCompetences">Mes compétences</a></li>
                    <li><a href="#containerProjet">Mes projets</a></li>
                    <li><a href="#EmailForm">Me contacter</a></li>
                    <li><button onClick={handleDownload} className="download-btn">Téléchargez mon CV</button></li>
                 </ul>
                <div className="search-container">
                <div className="nav-toggle">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            </div>
        </nav>
      </header>
    );
}

export default Header;
