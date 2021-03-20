import {MasterController, SelectionController, MasterView, DetailView} from './person.js';
import {Suite} from "../test/test.js";

const personSuite = Suite("person");

function setup() {
    const masterContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "<div>to replace</div>";

    const masterController = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

    const masterFirstnameInput = row => masterContainer.querySelectorAll("input[type=text]")[row * 2];
    const masterLastnameInput = row => masterContainer.querySelectorAll("input[type=text]")[row * 2 + 1];

    const detailFirstnameInput = () => detailContainer.querySelector("#firstname");
    const detailLastnameInput = () => detailContainer.querySelector("#lastname");

    const updateInput = (inputElement, value) => {
        inputElement.value = value;
        inputElement.dispatchEvent(new Event('input'));
    }

    return {
        masterContainer,
        detailContainer,
        masterController,
        selectionController,
        masterFirstnameInput,
        masterLastnameInput,
        detailFirstnameInput,
        detailLastnameInput,
        updateInput
    };
}

personSuite.add("crud", assert => {
    const {masterContainer, masterController} = setup();
    const elementsPerRow = 3;

    //given
    //when
    //then
    assert.is(masterContainer.children.length, 0 * elementsPerRow);

    //given
    //when
    masterController.addPerson();
    //then
    assert.is(masterContainer.children.length, 1 * elementsPerRow);

    //given
    //when
    masterController.addPerson();
    //then
    assert.is(masterContainer.children.length, 2 * elementsPerRow);

    //given
    const firstDeleteButton = masterContainer.querySelectorAll("button")[0];
    //when
    firstDeleteButton.click();
    //then
    assert.is(masterContainer.children.length, 1 * elementsPerRow);
});

personSuite.add("update selection in detailContainer", assert => {
    const {masterContainer, masterController, detailFirstnameInput, detailLastnameInput} = setup();

    //given
    let expectedFirstname = '';
    let expectedLastname = '';
    //when
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);

    //given
    expectedFirstname = 'Monika';
    expectedLastname = 'Mustermann';
    //when
    masterController.addPerson(); //now we add a Person - this should trigger rendering and default selection
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);

    //given
    const firstDeleteButton = masterContainer.querySelectorAll("button")[0];
    expectedFirstname = '';
    expectedLastname = '';
    //when
    firstDeleteButton.click(); //remove the Person we've just added again - detailContainer should be empty
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);
});

personSuite.add("update attributes when changed", assert => {
    const {masterController, masterFirstnameInput, detailFirstnameInput, updateInput} = setup();

    //given
    let expectedFirstname = 'Monika';
    //when
    masterController.addPerson();
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);

    //given
    let updatedFirstname = 'Petra';
    //when
    updateInput(masterFirstnameInput(0), updatedFirstname);
    //then
    assert.is(detailFirstnameInput().value, updatedFirstname);

    //given
    updatedFirstname = 'Max';
    //when
    updateInput(detailFirstnameInput(), updatedFirstname);
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname);
});

personSuite.add("clear selection", assert => {
    const {detailContainer, masterController, selectionController, detailFirstnameInput} = setup();

    //given
    let expectedFirstname = 'Monika';
    //when
    masterController.addPerson();
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);

    //given
    expectedFirstname = '';
    //when
    selectionController.clearSelection();
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
});

personSuite.add("test for memory leak (difficult)", assert => {
    const {masterController} = setup();

    masterController.onPersonAdd(person => {
        masterController.onPersonRemove((person, removeMe) => {
            //removeMe();
        });
    });

    for (let i = 0; i < 100; i++) {   // without removeMe:  10000 : 2s, 20000: 8s, 100000: ???s
        const person = masterController.addPerson();
        masterController.removePerson(person);
    }
});
personSuite.run();