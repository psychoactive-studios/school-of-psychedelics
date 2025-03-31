function handleVideoClick() {
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log("Device type:", isMobile ? "Mobile" : "Desktop");

  // Exit if no video wrappers found
  if (!videoWrappers.length) {
    console.log("No video wrappers found ");
    return;
  }

  videoWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function (event) {
      console.log("Wrapper clicked");
      const video = this.querySelector("video");
      console.log("Video state:", {
        paused: video.paused,
        muted: video.muted,
        volume: video.volume,
        currentTime: video.currentTime,
      });

      // Mobile-specific handling herefs
      // if (isMobile) {
      //   console.log("Mobile-specific handling");
      //   video.muted = false;
      //   video.volume = 1;
      //   video.play();
      //   console.log("After mobile play:", {
      //     paused: video.paused,
      //     muted: video.muted,
      //     volume: video.volume,
      //   });
      // }

      const hasPlayed = !video.paused && !video.muted && video.volume > 0;
      console.log("hasPlayed:", hasPlayed);

      const playOverlay = this.querySelector(".video-play-overlay");
      const pauseBtn = this.querySelector('[f-data-video="pause-button"]');
      const volumeSlider = this.querySelector('[f-data-video="volume-slider"]');
      const videoTimeline = wrapper.querySelector(".time-controls-wrapper");
      const volumeControl = this.querySelector(".volume-control");
      const playBtn = this.querySelector('[f-data-video="play-button"]');
      const volumeBtn = this.querySelector('[f-data-video="volume-button"]');
      const fullscreenBtn = this.querySelector('[f-data-video="fullscreen"]');

      console.log("Button states:", {
        playBtn: playBtn ? "found" : "not found",
        volumeBtn: volumeBtn ? "found" : "not found",
        pauseBtn: pauseBtn ? "found" : "not found",
        fullscreenBtn: fullscreenBtn ? "found" : "not found",
      });

      // hide video poster overlay
      if (playOverlay) {
        console.log("Hiding play overlay");
        playOverlay.style.display = "none";
      }

      // Show play overlay again on mouseleave if video has been interacted with
      wrapper.addEventListener("mouseleave", () => {
        console.log("Mouse leave event");
        if (playOverlay && video.paused) {
          console.log("Showing play overlay on mouseleave");
          playOverlay.style.display = "flex";
        }
      });

      // ignore pause btn clicks
      if (pauseBtn && pauseBtn.contains(event.target)) {
        console.log("Ignoring pause button click");
        return; // exit
      }

      // ignore volume change clicks
      if (volumeSlider && volumeSlider.contains(event.target)) {
        console.log("Ignoring volume slider click");
        return; // exit
      }

      // ignore volume center clicks
      if (
        volumeControl &&
        volumeControl.contains(event.target) &&
        !volumeBtn.contains(event.target)
      ) {
        console.log("Ignoring volume control click");
        return; // exit
      }

      // ignore videoTimeline clicks
      if (videoTimeline && videoTimeline.contains(event.target)) {
        console.log("Ignoring video timeline click");
        return; // exit
      }

      if (playBtn && playBtn.contains(event.target)) {
        console.log("Play button clicked");
        keepHoverInteractionOnAllVideos();
        if (video.muted) {
          console.log("Video muted, attempting to unmute");
          volumeBtn.click();
        }
        pauseOtherVideos(video);
        showHideVideoInfo(true);
        return; // exit
      }

      // if the clicked element is volume btn logic
      if (volumeBtn && volumeBtn.contains(event.target)) {
        console.log("Volume button clicked");
        if (!playBtn.dataset.clicked) {
          console.log("First time play button clicked");
          resetCurrentPlayBtn(true);
          showHideVideoInfo(true);
          video.loop = false;
          video.currentTime = 0;
          video.muted = false;
          video.volume = 1;
          video.play();
          playBtn.dataset.clicked = "true";
        }
        if (!volumeBtn.dataset.clicked) {
          console.log("First time volume button clicked");
          volumeBtn.dataset.clicked = "true";
        }
        return; // exit
      }

      // if the clicked element is fullscreen btn logic
      if (fullscreenBtn && fullscreenBtn.contains(event.target)) {
        console.log("Fullscreen button clicked");
        iOSFullscreen(video);
        if (
          !hasPlayed ||
          !playBtn.dataset.clicked ||
          !volumeBtn.dataset.clicked
        ) {
          console.log("Attempting to unmute for fullscreen");
          video.muted = false;
          video.volume = 1;
        }
        return; // exit
      }

      // handle fullscreen play/pause
      video.addEventListener("play", () => {
        console.log("Video play event");
        if (document.fullscreenElement === video) {
          console.log("Video in fullscreen, resetting play button");
          resetCurrentPlayBtn(true);
          showHideVideoInfo(true);
          return;
        }
      });
      video.addEventListener("pause", () => {
        console.log("Video pause event");
        if (document.fullscreenElement === video) {
          console.log("Video in fullscreen, resetting pause button");
          resetCurrentPlayBtn(false);
          showHideVideoInfo(false);
          return;
        }
      });

      // Skip play/pause logic if video itself is clicked in fullscreen
      if (document.fullscreenElement === video) {
        console.log("Video in fullscreen");
        if (video.paused) {
          console.log("Playing fullscreen video");
          resetCurrentPlayBtn(true);
          showHideVideoInfo(true);
        } else {
          console.log("Pausing fullscreen video");
          resetCurrentPlayBtn(false);
          showHideVideoInfo(false);
        }
        return;
      }

      // play / pause functionality if volume btn has been clicked
      if (volumeBtn.dataset.clicked) {
        console.log("Volume button previously clicked");
        if (video.paused) {
          console.log("Playing video with volume");
          pauseOtherVideos(video);
          video.muted = false;
          video.volume = 1;
          video.play();
          video.loop = false;
          resetCurrentPlayBtn(true);
          showHideVideoInfo(true);
        } else {
          console.log("Pausing video");
          video.pause();
          resetCurrentPlayBtn(false);
          showHideVideoInfo(false);
        }
        return;
      }

      // custom play or pause video logic for clicking on video itself
      if (hasPlayed) {
        console.log("Video has been played before, pausing");
        video.pause();
        resetCurrentPlayBtn(false);
        showHideVideoInfo(false);
      } else if (video.paused) {
        console.log("Playing paused video");
        pauseOtherVideos(video);
        video.muted = false;
        video.volume = 1;
        video.play();
        video.loop = false;
        resetCurrentPlayBtn(true);
        showHideVideoInfo(true);
      } else {
        console.log("First time playing video");
        if (!playBtn.dataset.clicked) {
          console.log("Resetting video time");
          video.currentTime = 0;
          playBtn.dataset.clicked = "true";
        }
        video.muted = false;
        video.volume = 1;
        pauseOtherVideos(video);
        video.play();
        video.loop = false;
        resetCurrentPlayBtn(true);
        showHideVideoInfo(true);
      }

      function keepHoverInteractionOnAllVideos() {
        videoWrappers.forEach((wrapper) => {
          // Auto-play muted video on hover if not interacted with yet
          wrapper.addEventListener("mouseenter", () => {
            const currentVideo = video;
            const thisVideo = wrapper.querySelector("video");
            const playBtn = wrapper.querySelector(
              '[f-data-video="play-button"]'
            );
            // Only play other videos that aren't the current one being interacted with
            if (
              thisVideo !== currentVideo &&
              thisVideo.classList.contains("is-testimonial") &&
              !playBtn.dataset.clicked &&
              !wrapper.dataset.clicked
            ) {
              thisVideo.play();
            }
          });
        });
      }

      // Show/hide video info
      function showHideVideoInfo(inverse = false) {
        const videoInfo = wrapper.querySelector(".video-heading_wrapper");
        const timeControls = wrapper.querySelector(".time-controls-wrapper");
        const videoCaption = wrapper.querySelector(".video-caption_wrapper");

        if (videoInfo) {
          videoInfo.style.display = inverse ? "none" : "block";
        }

        // Handle time controls for all screen sizes
        if (timeControls) {
          timeControls.style.display = inverse ? "flex" : "none";
          timeControls.style.opacity = inverse ? 1 : 0;
        }

        // Handle video caption only for screens larger than 767px
        if (videoCaption && window.innerWidth > 767) {
          videoCaption.style.display = inverse ? "block" : "none";
          videoCaption.style.opacity = inverse ? 1 : 0;
        }
      }

      // Reset play/pause buttons for current video
      function resetCurrentPlayBtn(inverse = false) {
        const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
        const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');

        if (playBtn) {
          playBtn.style.display = inverse ? "none" : "block";
        }
        if (pauseBtn) {
          pauseBtn.style.display = inverse ? "block" : "none";
        }
      }

      // Pause video when 15% or less is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.intersectionRatio <= 0.15 &&
              !video.paused &&
              !video.muted &&
              video.volume > 0
            ) {
              video.pause();
              resetCurrentPlayBtn(false);
              showHideVideoInfo(false);
            }
          });
        },
        {
          threshold: [0, 0.15], // Track both when completely hidden and at 15% visible
          rootMargin: "0px", // No margin adjustment needed
        }
      );
      observer.observe(video);
    });
  });
}

