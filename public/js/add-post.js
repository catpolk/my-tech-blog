async function newFormHandler(event) {
    event.preventDefault();

    const title = document.quesrySelector('input[name="post-title"]').value;
    const content = document.quesrySelector('input[name="content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to submit a post');
    }
};

document. quesrySelector('#new-post-form').addEventListener('submit', newFormHandler);