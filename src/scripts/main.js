const contact = require("./contact")
const contactForm = require("./contactForm")
const contactCollection = require("./contactCollection")


contactForm.makeSearchForm()
contactForm.newContactForm()
contact.displayAllContacts(contactCollection.contacts)



