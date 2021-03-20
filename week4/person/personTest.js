
import { MasterController, SelectionController, MasterView, DetailView } from './person.js';
import { Suite }                from "../test/test.js";

const personSuite = Suite("person");

function setup() {
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);
    return {masterContainer, detailContainer, masterController, selectionController};
}

personSuite.add("crud", assert => {
    const {masterContainer, detailContainer, masterController, selectionController} = setup();
    const elementsPerRow = 3;

    assert.is(masterContainer.children.length, 0*elementsPerRow);

    masterController.addPerson();
    assert.is(masterContainer.children.length, 1*elementsPerRow);

    masterController.addPerson();
    assert.is(masterContainer.children.length, 2*elementsPerRow);

    const firstInput = masterContainer.querySelectorAll("input[type=text]")[0];
    const firstDeleteButton = masterContainer.querySelectorAll("button")[0];

    firstDeleteButton.click();
    assert.is(masterContainer.children.length, 1*elementsPerRow);
});

personSuite.add("update selection in detailContainer", assert => {
    const {masterContainer, detailContainer, masterController, selectionController} = setup();

    //default should be empty
    assert.is(detailContainer.querySelector("#firstname").value, '');
    assert.is(detailContainer.querySelector("#lastname").value, '');

    //now we add a Person - this should trigger rendering and default selection
    masterController.addPerson();

    assert.is(detailContainer.querySelector("#firstname").value, 'Monika');
    assert.is(detailContainer.querySelector("#lastname").value, 'Mustermann');

    //remove the Person we've just added again - detailContainer should be empty
    const firstDeleteButton = masterContainer.querySelectorAll("button")[0];
    firstDeleteButton.click();

    assert.is(detailContainer.querySelector("#firstname").value, '');
    assert.is(detailContainer.querySelector("#lastname").value, '');

});

personSuite.add("update attributes when changed", assert => {
    const {masterContainer, detailContainer, masterController, selectionController} = setup();

    //add Person, this should automatically select it in DetailView
    masterController.addPerson();

    //change value of firstname in DetailView
    detailContainer.querySelector("#firstname").value = "Monika 1234";
    detailContainer.querySelector("#firstname").click()

    let masterFirstname = masterContainer.querySelectorAll("input[type=text]")[0];
    //assert.is(masterFirstname.value, 'Monika 1234'); todo

    // now the other way around
    masterFirstname.value = 'Monika'
    //assert.is(detailContainer.querySelector("#firstname").value, masterFirstname.value);
});




personSuite.add("clear selection", assert => {
    const {masterContainer, detailContainer, masterController, selectionController} = setup();

    masterController.addPerson();
    assert.is(detailContainer.querySelector("#firstname").value, 'Monika');

    selectionController.clearSelection();
    assert.is(detailContainer.querySelector("#firstname").value, '');
});


personSuite.add("test for memory leak (difficult)", assert => {
// todo: test for memory leak (difficult)

});

personSuite.run();
