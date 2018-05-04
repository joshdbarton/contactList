const Contacts = Object.create({}, {
        contacts: {
                writable: true,
                enumerable: true,
                value: []
        },
        load: {
                value: () => {return JSON.parse(localStorage.getItem("contacts"))}
        },
        save: {
                value: () => {localStorage.setItem("contacts", JSON.stringify(Contacts.contacts))}
        },
        idCounter: {
                value: () => {
                        let id = parseInt(localStorage.getItem("idCounter"))
                        id++
                        localStorage.setItem("idCounter", id.toString())
                        return id
                }
        },
        newContact: {
                value: (first, last, phone, street, cityState, ZIP) => {
                        if (Contacts.contacts.length === 0) {
                            localStorage.setItem("idCounter", "0")
                        }
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
                                 value: Contacts.idCounter()
                            }
                        })
                        Contacts.contacts.push(contact)
                        Contacts.save()
                    }
        }

})

module.exports = Contacts