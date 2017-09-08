const ideas = [];

$('#submit-idea').on('click', () => {
    let ideaTitle = $('#idea-title').val()
    let ideaBody = $('#idea-body').val()
    $('#idea-title').val('');
    $('#idea-body').val('');
    addIdea(ideaTitle, ideaBody);
})

const addIdea = (title, body) => {
    ideas.push({title: title,
                body: body,
                status: 0})
    renderIdeas();
}

const renderIdeas = () => {
    $('#display').html('');
    let ideaHtml = ideas.map((val, index) => {
        return `<div id='${index}' class="idea-container">
            <h2>Title: ${val.title}</h2>
            <h4>${val.body}</h4>
            <p>Priority: ${val.status}</p>
            <button class="delete-button">delete</button>
        </div>`
    });
    $('#display').prepend(ideaHtml);
}

$('#display').on('click', '.delete-button', () => {
    let ideaIndexRef = $(this).parent().attr('id')
    console.log('ideaIndex', $(this).siblings('h4'))
})