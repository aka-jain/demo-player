;
(function() {
    var videoList = [{
            sources: [{
                    mediaid: 1,
                    file: 'https://perform-content.airtel.tv//010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '1080p'
                },
                {
                    mediaid: 2,
                    file: 'https://perform-content.airtel.tv//010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '720p'
                },
                {
                    mediaid: 3,
                    file: 'https://perform-content.airtel.tv//010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '320p'
                }
            ]
        },
        {
            sources: [{
                    mediaid: 4,
                    file: 'https://perform-content.airtel.tv//310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '1080p'
                },
                {
                    mediaid: 5,
                    file: 'https://perform-content.airtel.tv//310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '720p'
                },
                {
                    mediaid: 6,
                    file: 'https://perform-content.airtel.tv//310518-EN-PERFORM-DESCHAMPSLLORISZIDANE-IV-2_1527799929670_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '320p'
                }
            ]
        },
        {
            sources: [{
                    mediaid: 7,
                    file: 'https://perform-content.airtel.tv//300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '1080p'
                },
                {
                    mediaid: 8,
                    file: 'https://perform-content.airtel.tv//300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '720p'
                },
                {
                    mediaid: 9,
                    file: 'https://perform-content.airtel.tv//300518-EN-PERFORM-TERRY-PROFILE-N-2_1527710477291_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '320p'
                }
            ]
        },
        {
            sources: [{
                    mediaid: 10,
                    file: 'https://perform-content.airtel.tv//060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '1080p'
                },
                {
                    mediaid: 11,
                    file: 'https://perform-content.airtel.tv//060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '720p'
                },
                {
                    mediaid: 12,
                    file: 'https://perform-content.airtel.tv//060618-EN-PERFORM-COURTOIS-FUTURE-2_1528287989087_288.mp4',
                    image: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-2.jpg',
                    title: 'My Video',
                    label: '320p'
                }
            ]
        }
    ]

    if (window.jwplayer) {
        var playerInstance = window.jwplayer("wynk-video-player");

        playerInstance.setup({
            playlist: videoList,
            height: 360,
            width: 640,
            autostart: "viewable"
        });

        // setMute() called twice to make jwplayer show controls on the video and then mute the video back again.
        playerInstance.setMute().setMute();
    }

})();