function NavBar(props) {
  return (
      <div>
            <nav class="navbar nav-masthead navbar-expand-lg navbar-normal navbar-fixed-top bg-light">
                <a class="navbar-brand alpha">Terra Incognita Vineyard</a>
                <a class="nav-link" href="index.html">Home</a>
                        <a class="nav-link" href="index.html#hours">Hours</a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="events_public.html">Events</a>
                                <a class="dropdown-item" href="events_private.html">Private Events</a>
                                <a class="dropdown-item" href="events_private.html#weddings">Weddings</a>
                            </div>
                        </div>
                        <a class="nav-link" href="index.html#directions">Directions</a>
                       <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">Food</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="food.html">Food Menu</a>
                            </div>
                        </div>
                        <a class="nav-link" href="index.html#camping">Camping</a>
                        <a class="nav-link" href="index.html#trails">Trails</a>
                        <a class="nav-link" href="index.html#contact">Contact</a>
                        <div class="nav-right ml-auto">
                            <a href="https://www.facebook.com/TerraIncognitaVineyard" target="_blank"> <i
                                    class="bi bi-facebook icon-blue"></i></a>
                        </div>
                    </nav>
        </div>
    );
  }

ReactDOM.render(
    <NavBar />,
    document.getElementById('nav_container')
);