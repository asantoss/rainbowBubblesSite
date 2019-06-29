 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;

 function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
         height: '600px',
         width: '100%',
         videoId: 'iAH1EZ4FmjU',
         events: {
             //  'onReady': onPlayerReady,
             //  'onStateChange': onPlayerStateChange
         }
     });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
     event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;

 //  function onPlayerStateChange(event) {
 //      if (event.data == YT.PlayerState.PLAYING && !done) {
 //          setTimeout(stopVideo, 6000);
 //          done = true;
 //      }
 //  }

 function stopVideo() {
     player.stopVideo();
 }

 var header = $('#youtubeHeader');
 var stats = $('#stats');
 var thumbnail = $('#youtubeThumbnail');
 $('#ytSub')


 var youtubeApi = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCFysk_yP-t28poWFQzMRd7w&key=AIzaSyDhsMWEF7AXzzvNW-ykOzaI5mdEPR8mTvE'

 $.get(youtubeApi)
     .then(response => {
         console.log(response)
         let rainbowBubbles = response.items[0]
         header.text(rainbowBubbles.snippet.title);
         thumbnail.attr('src', rainbowBubbles.snippet.thumbnails.medium.url);
         stats.html(`<h3>Videos: ${rainbowBubbles.statistics.videoCount}</h3><h3>Subcribers: ${rainbowBubbles.statistics.subscriberCount}</h3>
         `)
     })