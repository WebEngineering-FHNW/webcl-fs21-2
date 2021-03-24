import {VALUE, VALID, EDITABLE, LABEL} from "../presentationModel/presentationModel.js";

export { personListItemProjector, personTableItemProjector, formProjector }

const bindTextInput = (textAttr, inputElement) => {
    inputElement.oninput = _ => textAttr.setConvertedValue(inputElement.value);

    textAttr.getObs(VALUE).onChange(text => inputElement.value = text);

    textAttr.getObs(VALID, true).onChange(
        valid => valid
          ? inputElement.classList.remove("invalid")
          : inputElement.classList.add("invalid")
    );

    textAttr.getObs(EDITABLE, true).onChange(
        isEditable => isEditable
        ? inputElement.removeAttribute("readonly")
        : inputElement.setAttribute("readonly", true));

    textAttr.getObs(LABEL, '').onChange(label => inputElement.setAttribute("title", label));
};

const personTextProjector = textAttr => {

    const inputElement = document.createElement("INPUT");
    inputElement.type = "text";
    inputElement.size = 20;

    bindTextInput(textAttr, inputElement);

    return inputElement;
};

const personTableItemProjector = (masterController, selectionController, rootElement, model, attributeNames) => {

    // create table row which is the parent of all attributes
    const tableRow  = document.createElement("tr");
    
    const deleteButton      = document.createElement("Button");
    deleteButton.setAttribute("class","delete");
    deleteButton.innerHTML  = "&times;";
    // todo: refactor "person"
    deleteButton.onclick    = _ => masterController.removePerson(model);

    const inputElementArray = [];

    attributeNames.forEach( name => {
        const inputElement = personTextProjector(model[name]);
        inputElement.onfocus  = _ => selectionController.setSelectedPerson(model);
        inputElementArray.push( inputElement );
    });

    // todo: refactor "person"
    selectionController.onPersonSelected(
        selected => selected === model
            ? deleteButton.classList.add("selected")
            : deleteButton.classList.remove("selected")
    );

    masterController.onPersonRemove( (removedPerson, removeMe) => {
        if (removedPerson !== model) return;
        rootElement.removeChild(tableRow);
        selectionController.clearSelection();
        removeMe();
    } );

    // create table cell for delete button
    const tableCell = document.createElement("td");
    tableCell.appendChild(deleteButton);
    tableRow.appendChild(tableCell);

    // add table cells for each attribute
    inputElementArray.forEach( inputElement => {
        const tableCell = document.createElement("td");
        tableCell.appendChild(inputElement);
        tableRow.appendChild(tableCell);
    });

    // add table row to the table body and put the whole stuff in the root element
    rootElement.appendChild(tableRow);

    // todo: selection handling (row)
    selectionController.setSelectedPerson(model);
};

const personListItemProjector = (masterController, selectionController, rootElement, model, attributeNames) => {

    const deleteButton      = document.createElement("Button");
    deleteButton.setAttribute("class","delete");
    deleteButton.innerHTML  = "&times;";
    // todo: refactor "person"
    deleteButton.onclick    = _ => masterController.removePerson(model);

    const inputElementArray = [];

    attributeNames.forEach( name => {
        const inputElement = personTextProjector(model[name]);
        inputElement.onfocus  = _ => selectionController.setSelectedPerson(model);
        inputElementArray.push( inputElement );
    });

    // todo: refactor "person"
    selectionController.onPersonSelected(
        selected => selected === model
          ? deleteButton.classList.add("selected")
          : deleteButton.classList.remove("selected")
    );

    masterController.onPersonRemove( (removedPerson, removeMe) => {
        if (removedPerson !== model) return;
        rootElement.removeChild(deleteButton);
        inputElementArray.forEach( inputElement => {
            rootElement.removeChild(inputElement);
        });
        selectionController.clearSelection();
        removeMe();
    } );

    rootElement.appendChild(deleteButton);
    inputElementArray.forEach( inputElement => {
        rootElement.appendChild(inputElement);
    });
    selectionController.setSelectedPerson(model);
};

const formProjector = (detailController, rootElement, model, attributeNames) => {

    const divElement = document.createElement("DIV");
    divElement.innerHTML = `
    <FORM>
        <DIV class="detail-form"> 
        </DIV>
    </FORM>`;

    const detailForm = divElement.querySelector(".detail-form");
    attributeNames.forEach( name => {
        detailForm.innerHTML += `        
            <LABEL for="${name}"></LABEL>
            <INPUT TYPE="text" size="20" id="${name}"> 
        `;
    });

    attributeNames.forEach( name => {
        bindTextInput(model[name], divElement.querySelector('#'+name));
        model[name].getObs(LABEL, '')
            .onChange(label => divElement.querySelector('[for='+ name+']').textContent = label);
    });

    rootElement.firstChild.replaceWith(divElement);
};
