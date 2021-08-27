const videoEl = document.getElementById("video");
const btnEl = document.getElementById("btn");

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {
        console.log("Error -", error);
    }
}

btnEl.addEventListener("click", async () => {
    btnEl.disabled = true;
    await videoEl.requestPictureInPicture()
    btnEl.disabled = false;
});

selectMediaStream();