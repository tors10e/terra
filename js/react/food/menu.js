
function Menu(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            { "class": "text-decoration-underline heading" },
            "Wine Tasting Snacks Menu"
        ),
        React.createElement(
            "table",
            { "class": "table table-striped" },
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Feta Citrus Salad"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Mixed greens, blood orange, cucumber, goat feta cheese, sunflower seeds, citrus vinaigrette"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Stuffed Grape Leaves"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "White rice, onion, mint"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Roasted Garlic Hummus"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Served with pita chips and crackers"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Chimichurri Asparagus"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Asparagus, carrots, red wine vinegar marinade"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Charcuterie Box"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Smoked gouda, colby jack, cured meats, pickled vegetables, hummus, pita chips or crackers"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Chicken Salad Wrap"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Pecans, golden raisins, ginger, leaf lettuce, whole wheat wrap"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "Roast Beef Sandwich"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Tomato bacon jam, havarti cheese, leaf lettuce, ciabatta bread"
                    )
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu_container'));