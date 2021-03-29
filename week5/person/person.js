import { ObservableList, Observable }                                       from "../observable/observable.js";
import { Attribute, LABEL }                                                 from "../presentationModel/presentationModel.js";
import { listItemProjector, tableRowProjector, formProjector }        from "./personProjector.js";

export { MasterController, MasterView, SelectionController, DetailView }

const ALL_PERSON_TEXT_ATTRIBUTE_NAMES = ["firstname", "lastname", "language"];

const Person = () => {                               // facade
    const firstnameAttr = Attribute("Monika");
    firstnameAttr.getObs(LABEL).setValue("First Name");

    const lastnameAttr  = Attribute("Mustermann");
    lastnameAttr.getObs(LABEL).setValue("Last Name");

    const langAttr  = Attribute("JavaScript");
    langAttr.getObs(LABEL).setValue("Favorite Language");

    // lastnameAttr.setConverter( input => input.toUpperCase() );
    // lastnameAttr.setValidator( input => input.length >= 3   );

    return {
        firstname:          firstnameAttr,
        lastname:           lastnameAttr,
        language:           langAttr,
    }
};

const MasterController = () => {

    const personListModel = ObservableList([]); // observable array of Todos, this state is private

    return {
        addModel:            () => personListModel.add(Person()),
        removeModel:         personListModel.del,
        onModelAdd:          personListModel.onAdd,
        onModelRemove:       personListModel.onDel,
    }
};


// View-specific parts

const MasterView = (masterController, selectionController, rootElement) => {

    const tableRoot = document.createElement('table');
    rootElement.appendChild(tableRoot);

    const render = person =>
        tableRowProjector(masterController, selectionController, tableRoot, person, ALL_PERSON_TEXT_ATTRIBUTE_NAMES);

    // binding
    masterController.onModelAdd(render);
};

const NoPerson = (() => { // one time creation, singleton
    const johnDoe = Person();
    ALL_PERSON_TEXT_ATTRIBUTE_NAMES.forEach( name => {
        johnDoe[name].setConvertedValue("");
    });
    return johnDoe;
})();

const SelectionController = () => {

    const selectedModelObs = Observable(NoPerson);

    return {
        setSelectedModel :        selectedModelObs.setValue,
        getSelectedModel :        selectedModelObs.getValue,
        onModelSelected:          selectedModelObs.onChange,
        clearSelection:     () => selectedModelObs.setValue(NoPerson),
    }
};


const DetailView = (selectionController, rootElement) => {

    const render = person =>
        formProjector(selectionController, rootElement, person, ALL_PERSON_TEXT_ATTRIBUTE_NAMES);

    selectionController.onModelSelected(render);
};


