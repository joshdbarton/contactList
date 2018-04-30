const DOMcomponents = require("./DOMcomponents")
const contactCollection = require("./contactCollection")
const contact = require("./contact")
const searchContacts = contact.searchContacts
const displayContactCard = contact.displayContactCard
const createComponent = DOMcomponents.createComponent
const contactViewer = contact.contactViewer
const displayAllContacts = contact.displayAllContacts
const newContact = contactCollection.newContact


const makeSearchForm = () => {
    const form = document.createElement("form")
    form.appendChild(createComponent("h4", "form--heading", "Search Form"))
    form.appendChild(createComponent("p", "form--text", "Search by: (options: first, last, phone)"))
    const searchByField = document.createElement("input")
    searchByField.setAttribute("type", "text")
    searchByField.setAttribute("id", "searchBy")
    form.appendChild(searchByField)
    form.appendChild(createComponent("p", "form--text", "Search text:"))
    const searchText = document.createElement("input")
    searchText.setAttribute("type", "text")
    searchText.setAttribute("id", "searchText")
    form.appendChild(searchText)
    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("value", "Search")
    submitButton.addEventListener("click", () => {
        contactViewer.innerHTML = ""
        const results = searchContacts(searchByField.value, searchText.value)
        displayAllContacts(results)
    })
    form.appendChild(submitButton)
    document.querySelector("#searchBar").appendChild(form)
}

const newContactForm = () => {
    const form = document.createElement("form")
    form.appendChild(createComponent("h4", "form--heading", "New Contact"))
    form.appendChild(createComponent("p", "form--text", "First Name:"))
    const firstName = document.createElement("input")
    firstName.setAttribute("type", "text")
    firstName.setAttribute("id", "firstName")
    form.appendChild(firstName)
    form.appendChild(createComponent("p", "form--text", "Last Name:"))
    const lastName = document.createElement("input")
    lastName.setAttribute("type", "text")
    lastName.setAttribute("id", "lastName")
    form.appendChild(lastName)
    form.appendChild(createComponent("p", "form--text", "Phone:"))
    const phone = document.createElement("input")
    phone.setAttribute("type", "text")
    phone.setAttribute("id", "phone")
    form.appendChild(phone)
    form.appendChild(createComponent("p", "form--text", "Street:"))
    const street = document.createElement("input")
    street.setAttribute("type", "text")
    street.setAttribute("id", "street")
    form.appendChild(street)
    form.appendChild(createComponent("p", "form--text", "City and State:"))
    const cityState = document.createElement("input")
    cityState.setAttribute("type", "text")
    cityState.setAttribute("id", "cityState")
    form.appendChild(cityState)
    form.appendChild(createComponent("p", "form--text", "ZIP:"))
    const ZIP = document.createElement("input")
    ZIP.setAttribute("type", "text")
    ZIP.setAttribute("id", "ZIP")
    form.appendChild(ZIP)
    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("value", "Create New Contact")
    submitButton.addEventListener("click", () => {
        contactViewer.innerHTML = ""
        newContact(firstName.value, lastName.value, phone.value, street.value, cityState.value, ZIP.value)
        displayAllContacts()
        alert(`Added ${firstName.value} to Contacts!`)
        })
    form.appendChild(submitButton)
    document.querySelector("#searchBar").appendChild(form)
}

module.exports = {makeSearchForm, newContactForm}