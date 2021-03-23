import {MasterController, SelectionController, MasterView, DetailView} from './person.js';
import {Suite} from '../test/test.js';

const personSuite = Suite('person');

function setup() {
    const masterContainer = document.createElement('div');
    const detailContainer = document.createElement('div');
    detailContainer.innerHTML = '<div>to replace</div>';

    const masterController = MasterController();
    const selectionController = SelectionController();

    MasterView(masterController, selectionController, masterContainer);
    DetailView(selectionController, detailContainer);

    const masterFirstnameInput = row => masterContainer.querySelectorAll('input[type=text]')[row * 2];
    const masterLastnameInput = row => masterContainer.querySelectorAll('input[type=text]')[row * 2 + 1];

    const detailFirstnameInput = () => detailContainer.querySelector('#firstname');
    const detailLastnameInput = () => detailContainer.querySelector('#lastname');

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

personSuite.add('crud', assert => {
    const {masterContainer, masterController} = setup();
    const elementsPerRow = 3;

    //then
    assert.is(masterContainer.children.length, 0 * elementsPerRow);

    //when
    masterController.addPerson();
    //then
    assert.is(masterContainer.children.length, 1 * elementsPerRow);

    //when
    masterController.addPerson();
    //then
    assert.is(masterContainer.children.length, 2 * elementsPerRow);

    //given
    const firstDeleteButton = masterContainer.querySelectorAll('button')[0];
    //when
    firstDeleteButton.click();
    //then
    assert.is(masterContainer.children.length, 1 * elementsPerRow);
});

personSuite.add('update selection in detailContainer', assert => {
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
    const firstDeleteButton = masterContainer.querySelectorAll('button')[0];
    expectedFirstname = '';
    expectedLastname = '';
    //when
    firstDeleteButton.click(); //remove the Person we've just added again - detailContainer should be empty
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);
});

personSuite.add('update attributes when changed', assert => {
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

personSuite.add('clear selection', assert => {
    const {masterController, selectionController, detailFirstnameInput} = setup();

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

personSuite.add('no update on other attributes', assert => {
    const {masterController, masterFirstnameInput, masterLastnameInput, detailFirstnameInput, detailLastnameInput, updateInput} = setup();

    //given
    let expectedFirstname = 'Monika';
    let expectedLastname = 'Mustermann';
    //when
    masterController.addPerson();
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);

    //given
    let updatedFirstname = 'Petra';
    //when
    updateInput(masterFirstnameInput(0), updatedFirstname);
    //then
    assert.is(detailFirstnameInput().value, updatedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);

    //given
    let updatedLastname = 'Meier';
    //when
    updateInput(detailLastnameInput(), updatedLastname);
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname);
    assert.is(masterLastnameInput(0).value, updatedLastname);
});

personSuite.add('deletes first row', assert => {
    const {masterContainer, masterController, masterFirstnameInput, detailFirstnameInput, updateInput} = setup();

    //given
    let updatedFirstname1 = 'Petra';
    let updatedFirstname2 = 'Max';
    let updatedFirstname3 = 'Tom';
    //when
    masterController.addPerson();
    updateInput(masterFirstnameInput(0), updatedFirstname1);
    masterController.addPerson();
    updateInput(masterFirstnameInput(1), updatedFirstname2);
    masterController.addPerson();
    updateInput(masterFirstnameInput(2), updatedFirstname3);
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname1);
    assert.is(masterFirstnameInput(1).value, updatedFirstname2);
    assert.is(masterFirstnameInput(2).value, updatedFirstname3);

    //given
    const firstDeleteButton = masterContainer.querySelectorAll('button')[0];
    //when
    firstDeleteButton.click(); //remove the Person we've just added again - detailContainer should be empty
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname2);
    assert.is(masterFirstnameInput(1).value, updatedFirstname3);
    assert.is(detailFirstnameInput().value, '');
});

