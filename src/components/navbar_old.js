function Navbar(props) {
  return (
      <div>
            <nav class="navbar nav-masthead navbar-expand-lg navbar-normal navbar-fixed-top bg-light">
                <a class="navbar-brand alpha" href="/">Terra Incognita Vineyard</a>
                <a class="nav-link" href="/">Home</a>
                        <a class="nav-link" href="/#hours">Hours</a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/events">Events</a>
                                <a class="dropdown-item" href="/weddings">Weddings</a>
                            </div>
                        </div>
                        <a class="nav-link" href="/#directions">Directions</a>
                       <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">Food</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="food.html">Food Menu</a>
                            </div>
                        </div>
                        <a class="nav-link" href="/#camping">Camping</a>
                        <a class="nav-link" href="/#trails">Trails</a>
                        <a class="nav-link" href="/#contact">Contact</a>
                        <div class="nav-right ml-auto">
                            <a href="https://www.facebook.com/TerraIncognitaVineyard" target="_blank"> <i
                                    class="bi bi-facebook icon-blue"></i></a>
                        </div>
                    </nav>
        </div>
    );
  }


export default Navbar;