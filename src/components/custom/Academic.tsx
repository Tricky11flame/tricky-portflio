import { Badge } from "../ui"
import { Section } from "./customized"
function Academic() {
  return (
    <Section>
        <h2 className="text-4xl font-bold mb-10 text-center">Academic <span className="text-pink-400"> Research</span></h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
            <div className=" flex flex-col p-8 rounded-xl bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4 ">
              <div key={""} className="flex items-center justify-baseline ">
                <div className="font-semibold text-3xl"> <span className="text-pink-400"> 2025 </span> Eighth International Conference on <span className="text-pink-400">
                  <br />Image Information Processing</span> </div>
              </div>
              <Badge variant="outline" className="text-neutral-400 text border px-4 border-b-2 border-r-2 mt-4 border-neutral-700 ml-2 mb-4">eCF Paper Id: ICIIP2025-155</Badge>
              <ul className="list-disc text-neutral-300 space-y-2 pl-4 text">
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