var quill = new Quill('#editor', {
    theme: 'snow'
});

quill.on('text-change', function () {

    const contentEditor = quill.root.innerHTML;
    const existContent = contentEditor.replace("<p><br></p>", "").length > 0;
    if (existContent) {
        $("#description").val(contentEditor);
    } else {
        $("#description").val("");
    }
});