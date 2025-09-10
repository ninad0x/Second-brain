
export const TweetThumbnail = ({ url }: { url: string }) => {
  const screenshotUrl = `https://image.thum.io/get/width/600/${url}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={screenshotUrl}
        alt="Tweet Thumbnail"
        className="h-full w-full"
      />
    </a>
  );
};

