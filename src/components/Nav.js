const Nav = () => {
    return (
        <nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#Navbar">Navbar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#Banner">Banner</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#CoinList">Coin List</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#ConvertBox">Covert Box</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#Footer">Footer</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;