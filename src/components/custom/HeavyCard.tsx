import { Badge } from "../ui";
import type { ReactNode } from "react";
import { BORDER_COLORS, SHARED_COLOR_CLASSES, SURFACE_COLORS, TEXT_COLORS } from "@/const/theme";

export type HeavyCardBadge = {
  badgeName: string;
  badgeLink: string;
};

export type HeavyCardProps = {
  cardTitle: string;
  cardContent: ReactNode;
  cardLink: string;
  Badges: HeavyCardBadge[];
  ytMode?: boolean;
};

function HeavyCard({ cardTitle, cardContent, cardLink, Badges, ytMode = true }: HeavyCardProps) {
    const isYouTubeEmbed = /youtube\.com\/embed|youtu\.be/.test(cardLink);
    const isImageAsset = /\.(png|jpe?g|webp|gif|svg)$/i.test(cardLink) || cardLink.startsWith("/projects/") || cardLink.startsWith("projects/");
    const shouldRenderVideo = isYouTubeEmbed || (ytMode && !isImageAsset);

    return (
        <div className='flex flex-col w-full gap-4 md:gap-6'>
        <div title = "copy " className="">
            <h3 className={`text-lg md:text-xl font-bold ${TEXT_COLORS.strong}`}> {cardTitle}
                <br />
                {
                    Badges.map((badge)=>{
                        return (
                            <Badge key={`${cardTitle}-${badge.badgeName}`} variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2`}> <img className="h-3 m-0.5" src={badge.badgeLink} alt="" /> {badge.badgeName} </Badge>
                        )
                    })
                }             
            </h3>
            <div className={`flex mt-4 w-full rounded-md border ${BORDER_COLORS.glass} border-t-2 border-b-4 overflow-hidden`}>
                {shouldRenderVideo ? (
                    <iframe 
                    src={cardLink }  
                    title="YouTube video player" 
                    frameBorder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="w-full aspect-video opacity-100 p-0"
                        > </iframe>)
                        :
                        (
                            <img
                            src={cardLink}
                            alt={cardTitle}
                            className="w-full aspect-video object-cover"
                            loading="lazy"
                            />)
                    }
            </div> 
                
        </div>
        <div title="text" className={`w-full backdrop-blur-3xl ${TEXT_COLORS.strongSoft} font-medium font-mono wrap-anywhere p-3 md:p-4 rounded-sm  content-center border ${BORDER_COLORS.glass} border-r-2 border-b-2 text-sm opacity-80 ${SURFACE_COLORS.softGlassBg}`}>
                    {cardContent}
                </div>
                
        </div>
    )
}

export default HeavyCard