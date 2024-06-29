const formatDate = (dataString) => {
    const formttedDate = new Date(dataString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export default formatDate; 