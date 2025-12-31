import {  Download, Mail, Send } from 'lucide-react';
import { Section } from './customized';

const ContactMe = () => {
    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Extract values from form fields via their IDs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    // const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    const recipient = "kartikay.thakur.ug22@nsut.ac.in"; // Set your email here
    const subject = encodeURIComponent(`Hi ${name} this side, I saw your portfolio`);
    const body = encodeURIComponent(`Hi I am ${name} \n I am contacting you after the being impressed with your Portfolio \n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    // Trigger the mailto redirect
    // window.location.href = `mailto:$s{recipient}?subject=${subject}&body=${body}`;
  };
//   const downloadResume = async () => {
//   try {
//     const response = await fetch('./files/resume.pdf');  // public/resume.pdf
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'Kartikay-Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error('Download failed:', error);
//   }
// };
  return (
    <Section > 
    
    <div className=" flex flex-col p-8 rounded-xl bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4 "> 
    <h2 className="text-4xl font-bold mb-5 pl-8">
        Contact <span className="text-pink-400"> Me!</span>
    </h2>
    <div className=" bg-background text-foreground p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Socials and Resume */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight"> Kartikay</h1>
            <p className="text-muted-foreground mt-2">
              <span className='text-pink-400 font-bold'>Full Stack Developer</span> | NSUT ECE 2026
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <a 
              href="http://www.github.com/Tricky11flame/" 
              className="flex items-center gap-3 p-3 rounded-lg border border-white/50 bg-card hover:bg-accent transition-colors
              hover:border-pink-400 hover:text-pink-400  hover:shadow-xs hover:shadow-white"
              >
              {/* <div > */}
                <svg role="img" className="size-8 fill-white/90" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              {/* </div> */}
              
              <span>GitHub</span>
            </a>
            <a 
              href="https://x.com/TrickyFlame21" 
              className="flex items-center gap-3 p-3 rounded-lg border border-white/50 bg-card hover:bg-accent transition-colors
              hover:border-pink-400 hover:text-pink-400  hover:shadow-xs hover:shadow-white"
              >
              <svg role="img" className="size-8 fill-white/90" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
              <span>X.com</span>
            </a>
            <a 
              href="http://www.leetcode.com/u/Tricky21Flame/" 
              className="flex items-center gap-3 p-3 rounded-lg border border-white/50 bg-card hover:bg-accent transition-colors
              hover:border-pink-400 hover:text-pink-400  hover:shadow-xs hover:shadow-white"
              >
              {/* <Linkedin size={20} /> */}
              <svg role="img" className="fill-white/90 size-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Linktree</title><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a 
            //  onClick={downloadResume}
              href="https://drive.google.com/file/d/10GQIIR43F2EtcxyvzAsvrwOToMs9YrMJ/view?usp=drive_link" 
              target = "_blank"
            //   alt = "my cv"
              download
              rel ="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-white/50 border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium hover:border-pink-400 hover:text-pink-400  hover:shadow-xs hover:shadow-white transition-400"
              >
              <Download className='size-8' />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="rounded-xl border border-white/50 bg-card p-6 shadow-sm">
          <form className="space-y-4" onSubmit={handleSendEmail}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="flex h-10 w-full border-white/50 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Describe your project or inquiry..."
          className="flex min-h-[220px] w-full rounded-md border border-input border-white/50 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <button
        type="submit"
        className=" inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground w-full gap-2 transition-colors hover:border-pink-400 hover:text-pink-400 hover:shadow-xs hover:shadow-white"
      >
        <Send className='size-4' />
        <span className='ml-1 text-sm'>Send Message</span>
      </button>
    </form>
        </div>

      </div>
    </div>
    </div>            
    </Section>
  );
};

export default ContactMe;