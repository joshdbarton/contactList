const createComponent = (tag, classList, content) => {
    const component = document.createElement(tag)
    component.classList.add(classList)
    component.textContent = content
    return component
}

module.exports = {createComponent}