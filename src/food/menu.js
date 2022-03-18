
function Menu(props) {
  return(
  <div>
                <h2 class="text-decoration-underline">Wine Tasting Snacks Menu</h2>
                <dl class="row">
                    <dt class="col-sm-3">Garden Salad</dt>
                    <dd class="col-sm-9 text-left">Mixed greeens, tomato, cucumber, carrots, radishes, balsamic vinaigrette</dd>

                    <dt class="col-sm-3">Roasted Pepper Hummus</dt>
                    <dd class="col-sm-9 text-left">Served with pita chips and crackers</dd>

                    <dt class="col-sm-3">Chimichurri Asparagus</dt>
                    <dd class="col-sm-9 text-left">Carrots, parsley, shallot, and wine marinade</dd>

                    <dt class="col-sm-3">Charcuterie Box</dt>
                    <dd class="col-sm-9 text-left">Smoked gouda, colby jack, cured meats, pickled vegetables, hummus, pita chips or crackers</dd>

                    <dt class="col-sm-3">Chicken Salad Wrap</dt>
                    <dd class="col-sm-9 text-left">Pecans, golden raisins, ginger, leaf lettuce, whole wheat wrap</dd>
                </dl>
               </div>
     )

}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu_container')
);