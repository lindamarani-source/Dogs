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
        const image = data.message;
        const imgElement = document.getElementById("image");

        imgElement.src = image;
        imgElement.style.display = "block";
     }
     catch (error) {
        console.error(error);
     }
}