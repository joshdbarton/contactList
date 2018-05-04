const createComponents = Object.create({}, {
    text: {
        value: (tag, classList, content) => {
            const component = document.createElement(tag)
            component.classList.add(classList)
            component.textContent = content
            return component
        }
    },
    input: {
        value: (type, id) => {
            const component = document.createElement("input")
            component.setAttribute("type", type)
            component.setAttribute("id", id)
            return component
        }
    },
    button: {
        value: (value) => {
            const button = document.createElement("input")
            button.setAttribute("value", value)
            return button
        }
    }
})


module.exports = createComponents