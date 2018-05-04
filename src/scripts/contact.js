const Contacts = require("./contactCollection")
const createComponents = require("./DOMcomponents")


const Display = Object.create({}, {
    contactViewer: {
        value: document.getElementById("viewer")
    },
    searchContacts: {
        value: (searchBy, searchText) => {
            return Contacts.contacts.filter((contact) => {return contact[searchBy] === searchText})
        }
    },
    contactCard: {
        value: (ID) => {
            const contact = Contacts.contacts.find((contact) => {return contact.ID === ID})
            const section = createComponents.text("section", "contact")
            section.appendChild(createComponents.text("p", "contact---item", `Name: ${contact.first} ${contact.last}`))
            section.appendChild(createComponents.text("p", "contact---item", `Phone: ${contact.phone}`))
            section.appendChild(createComponents.text("p", "contact---item", `Address: ${contact.street}, ${contact["City and State"]} ${contact.ZIP}`))
            contactViewer.appendChild(section)
        }
    },
    allContacts: {
        value: (array) => {
            array.forEach(contact => {
                const section = createComponents.text("section", "contact")
                section.appendChild(createComponents.text("p", "contact---item", `Name: ${contact.first} ${contact.last}`))
                section.appendChild(createComponents.text("p", "contact---item", `Phone: ${contact.phone}`))
                section.appendChild(createComponents.text("p", "contact---item", `Address: ${contact.street}, ${contact["City and State"]} ${contact.ZIP}`))
                Display.contactViewer.appendChild(section)
            })
        }
    }
})

module.exports = Display