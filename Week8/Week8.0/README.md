# Video Card Component

This project demonstrates a simple React component for displaying a video card, similar to YouTube's UI. The component includes a video thumbnail, title, channel logo, and video details like channel name, view count, and upload time.

---

## Features
- **Thumbnail Display**: A rounded thumbnail image for the video.
- **Video Title**: Clear and bold title displayed below the thumbnail.
- **Channel Logo**: A circular logo representing the channel.
- **Video Details**: Information about the channel name, views, and upload time.

---

## Code Overview

### Component Code
```jsx
export function VideoCard() {
    return (
        <div className="p-3">
            <img src="./Thumbnail.jpg" className="rounded-xl w-full" alt="Video Thumbnail" />
            <div className="mt-2">
                <div className="text-base font-semibold">
                    Jawan: Chaleya (Hindi) || Shah Rukh Khan
                </div>
                <div className="grid grid-cols-12 mt-2">
                    <div className="col-span-1">
                        <img
                            className="rounded-full w-12 h-12"
                            src="https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo"
                            alt="Channel Logo"
                        />
                    </div>
                    <div className="col-span-11 pl-2">
                        <div className="text-sm text-gray-300">Harkirat Singh</div>
                        <div className="text-sm text-gray-300">36M Views | 13 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

---

## File Structure
The project is organized as follows:

```
src/
├── components/
│   └── VideoCard.jsx  # The VideoCard component
├── assets/
│   └── Thumbnail.jpg  # Thumbnail image for the video
├── App.js             # Main application file
└── index.js           # Entry point of the application
```

---

## Usage
1. Add the `VideoCard` component to your project.
2. Place a thumbnail image in the `assets/` folder and update the `src` path in the `<img>` tag for the thumbnail.
3. Ensure your project is set up to handle relative imports of images.

Example usage in `App.js`:
```jsx
import { VideoCard } from "./components/VideoCard";

function App() {
    return (
        <div>
            <VideoCard />
        </div>
    );
}

export default App;
```

---

## Prerequisites
- React.js installed in your project.
- Tailwind CSS configured in your project.

---

## Styling
This component uses Tailwind CSS classes for styling. Ensure you have Tailwind CSS set up in your React project. If not, refer to the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).

---

## Customization
- **Thumbnail**: Replace `./Thumbnail.jpg` with the path to your desired image.
- **Title**: Update the title text to match your content.
- **Channel Logo**: Replace the channel logo URL in the `src` attribute of the `<img>` tag.
- **Details**: Modify the text under `Video Details` to suit your use case.

---

## Future Enhancements
- Fetch video data dynamically using YouTube API.
- Display multiple video cards using a grid layout.
- Add interactivity such as likes, comments, and sharing options.

---

## License
This project is open-source and available for customization and usage.

