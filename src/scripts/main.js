const Display = require("./contact")
const Forms = require("./contactForm")
const Contacts = require("./contactCollection")


Forms.newContactForm()
Forms.newSearchForm()
if (localStorage.getItem("contacts") !== null)  {
    Contacts.contacts = Contacts.load()
}
Display.allContacts(Contacts.contacts)