personSuite.add('deletes last row', assert => {
    const {masterContainer, masterController, masterFirstnameInput, detailFirstnameInput, updateInput} = setup();

    //given
    let updatedFirstname1 = 'Petra';
    let updatedFirstname2 = 'Max';
    let updatedFirstname3 = 'Tom';
    //when
    masterController.addPerson();
    updateInput(masterFirstnameInput(0), updatedFirstname1);
    masterController.addPerson();
    updateInput(masterFirstnameInput(1), updatedFirstname2);
    masterController.addPerson();
    updateInput(masterFirstnameInput(2), updatedFirstname3);
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname1);
    assert.is(masterFirstnameInput(1).value, updatedFirstname2);
    assert.is(masterFirstnameInput(2).value, updatedFirstname3);

    //given
    const lastDeleteButton = masterContainer.querySelectorAll('button')[2];
    //when
    lastDeleteButton.click(); //remove the Person we've just added again - detailContainer should be empty
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname1);
    assert.is(masterFirstnameInput(1).value, updatedFirstname2);
    assert.is(detailFirstnameInput().value, '');
});

personSuite.add('deletes middle row', assert => {
    const {masterContainer, masterController, masterFirstnameInput, detailFirstnameInput, updateInput} = setup();

    //given
    let updatedFirstname1 = 'Petra';
    let updatedFirstname2 = 'Max';
    let updatedFirstname3 = 'Tom';
    //when
    masterController.addPerson();
    updateInput(masterFirstnameInput(0), updatedFirstname1);
    masterController.addPerson();
    updateInput(masterFirstnameInput(1), updatedFirstname2);
    masterController.addPerson();
    updateInput(masterFirstnameInput(2), updatedFirstname3);
    const lastDeleteButton = masterContainer.querySelectorAll('button')[1];
    lastDeleteButton.click(); //remove the Person we've just added again - detailContainer should be empty
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname1);
    assert.is(masterFirstnameInput(1).value, updatedFirstname3);
    assert.is(detailFirstnameInput().value, '');
});

personSuite.add('adds new person at the end of List', assert => {
    const {masterController, masterFirstnameInput, masterLastnameInput, detailFirstnameInput, detailLastnameInput, updateInput} = setup();

    //given
    let expectedFirstname = 'Monika';
    let expectedLastname = 'Mustermann';
    //when
    masterController.addPerson();
    //then
    assert.is(detailFirstnameInput().value, expectedFirstname);
    assert.is(detailLastnameInput().value, expectedLastname);

    //given
    let updatedFirstname = 'Petra';
    let updatedLastname = 'Meier';
    //when
    updateInput(detailFirstnameInput(), updatedFirstname);
    updateInput(detailLastnameInput(),  updatedLastname);
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname);
    assert.is(masterLastnameInput(0).value, updatedLastname);
    //when
    masterController.addPerson();
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname);
    assert.is(masterLastnameInput(0).value, updatedLastname);
    assert.is(masterFirstnameInput(1).value, expectedFirstname);
    assert.is(masterLastnameInput(1).value, expectedLastname);
});

personSuite.add('update attribute in not selected element and trigger focus', assert => {
    const {masterController, masterFirstnameInput, masterLastnameInput, detailFirstnameInput, detailLastnameInput, updateInput} = setup();

    //given
    let updatedFirstname = 'Petra';
    let updatedLastname = 'Meier';
    let expectedFirstname1 = 'Monika';
    let expectedLastname1 = 'Mustermann';
    let updatedFirstname2 = 'Tom';
    let updatedFirstname3 = 'John';
    //when
    masterController.addPerson();
    updateInput(detailFirstnameInput(), updatedFirstname);
    updateInput(detailLastnameInput(),  updatedLastname);
    masterController.addPerson();
    //then
    assert.is(masterFirstnameInput(0).value, updatedFirstname);
    assert.is(masterLastnameInput(0).value, updatedLastname);
    assert.is(masterFirstnameInput(1).value, expectedFirstname1);
    assert.is(masterLastnameInput(1).value, expectedLastname1);
    //when
    updateInput(masterFirstnameInput(1), updatedFirstname2);
    //then
    assert.is(detailFirstnameInput().value, updatedFirstname2);
    //when
    updateInput(masterFirstnameInput(0), updatedFirstname3);
    //then
    masterFirstnameInput(0).dispatchEvent(new Event('focus'));
    assert.is(detailFirstnameInput().value, updatedFirstname3);
});



personSuite.add('test for memory leak (difficult)', assert => {
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
