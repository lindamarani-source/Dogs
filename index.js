async function fetchData(){
    try {
        const dogBreed = document.getElementById('dogBreed').value.toLowerCase().trim();
        if (!dogBreed) {
            alert('Please enter a dog breed.');
            return;
        }

        const response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        console.log(data);

        const image = document.getElementById('image');
        image.src = data.message;
        image.alt = dogBreed;
    } catch (error) {
        console.error(error);
        alert('Unable to fetch dog image. Please check the breed name and try again.');
    }
}