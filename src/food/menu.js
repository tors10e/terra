
function Menu(props) {
  return(
    <div>
        <h2 class="text-decoration-underline heading">Wine Tasting Snacks Menu</h2>
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Feta Citrus Salad</th>
                        <td>Mixed greens, blood orange, cucumber, goat feta cheese, sunflower seeds, citrus vinaigrette</td>
                     </tr>
                     <tr>
                        <th scope="row">Stuffed Grape Leaves</th>
                        <td>White rice, onion, mint</td>
                    </tr>
                                                <tr>
                            <th scope="row">Roasted Garlic Hummus</th>
                            <td>Served with pita chips and crackers</td>
                        </tr>
                                                <tr>
                            <th scope="row">Chimichurri Asparagus</th>
                            <td>Asparagus, carrots, red wine vinegar marinade</td>
                        </tr>
                                                <tr>
                            <th scope="row">Charcuterie Box</th>
                            <td>Smoked gouda, colby jack, cured meats, pickled vegetables, hummus, pita chips or crackers</td>
                        </tr>
                                                <tr>
                            <th scope="row">Chicken Salad Wrap</th>
                            <td>Pecans, golden raisins, ginger, leaf lettuce, whole wheat wrap</td>
                        </tr>
                                                <tr>
                            <th scope="row">Roast Beef Sandwich</th>
                            <td>Tomato bacon jam, havarti cheese, leaf lettuce, ciabatta bread</td>
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