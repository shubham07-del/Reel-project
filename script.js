const reels = [
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profileName: "Rahul Sharma",
    isFollowed: false,
    likeCount: 1250,
    isLiked: false,
    commentCount: 120,
    shareCount: 45,
    video: "./reels/videoplayback.mp4",
    caption: "Morning gym grind 💪"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profileName: "Priya Verma",
    isFollowed: true,
    likeCount: 3421,
    isLiked: true,
    commentCount: 310,
    shareCount: 98,
    video: "./reels/video2.mp4.mp4",
    caption: "Sunset vibes 🌇"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profileName: "Aman Gupta",
    isFollowed: false,
    likeCount: 890,
    isLiked: false,
    commentCount: 76,
    shareCount: 20,
    video: "./reels/video3.mp4.mp4",
    caption: "Coding late night 🧑‍💻"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profileName: "Sneha Patil",
    isFollowed: true,
    likeCount: 5670,
    isLiked: true,
    commentCount: 540,
    shareCount: 210,
    video: "./reels/video4.mp4.mp4",
    caption: "Travel diaries ✈️"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profileName: "Vikash Yadav",
    isFollowed: false,
    likeCount: 230,
    isLiked: false,
    commentCount: 18,
    shareCount: 5,
    video: "./reels/video1.mp4.mp4",
    caption: "Chai and rain ☕🌧️"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profileName: "Neha Singh",
    isFollowed: true,
    likeCount: 7890,
    isLiked: true,
    commentCount: 860,
    shareCount: 340,
    video: "./reels/video2.mp4.mp4",
    caption: "Dance reel 💃"
  },
  {
    ismuted:true,
    profilePhoto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    profileName: "Rohit Das",
    isFollowed: false,
    likeCount: 1540,
    isLiked: false,
    commentCount: 140,
    shareCount: 60,
    video: "./reels/video3.mp4.mp4",
    caption: "Street photography 📸"
  }
];
var allReels = document.querySelector('.allRells');
var ismuted = true
function addData(){
var sum = ''
reels.forEach(function(val,idx){
    sum += `<div class="reel">
                    <video autoplay loop ${val.ismuted?'muted':''} src="${val.video}"></video>
                    <div class="mute" id=${idx}>
                    ${val.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img id="profile" src="${val.profilePhoto}" alt="">
                            <h4>${val.profileName}</h4>
                            <button id=${idx} class='follow'>${val.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h4 id="tags">${val.caption}</h4>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 id="like-icon">${val.isLiked?'<i class= "love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</i></h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 id="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 id="share-icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 id="menu-icon"><i class="ri-more-2-fill"></i></h4>
                            <h6>More</h6>
                        </div>
                    </div>
                </div>`
    
})


allReels.innerHTML = sum
}
addData()

allReels.addEventListener('click',function(dets){

  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true
    }
    else{
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
    }
    addData()
  }
  if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }
    else{
      reels[dets.target.id].isFollowed = false
    }
    addData()
  }
  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true
    }
    else{
      reels[dets.target.id].ismuted = false
    }
    addData()
  }
})
