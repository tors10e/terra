import React from 'react';


function PrimaryAlert(props) {
    return (
        <div class="alert alert-primary" role="alert">
            <AlertContent text={props.text}/>
            <img src={props.image_url} class="rounded" alt={props.image_alt}></img>
        </div>);
}

function DangerAlert(props) {
    return (
        <div class="alert alert-danger" role="alert">
            <AlertContent text={props.text}/>
        </div>
    );
}

function SecondaryAlert(props) {
    return (
        <div class="alert alert-secondary" role="alert">
            <AlertContent text={props.text}/>
        </div>
    );
}

function AlertContent(props) {
    return (
        <div class="cover-heading">{props.text}
            <img src={props.image_url} class="rounded" alt={props.image_alt}></img>
        </div>);
}

export default SecondaryAlert;