function resetAllPlayBtns(inverse = false) {
  console.log("Resetting all play buttons:", inverse);
  const playBtns = document.querySelectorAll('[f-data-video="play-button"]');
  const pauseBtns = document.querySelectorAll('[f-data-video="pause-button"]');

  // Exit if no buttons found
  if (!playBtns.length && !pauseBtns.length) {
    console.log("No play/pause buttons found");
    return;
  }

  playBtns.forEach((btn) => {
    btn.style.display = inverse ? "none" : "block";
  });
  pauseBtns.forEach((btn) => {
    btn.style.display = inverse ? "block" : "none";
  });
}

// Utility function to pause all other playing videos
function pauseOtherVideos(currentVideo) {
  console.log("Pausing other videos");
  const allVideos = document.querySelectorAll("video");

  // Exit if no videos found
  if (!allVideos.length) {
    console.log("No videos found");
    return;
  }

  allVideos.forEach((otherVideo) => {
    if (
      otherVideo !== currentVideo &&
      !otherVideo.paused &&
      !otherVideo.muted &&
      otherVideo.volume > 0
    ) {
      console.log("Pausing another video");
      otherVideo.pause();
      // Reset the play/pause buttons for the paused video's wrapper
      const otherWrapper = otherVideo.closest(".video-wrapper");
      if (otherWrapper) {
        const resetBtn = (inverse = false) => {
          const playBtn = otherWrapper.querySelector(
            '[f-data-video="play-button"]'
          );
          const pauseBtn = otherWrapper.querySelector(
            '[f-data-video="pause-button"]'
          );
          if (playBtn) playBtn.style.display = inverse ? "none" : "block";
          if (pauseBtn) pauseBtn.style.display = inverse ? "block" : "none";
        };
        resetBtn(false);
        // Hide video info for the paused video
        const videoInfo = otherWrapper.querySelector(".video-heading_wrapper");
        const videoControls = otherWrapper.querySelectorAll(
          ".time-controls-wrapper, .video-caption_wrapper"
        );
        if (videoInfo) videoInfo.style.display = "block";
        if (videoControls) {
          videoControls.forEach((div) => {
            div.style.display = "none";
            div.style.opacity = 0;
          });
        }
      }
    }
  });
}

