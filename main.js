function format(command, value) {
    document.execCommand(command, false, value)
}

function setUrl() {
    const url = prompt('Insert your URL')
    if (url) {
        const text = document.getSelection();
        document.execCommand('insertHTML', false, `<a href='${url}' target='_blank'>${text}</a>`)
    }
}
