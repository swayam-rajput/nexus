import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Image from "next/image";
import { HeroVideoDialogDemo } from "./HeroVideoDialog";

const episodes = [
  { image: "/ep1.jpg", title: "Episode 1", description: "This is episode 1." },
  { image: "https://images.unsplash.com/photo-1652576779537-0ec209fa8ee8?w=600&auto=format&fit=crop&q=60", title: "Episode 2", description: "This is episode 2." },
  { image: "https://images.unsplash.com/photo-1652576779537-0ec209fa8ee8?w=600&auto=format&fit=crop&q=60", title: "Episode 3", description: "This is episode 3." },
  { image: "https://images.unsplash.com/photo-1652576779537-0ec209fa8ee8?w=600&auto=format&fit=crop&q=60", title: "Episode 4", description: "This is episode 4." },
];

export default function Timeline() {
    return (
        <div className="px-8 ">
          <div className="font-satoshi sm:text-2xl text-xl">Timeline</div>
          <div className="h-full  my-16 pl-16 ">
            <div className="h-full flex flex-col">
                <div className="h-full flex flex-col justify-around border-l border-opacity-25 border-gray-500 relative gap-10">
                    {episodes.map((episode, index) => (
                    <HoverCard key={index}>
                        <HoverCardTrigger asChild>
                            <div className="timeline flex items-center opacity-80 hover:opacity-100 transition justify-center w-[20px] h-[20px] -ml-1 rounded-full cursor-pointer relative ">
                                
                                <svg width="18" className="rotate-90" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='absolute  -top-20 left-12 min-w-fit w-fit '>
                            <Image
                            src={episode.image}
                            alt={episode.title}
                            width={200}
                            height={200}
                            className="rounded-lg min-w-fit size-32  object-cover"
                            />
                            {/* <h4 className="text-sm font-semibold mt-2">
                                {episode.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                {episode.description}
                            </p> */}
                        </HoverCardContent>
                    </HoverCard>
                    ))}

                </div>
            </div>
          </div>

        </div>
    );
}
