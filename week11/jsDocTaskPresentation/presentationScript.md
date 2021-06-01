# ----------------------------- DRAFT -----------------------------
# Presentation of JS Doc Assignment


## Agenda
 
* Demonstration of IDE Support
* Show actual JSDoc
* Explain some of the choices I made & explain alternatives


## What I did

* Write JSDoc
* Bit weird to get used to


## Demonstartion

### Testing & Util

* We all know testing is important => Since the testing framework now has jsdoc, let's see that in action.
* Create myNewTest.js
* Import Suite => name param & description is shown
* Create new Suite 
* suite. => Available methods are shown with signature
* suite.add => Test name
* autocomplete init test callbak
* I also added jsDoc for the util package, so let's use that to test
* Import padLeft
* Apply -> actual
* assert.is to expected
* Now we still need to run it -> autocomplete shows us suite.run()
* Copy in TestSuite and open

## RestClient

* Create myRestClientDemo file
* Import client
* client -> Ctrl + Q shows signature
* Linked Response Type
* Linked RestClientType
* We just want to make a get call
* SWAPI Deathstar url
* call client(url) => as doc show this will use GET and empty body
* Doc shows Promise Return type => then call
* Show prepared html
* Copy in write method
* call write on then => Content of promise is any, but we know it has a name. => Opportunity for more doc. But not responsibility of rest client. 
* add onCatch for console.log
* Show file => Hello Deathstar
* Make url invalid => Show error in console


## Show Doc

* Just do it


## What to do differently

* RestClient => typedef on base of {Function}
    * No interface for single method
    * No other instances planned
    * No REST for local testing or dev => But in this case we should define an interface for a local service and not for the rest client
  
* Restclient with Linked Type
    * I would rather not have to click to see the type and response type details
    * I simply could not find how to do that
    
* times is an extension method for String and Number
    * It would be nice to have the autocomplete on the String and Number types. 
    * I couldn't find out how to do that either. 
    
* More descriptive texts on how to use the test framework or a better starting point would help.
    * This could be done more efficiently in an external documentation.




# ----------------------------- DRAFT -----------------------------
