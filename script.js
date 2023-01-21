

// Call canvas element pada index.html
const canvas = document.getElementById('firstcvs');
const ctx = canvas.getContext('2d');
const cvs_width = canvas.width = 600;
const cvs_height = canvas.height = 600;

// Tambahkan elemen gambar pada canvas
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

// Tangkap ukuran gambar yang sesuai untuk frame
const sprWidth = 575;
const sprHeight = 523;

// Setting game frame
let gameFrame = 0;
const staggerFrames = 3;

// Looping animasi
const sprAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    }
];

animationStates.forEach((state, index) => {
    let frames = { loc: [] }
    for (let s = 0; s < state.frames; s++){
        let positionX = s * sprWidth;
        let positionY = s * sprHeight;
        frames.log.push({x: positionX, y: positionY});
    }
    sprAnimations[state.name] = frames;
});

// Buat Fungsi Animasi
function animate()
{
    ctx.clearRect(0, 0, cvs_width, cvs_height);


}
animate();