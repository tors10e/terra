'use strict';

function Modal(props) {
   return(
            <div class="col-sm plus-block--item" onClick={ShowModal}  >
                            <div class="plus-block--item-wrapper inline">
                                <div class="plus-block--img-wrapper">
                                    <img src="./images/1000x1000/cab_sav_1000x1000.jpg"/>
                                    <h3>Cabernet Sauvignon</h3>

                                    <div class="modal fade" id="cabernet-modal" tabindex="-1" role="dialog"
                                         aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <ModalHeader />
                                                <ModalBody text="Notes of plum, black cherry and tobacco meld to create a
                                                medium body and lightly oaked red wine that's perfect for settling
                                                into a relaxing evening." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
}

function ModalHeader(props) {
return (
<div class="modal-header">
    <h5 class="modal-title">Cabernet Sauvignon</h5>
        <button type="button" class="close" onClick={HideModal} aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>
);
}

function ModalBody(props) {
   return(
      <div class="modal-body">
         <p>{props.text}
         </p>
    </div>
   );
}

function ShowModal(props) {
    return(
        $('#cabernet-modal').modal('show')
    );
}

function HideModal(props) {
    return(
        $('#cabernet-modal').modal('hide')
    );
}

const domContainer = document.querySelector('#modal_container');
ReactDOM.render(
    <Modal />, domContainer
);