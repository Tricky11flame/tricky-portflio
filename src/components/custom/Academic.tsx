import { Badge } from "../ui"
import { Section } from "./customized"
import { BORDER_COLORS, HEADING_COLORS, SHARED_COLOR_CLASSES, TEXT_COLORS } from "@/const/theme"

function Academic() {
  return (
    <Section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">Academic <span className={HEADING_COLORS.primary}> Research .</span></h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
            <div className={`flex flex-col p-4 sm:p-6 md:p-8 rounded-xl ${SHARED_COLOR_CLASSES.softGlassCard}`}>
              <div key={""} className="flex items-center justify-baseline ">
                <div className="font-semibold text-xl sm:text-2xl md:text-3xl"> <span className={HEADING_COLORS.primary}> 2025 </span> Eighth International Conference on <span className={HEADING_COLORS.primary}>
                  <br />Image Information Processing</span> </div>
              </div>
              <Badge variant="outline" className={`${TEXT_COLORS.muted} text border px-4 border-b-2 border-r-2 mt-4 ${BORDER_COLORS.badgeMuted} ml-2 mb-4`}>eCF Paper Id: ICIIP2025-155</Badge>
              <ul className={`list-disc ${TEXT_COLORS.body} space-y-2 pl-4 text`}>
                <li>Article Title YOLO Architectures for Enhanced Small Object  Detection in Aerial Imagery</li>
                <li>Authors : Himanshi Sharma, Jyotsna Singh, Kartikay Thakur, Uttkarsh Singh and Sushma Nagpal</li>
                <li>Author E-mail : himanshi6262@gmail.com | jyotsna.singh@nsut.ac.in | kartikay.thakur.ug22@nsut.ac.in | utk.singh.12@gmail.com | sushma.nagpal@nsut.ac.in</li>
              </ul>
              
            </div>
        {/* </div> */}
      </Section>
  )
}

export default Academic