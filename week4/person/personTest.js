
import { MasterController, SelectionController, MasterView, DetailView } from './person.js';
import { Suite }                from "../test/test.js";

const personSuite = Suite("person");

personSuite.add("crud", assert => {

    // setup
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController    = MasterController();
    const selectionController = SelectionController();

    // create the sub-views, incl. binding

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

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

// todo: test for memory leak (difficult)

personSuite.add("update selection in detailContainer", assert => {
    // setup
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController    = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

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
    // setup
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController    = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

    //add Person, this should automatically select it in DetailView
    masterController.addPerson();

    //change value of firstname in DetailView
    detailContainer.querySelector("#firstname").value = "Monika 1234";
    detailContainer.querySelector("#firstname").click()

    //check
    let masterFirstname = masterContainer.querySelectorAll("input[type=text]")[0];
    //assert.is(firstname.value, 'Monika 1234');  --> not working yet

    // now the other way around
    masterFirstname.value = 'Monika'
    //assert.is(detailContainer.querySelector("#firstname").value, masterFirstname.value);
});


personSuite.add("clear selection", assert => {
    // setup
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController    = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

});


personSuite.add("test for memory leak (difficult)", assert => {

});

personSuite.run();
