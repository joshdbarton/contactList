const contactCollection = require("./contactCollection")
const DOMcomponents = require("./DOMcomponents")
const contacts = contactCollection.contacts
const createComponent = DOMcomponents.createComponent


const contactViewer = document.getElementById("viewer")

const searchContacts = (searchBy, searchText) => {
    return contacts.filter((contact) => {return contact.searchBy === searchText})
}

const displayContactCard = (ID) => {
    const contact = contacts.find((contact) => {return contact.ID === ID})
    const section = createComponent("section", "contact")
    section.appendChild(createComponent("p", "contact---item", `Name: ${contact.first} ${contact.last}`))
    section.appendChild(createComponent("p", "contact---item", `Phone: ${contact.phone}`))
    section.appendChild(createComponent("p", "contact---item", `Address: ${contact.street}, ${contact["City and State"]} ${contact.ZIP}`))
    contactViewer.appendChild(section)
}

displayAllContacts = () => {
    contacts.forEach( contact => {displayContactCard(contact.ID)})
}

module.exports = {displayContactCard, displayAllContacts, searchContacts, contactViewer}