function handleFullscreenChange() {
  console.log("Setting up fullscreen change handlers");
  // Add fullscreen change event listeners
  document.addEventListener("fullscreenchange", function () {
    console.log("Fullscreen change event");
    const videoPlayers = document.querySelectorAll(".video-player-style");
    if (document.fullscreenElement) {
      console.log("Entering fullscreen");
      videoPlayers.forEach((player) => {
        player.style.objectFit = "contain";
      });
    } else {
      console.log("Exiting fullscreen");
      videoPlayers.forEach((player) => {
        player.style.objectFit = "cover";
      });
    }
  });

  // Also handle webkit browsers
  document.addEventListener("webkitfullscreenchange", function () {
    console.log("Webkit fullscreen change event");
    const videoPlayers = document.querySelectorAll(".video-player-style");
    if (document.webkitFullscreenElement) {
      console.log("Entering webkit fullscreen");
      videoPlayers.forEach((player) => {
        player.style.objectFit = "contain";
      });
    } else {
      console.log("Exiting webkit fullscreen");
      videoPlayers.forEach((player) => {
        player.style.objectFit = "cover";
      });
    }
  });
}

function iOSFullscreen(video) {
  console.log("Attempting iOS fullscreen");
  let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS && video) {
    if (video.webkitEnterFullscreen) {
      console.log("Entering iOS fullscreen");
      video.webkitEnterFullscreen();
    } else {
      console.warn("Fullscreen not supported on this video.");
    }
  } else {
    console.error("Video element not found or not iOS device.");
  }
}

function fixVideoPreviewPosition() {
  console.log("Setting up video preview position fix");
  const element = document.querySelector(".video-preview-thumbnail_wrapper");
  const fixedY = -140;

  const observer = new MutationObserver(() => {
    const computedStyle = window.getComputedStyle(element);
    const matrix = new DOMMatrix(computedStyle.transform);
    element.style.transform = `translateX(${matrix.m41}px) translateY(${fixedY}px)`;
  });

  observer.observe(element, { attributes: true, attributeFilter: ["style"] });
}

function resetVideoPreviewPosition() {
  console.log("Resetting video preview position");
  const element = document.querySelector(".video-preview-thumbnail_wrapper");

  const observer = new MutationObserver(() => {
    element.style.transform = `translate(0, 0)`;
  });

  observer.observe(element, { attributes: true, attributeFilter: ["style"] });
}

function setAllPreviewVideoSources() {
  console.log("Setting preview video sources");
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  if (!videoWrappers.length) {
    console.log("No video wrappers found for preview sources");
    return;
  }

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector('[f-data-video="video-element"]');
    const preview = wrapper.querySelector('[f-data-video="video-preview"]');
    if (!video || !preview) {
      console.log("Missing video or preview element");
      return;
    }

    const source = video.querySelector("source").src;
    preview.src = source;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");
  // Only run if we have video elements on the page
  const hasVideos = document.querySelectorAll("video").length > 0;
  if (!hasVideos) {
    console.log("No videos found on page");
    return;
  }

  setAllPreviewVideoSources();
  resetVideoPreviewPosition();
  handleFullscreenChange();
  resetAllPlayBtns();
  handleVideoClick();
});
