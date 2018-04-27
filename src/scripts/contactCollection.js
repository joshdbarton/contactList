let contacts = []

const loadDB = () => {
      contacts = JSON.parse(localStorage.getItem("contacts"))
}
loadDB()

const saveDB = () => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
}

function* idMaker() {
        let index = 1;
        while (index < index + 1)
          yield index++;
}

const ID = idMaker()

const newContact = (first, last, phone, street, cityState, ZIP) => {
    const contact = Object.create(null, {
        first: {enumerable: true,
                writable: true,
                value: first},
        last: {enumerable: true,
                writable: true,
                value: last},
        phone: {enumerable: true,
                writable: true,
                value: phone},
        street: {enumerable: true,
                writable: true,
                value: street},
        "City and State": {enumerable: true,
                           writable: true,
                           value: cityState},
        ZIP: {enumerable: true,
              writable: true,
              value: ZIP},
        ID: {enumerable: true,
             writable: false,
             value: ID.next().value}
    })
    contacts.push(contact)
    saveDB()
}




module.exports = {newContact, saveDB, contacts}