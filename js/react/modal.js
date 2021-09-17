'use strict';

//import $ from 'jquery';

function Modal(props) {
    return React.createElement(
        "div",
        { "class": "col-sm plus-block--item", onClick: ShowModal },
        React.createElement(
            "div",
            { "class": "plus-block--item-wrapper inline" },
            React.createElement(
                "div",
                { "class": "plus-block--img-wrapper" },
                React.createElement("img", { src: "./images/1000x1000/cab_sav_1000x1000.jpg" }),
                React.createElement(
                    "h3",
                    null,
                    "Cabernet Sauvignon"
                ),
                React.createElement(
                    "div",
                    { "class": "modal fade", id: "cabernet-modal", tabindex: "-1", role: "dialog",
                        "aria-hidden": "true" },
                    React.createElement(
                        "div",
                        { "class": "modal-dialog", role: "document" },
                        React.createElement(
                            "div",
                            { "class": "modal-content" },
                            React.createElement(ModalHeader, null),
                            React.createElement(ModalBody, { text: "Notes of plum, black cherry and tobacco meld to create a\r medium body and lightly oaked red wine that's perfect for settling\r into a relaxing evening." })
                        )
                    )
                )
            )
        )
    );
}

function ModalHeader(props) {
    return React.createElement(
        "div",
        { "class": "modal-header" },
        React.createElement(
            "h5",
            { "class": "modal-title" },
            "Cabernet Sauvignon"
        ),
        React.createElement(
            "button",
            { type: "button", "class": "close", onClick: HideModal, "aria-label": "Close" },
            React.createElement(
                "span",
                { "aria-hidden": "true" },
                "\xD7"
            )
        )
    );
}

function ModalBody(props) {
    return React.createElement(
        "div",
        { "class": "modal-body" },
        React.createElement(
            "p",
            null,
            props.text
        )
    );
}

function ShowModal(props) {
    return $('#cabernet-modal').modal('show');
}

function HideModal(props) {
    return $('#cabernet-modal').modal('hide');
}

var domContainer = document.querySelector('#modal_container');
//const domContainer = document.getElementById('modal_container')
ReactDOM.render(React.createElement(Modal, null), domContainer);