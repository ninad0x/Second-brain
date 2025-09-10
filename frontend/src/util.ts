    // share - https://youtu.be/iPWkjepo2Bc?feature=shared
    // browser - https://www.youtube.com/watch?v=iPWkjepo2Bc
    // embed - https://www.youtube.com/embed/iPWkjepo2Bc?si=97M9SKxjPlSXkQgq

    // final - https://www.youtube.com/embed/iPWkjepo2Bc



export function toYouTubeThumbnail(url: string) {
  try {
    const parsed = new URL(url);
    let videoId;

    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/")[2];
      }
    }

    if (!videoId) return null;

    return {
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      link: `https://www.youtube.com/watch?v=${videoId}`,
    };

  } catch {
    return null;
  }
}

