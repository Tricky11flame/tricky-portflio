import { Badge } from '../ui'
function LightCard({cardTitle , cardContent  , cardLink , Badges} ) {
    return (
    <div className='flex flex-cols'>
    <div title = "copy " className="mx-auto">
        <h3 className="text-xl font-bold text-white"> {cardTitle}
            <br />
            {Badges.map((badge)=>{
                return(
                    <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                        <img className="h-3 m-[2px]" src={badge.badgeLink} alt="" /> 
                        {badge.badgeName} 
                    </Badge>
                )
            })}
            
            <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/arduino/00979D" alt="" /> Arduino
            </Badge>
        </h3>
        <div className="flex ">
            <iframe 
                src={cardLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[180px] opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2" 
            ></iframe>
        
            </div> 
    </div>
        <span title="text" className=" backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
            {cardContent}
        </span>
    </div>
  )
}

export default LightCard