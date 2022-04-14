
function Menu(props) {
  return(
    <div>
        <h2 class="text-decoration-underline heading">Terra's Food Menu</h2>
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Hummus and Pita Chips</th>
                        <td>Organic lemon and garlic hummus served with pita chips.</td>
                     </tr>
                     <tr>
                        <th scope="row">Stuffed Grape Leaves</th>
                        <td>A blend of white rice, onion, and mint, wrapped in tender grape leaves.</td>
                    </tr>
                    <tr>
                        <th scope="row">Charcuterie Box</th>
                            <td>Cured prosciutto and salami with gorgonzola, cranberry wensleydale, and
                            sage derby cheese, green olives, roasted almonds, dried apricots, and pita
                            chips.</td>
                        </tr>
                        <tr>
                            <th scope="row">Flatbread Pizza</th>
                            <td>Naan flatbread with your choice of pesto or marinara sauce, mozzarella
                            and provolone cheese, topped with arugula and a drizzle of balsamic glaze.</td>
                        </tr>
                        <tr>
                            <th scope="row">Lobster Bisque</th>
                            <td>Shredded lobster blended with clam broth and sherry wine. Served with
                            crusty french bread. *contains milk, shellfish, and wheat.</td>
                        </tr>
                        <tr>
                            <th scope="row">Tiramisu</th>
                            <td>Made from imported mascarpone and sponge cake, soaked in espresso and topped with cocoa.</td>
                        </tr>
                        <tr>
                            <th scope="row">Stawberry Swirl Cheesecake</th>
                            <td>Classic New York style cheesecake with a graham cracker crust and a
                            strawberry swirl.</td>
                        </tr>
                         <tr>
                            <th scope="row">Limoncello Mascarpone</th>
                            <td>Lemon and limoncello liquor baked into sponge cake with mascarpone icing.</td>
                        </tr>
                </tbody>
                </table>
               </div>
     )

}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu_container')
);