import { Badge } from '../ui'
function HeavyCard({cardTitle , cardContent  , cardLink , Badges,ytMode = true} ) {
    return (
        <div className='flex flex-col m-auto gap-6'>
        <div title = "copy " className="">
            <h3 className="text-xl font-bold text-white"> {cardTitle}
                <br />
                {
                    Badges.map((badge)=>{
                        return (
                            <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 "> <img className="h-3 m-[2px]" src={badge.badgeLink} alt="" /> {badge.badgeName} </Badge>
                        )
                    })
                }             
            </h3>
            <div className="flex mt-4">
                {ytMode? (
                    <iframe 
                    src={cardLink }  
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="w-102 h-51 opacity-100 rounded-md border border-white/10 border-red border-t-2 border-b-4 p-0 "
                    srcDoc={`
                        <html>
                        <body style="margin:0; background: #FFFFF; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                        <img src=${cardLink} style="max-width: 100%; max-height: 100%; object-fit: contain;">
                        </body>
                        </html>
                        ` }
                        > </iframe>)
                        :
                        (
                            <iframe 
                            src={cardLink }  
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            className="w-102 h-51 opacity-100 rounded-md border border-white/10 border-red border-t-2 border-b-4 p-0 "
                            ></iframe>)
                    }
            </div> 
                
        </div>
        <div title="text" className="w-102 backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center  border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                    {cardContent}
                </div>
                
        </div>
    )
}

export default HeavyCard