// Select the form element with the id of "searchForm"
const form = document.querySelector('#searchForm');

// Add a submit event listener to the form
form.addEventListener('submit', async function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's search term that they typed in the form's "query" element
    const userSearchTerm = form.elements.query.value;
    // Make a GET request to the TV Maze API with the user's search term
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearchTerm}`);
    // Pass the data from the API response to the makeImages function
    makeImages(res.data);
})


const makeImages = async (arr) => {
    // Loop through the array of TV shows 
    for (let res of arr) {
        // Check if the show has an image
        if (res.show.image) {
            // Create an IMG element
            const image = document.createElement('IMG');
            // Set the src attribute of the image element to the medium-sized image from the API
            image.src = res.show.image.medium;
            // Append the image to the body of the document
            document.body.append(image);
        }

    }
}