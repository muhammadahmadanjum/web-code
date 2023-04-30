const uniqueMusic = () => {
    try {
        const songName = document.querySelector('#song-Name').value;
        const osamMusic = document.querySelector('osam-Music').value;
        const oddMusic = document.querySelector('#odd-Music').value;
        const imageUrl = document.querySelector('#image-Url').value;
        const songBeaty = document.querySelector('#song-Beaty').value;
        const musicArry = [];
        musicArry.push({
            id:Math.floor(Math.random() * 1000000),
            songName:songName,
            osamMusic:osamMusic,
            oddMusic:oddMusic,
            imageUrl:imageUrl,
            songBeaty:songBeaty
        })
        localStorage.setItem('music-data', JSON.stringify(musicArry))
    } catch (error) {
        console.log(error.message)
    }
}
const getData = JSON.parse()