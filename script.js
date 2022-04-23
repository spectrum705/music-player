console.log('welcome to better spotify :)')

let songIndex = 0
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songInfo = document.getElementsByClassName('songInfo');



let songs=[
    {   songName:'uplifiting',
        filePath:'songs/1.mp3',
        coverPath:'covers/1.png'
    },
    {   songName:'bg music',
        filePath:'songs/2.mp3',
        coverPath:'covers/2.png'
    },
    {   songName:'naruto playlist',
        filePath:'songs/3.mp3',
        coverPath:'covers/3.jpg'
    },
    {   songName:'motivational bgm',
        filePath:'songs/4.mp3',
        coverPath:'covers/4.jpg'
    },
    {   songName:'fairy tail bgm',
    filePath:'songs/5.mp3',
    coverPath:'covers/5.png'
},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName

})

//play songs


//play pause
masterPlay.addEventListener('click',()=>{	
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1 ;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0 ;
    }
})

//updating the progress bar
audioElement.addEventListener('timeupdate', ()=>{
    progress= parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgress.value= progress;

    
})

myProgress.addEventListener('change',()=>{
audioElement.currentTime=(myProgress.value/100)*audioElement.duration;
})


//playing the songlist
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })    
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{ 

    makeAllPlays();
    songIndex=parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    gif.style.opacity= 1 ;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songInfo[0].innerText=songs[songIndex].songName;
    })
})


//prev button
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0)
        songIndex=4;
    
    else
        songIndex--;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    gif.style.opacity= 1 ;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songInfo[0].innerText=songs[songIndex].songName;

})

//next button
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=4)
        songIndex=0;
    
    else
        songIndex++;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    gif.style.opacity= 1 ;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songInfo[0].innerText=songs[songIndex].songName;

    
})
