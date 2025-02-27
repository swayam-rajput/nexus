import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo({videoUrl,className}) {
  return (
    <div className={`flex flex-row items-start `+className}>
      <HeroVideoDialog 
        className="rounded-lg dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/fcxUnka3qWU?si=GGBuyyPclzrvpdYO"
        thumbnailSrc="https://i.ytimg.com/vi/fcxUnka3qWU/hqdefault.jpg"
        thumbnailAlt="Hero Video"
      />
      
    </div>
  );
}