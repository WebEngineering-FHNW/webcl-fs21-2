import {VALUE, VALID, EDITABLE, LABEL} from "../presentationModel/presentationModel.js";

export { listItemProjector, tableRowProjector, formProjector }

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

const textInputProjector = textAttr => {

    const inputElement = document.createElement("INPUT");
    inputElement.type = "text";
    inputElement.size = 20;

    bindTextInput(textAttr, inputElement);

    return inputElement;
};

const tableCellProjector = element => {
    const tableCell = document.createElement("td");
    tableCell.appendChild(element);
    return tableCell;
};

const tableRowProjector = (masterController, selectionController, rootElement, model, attributeNames) => {

    // create table row which is the parent of all attributes
    const tableRow  = document.createElement("tr");

    // create delete button
    const deleteButton      = document.createElement("Button");
    deleteButton.setAttribute("class","delete");
    deleteButton.innerHTML  = "&times;";
    deleteButton.onclick    = _ => masterController.removeModel(model);

    // create all attributes
    const inputElements = [];
    attributeNames.forEach( name => {
        const inputElement = textInputProjector(model[name]);
        inputElement.onfocus  = _ => selectionController.setSelectedModel(model);
        inputElements.push( inputElement );
    });

    selectionController.onModelSelected(
        selected => selected === model
            ? tableRow.classList.add("selected")
            : tableRow.classList.remove("selected")
    );

    masterController.onModelRemove( (removedModel, removeMe) => {
        if (removedModel !== model) return;
        rootElement.removeChild(tableRow);
        selectionController.clearSelection();
        removeMe();
    } );

    // add table cells to table row
    tableRow.appendChild(tableCellProjector(deleteButton));
    inputElements.forEach( inputElement => {
        tableRow.appendChild(tableCellProjector(inputElement));
    });

    // add table row to the table body and put the whole stuff in the root element
    rootElement.appendChild(tableRow);

    // todo: selection handling (row)
    selectionController.setSelectedModel(model);
};

const listItemProjector = (masterController, selectionController, rootElement, model, attributeNames) => {

    const deleteButton      = document.createElement("Button");
    deleteButton.setAttribute("class","delete");
    deleteButton.innerHTML  = "&times;";
    deleteButton.onclick    = _ => masterController.removeModel(model);

    const inputElementArray = [];

    attributeNames.forEach( name => {
        const inputElement = textInputProjector(model[name]);
        inputElement.onfocus  = _ => selectionController.setSelectedModel(model);
        inputElementArray.push( inputElement );
    });

    selectionController.onModelSelected(
        selected => selected === model
          ? deleteButton.classList.add("selected")
          : deleteButton.classList.remove("selected")
    );

    masterController.onModelRemove( (removedModel, removeMe) => {
        if (removedModel !== model) return;
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
    selectionController.setSelectedModel(model);
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
