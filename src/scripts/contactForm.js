const createComponents = require("./DOMcomponents")
const Contacts = require("./contactCollection")
const Display = require("./contact")

const Forms = Object.create({}, {
    newSearchForm: {
        value: () => {
            const form = document.createElement("form")
            form.appendChild(createComponents.text("h4", "form--heading", "Search Form"))
            form.appendChild(createComponents.text("p", "form--text", "Search by: (options: first, last, phone)"))
            const searchByField = createComponents.input("text", "search-by")
            form.appendChild(searchByField)
            form.appendChild(createComponents.text("p", "form--text", "Search text:"))
            const searchText = createComponents.input("text", "search-text")
            form.appendChild(searchText)
            const submitButton = createComponents.button("Search")
            submitButton.addEventListener("click", () => {
                Display.contactViewer.innerHTML = ""
                Display.allContacts(Display.searchContacts(searchByField.value, searchText.value))
            })
            form.appendChild(submitButton)
            document.querySelector("#searchBar").appendChild(form)
        }
    },
    newContactForm: {
        value: () => {
            const form = document.createElement("form")
            form.appendChild(createComponents.text("h4", "form--heading", "New Contact"))
            form.appendChild(createComponents.text("p", "form--text", "First Name:"))
            const firstName = createComponents.input("text", "first-name")
            form.appendChild(firstName)
            form.appendChild(createComponents.text("p", "form--text", "Last Name:"))
            const lastName = createComponents.input("text", "last-name")
            form.appendChild(lastName)
            form.appendChild(createComponents.text("p", "form--text", "Phone:"))
            const phone = createComponents.input("text", "phone")
            form.appendChild(phone)
            form.appendChild(createComponents.text("p", "form--text", "Street:"))
            const street = createComponents.input("text", "street")
            form.appendChild(street)
            form.appendChild(createComponents.text("p", "form--text", "City and State:"))
            const cityState = createComponents.input("text", "city-state")
            form.appendChild(cityState)
            form.appendChild(createComponents.text("p", "form--text", "ZIP:"))
            const zip = createComponents.input("text", "zip")
            form.appendChild(zip)
            const submitButton = createComponents.button("Create New")
            submitButton.addEventListener("click", () => {
                Display.contactViewer.innerHTML = ""
                Contacts.newContact(firstName.value, lastName.value, phone.value, street.value, cityState.value, zip.value)
                Display.allContacts(Contacts.contacts)
                alert(`Added ${firstName.value} to Contacts!`)
                })
            form.appendChild(submitButton)
            document.querySelector("#searchBar").appendChild(form)
        }
    }
})

module.exports = Forms