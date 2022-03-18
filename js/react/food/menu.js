
function Menu(props) {
                    return React.createElement(
                                        "div",
                                        null,
                                        React.createElement(
                                                            "h2",
                                                            { "class": "text-decoration-underline" },
                                                            "Wine Tasting Snacks Menu"
                                        ),
                                        React.createElement(
                                                            "dl",
                                                            { "class": "row" },
                                                            React.createElement(
                                                                                "dt",
                                                                                { "class": "col-sm-3" },
                                                                                "Garden Salad"
                                                            ),
                                                            React.createElement(
                                                                                "dd",
                                                                                { "class": "col-sm-9 text-left" },
                                                                                "Mixed greeens, tomato, cucumber, carrots, radishes, balsamic vinaigrette"
                                                            ),
                                                            React.createElement(
                                                                                "dt",
                                                                                { "class": "col-sm-3" },
                                                                                "Roasted Pepper Hummus"
                                                            ),
                                                            React.createElement(
                                                                                "dd",
                                                                                { "class": "col-sm-9 text-left" },
                                                                                "Served with pita chips and crackers"
                                                            ),
                                                            React.createElement(
                                                                                "dt",
                                                                                { "class": "col-sm-3" },
                                                                                "Chimichurri Asparagus"
                                                            ),
                                                            React.createElement(
                                                                                "dd",
                                                                                { "class": "col-sm-9 text-left" },
                                                                                "Carrots, parsley, shallot, and wine marinade"
                                                            ),
                                                            React.createElement(
                                                                                "dt",
                                                                                { "class": "col-sm-3" },
                                                                                "Charcuterie Box"
                                                            ),
                                                            React.createElement(
                                                                                "dd",
                                                                                { "class": "col-sm-9 text-left" },
                                                                                "Smoked gouda, colby jack, cured meats, pickled vegetables, hummus, pita chips or crackers"
                                                            ),
                                                            React.createElement(
                                                                                "dt",
                                                                                { "class": "col-sm-3" },
                                                                                "Chicken Salad Wrap"
                                                            ),
                                                            React.createElement(
                                                                                "dd",
                                                                                { "class": "col-sm-9 text-left" },
                                                                                "Pecans, golden raisins, ginger, leaf lettuce, whole wheat wrap"
                                                            )
                                        )
                    );
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu_container'));