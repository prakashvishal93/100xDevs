export function VideoCard() {
    return (
        <div className="p-3">
            {/* Thumbnail */}
            <img src="./Thumbnail.jpg" className="rounded-xl w-full" alt="Video Thumbnail" />
            
            {/* Title and Channel Information */}
            <div className="mt-3">
                <h2 className="font-semibold text-lg">
                    Jawan: Chaleya (Hindi) || Shah Rukh Khan
                </h2>
                <div className="flex items-start mt-2">
                    {/* Channel Logo */}
                    <div className="flex-shrink-0">
                        <img
                            className="rounded-full w-12 h-12"
                            src="https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo"
                            alt="Channel Logo"
                        />
                    </div>
                    
                    {/* Video Details */}
                    <div className="ml-3">
                        <p className="text-sm text-gray-500">Harkirat Singh</p>
                        <p className="text-sm text-gray-500">36M Views | 13 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
