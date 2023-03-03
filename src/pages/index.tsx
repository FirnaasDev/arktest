import { SimpleInput } from "@/stories/Input";
import { ThumbCard } from "@/stories/ThumbCard";

export default function Home() {
  return (<>
  <section className='banner'>
        <div className='banner-bg'>
            <div className='container mx-auto min-h-screen'>
                <div className='text-right p-4 pr-10'>
                    <h3 className='text-4xl text-white'>Enter
                        <span>&#8594;</span>
                    </h3>
                </div>
                <div className='logo'>
                    <h1 className='text-white text-7xl pt-8 pl-24'>artcryption</h1>
                </div>
                <div className='text-right p-4'>
                    <h3 className='text-4xl text-white'>nft dropping soon
                    </h3>
                </div>
                <div className='box-content1 grid gap-y-4 pt-16 pl-24'>
                    <hr className='w-10 text-white'/>
                    <div className='text-white text-2xl'>
                        <h5>Vitamin D</h5>
                        <h5>by AIMSIR Studio</h5>
                    </div>
                    <div className='text-white text-2xl'>
                        <p>curated by Bompas & Parr &<br/>
                        MA Creative & Louisa St. Pierre</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-4 pr-24">
              <SimpleInput
                label="Join Waitlist"
                placeholder="Enter your email"
                primary
                type="text"
              />
            </div>
        </div>
    </section>
    <section>
          <div className="container mx-auto">
            <div className="py-8 gap-4">
              <h3 className="text-4xl py-8 text-black">Feature</h3>
              {/* //Row 1 starts */}
              <div className="py-8">
                <a href="javascript;" className="py-4 text-right">
                  <h5 className="text-3xl text-black">Digital Canapes</h5>
                  <p className="small-text">view</p>
                </a>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                      <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              
              {/* //Row 1 ends */}
              {/* //Row 2 starts */}
              <div className="py-8">
                <a href="javascript;" className="py-4 pt-8 text-right">
                  <h5 className="text-3xl text-black">Digital Canapes</h5>
                </a>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                       <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              {/* //Row 2 ends */}
              {/* //Row 3 starts */}
              <div className="py-8">
                <a href="javascript;" className="py-4 pt-8 text-right">
                  <h5 className="text-3xl text-black">Adam G</h5>
                </a>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {Array(4).fill(null).map((_,i)=>{
                      return(<>
                       <ThumbCard
                        btnTxt={'Waitlist'}
                        label="Ovocence"
                        desc="Luna Thomas"
                        imgContent={"/twothumb.png"}
                      />
                      </>)
                    })}
                </div>
              </div>
              {/* //Row 3 ends */}
            </div>
        </div>
    </section>
    <section id="whyus">
      <div className="container mx-auto">
        <h3 className="text-4xl py-6">Why Artcryption?</h3>
        <h5 className="text-3xl py-4">
        Sell, protect and share your NFTs, creative assets & IP online
        </h5>           
        <ul className="grid grid-cols-2 gap-4 py-6">
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Time-Stamped Digital Certificates</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Resale Royalties & Split Royalties</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Track buyers, provenance and price history</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Create NFTs and one-of-a-kind collectibles</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Interoperable</h5></div></li>
          <li className="py-4"><div className="flex item-start gap-4"><span className="pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            </span><h5 className="text-3xl">Alternative copyright protection</h5></div></li>
        </ul>
        <div className="py-4">
          <h5 className="py-3">Join our community</h5>
            <div className="py-2 flex items-center gap-4 justify-start">
                      {Array(4).fill(null).map((_,i)=>{
                        return(<>
                        <div className="rounded-full border py-2 p-4">
                          Linkedin{i}
                        </div>
                        </>
                        )
                      })}
            </div>            
        </div>
      </div>
    </section>
    <section id="reachin">
        <div className="h-64 bg-black mx-auto flex align-middle items-center justify-center">
          <div className="container">
            <div className="text-center">
              <div className="flex items-start justify-center">
                <h4 className="text-3xl text-white px-4 mt-2">Join Waitlist</h4>
                <div>
                  <SimpleInput
                      placeholder="Enter your email"
                      primary
                      size='96'
                      type="text"
                  />
                  <span className="text-white text-xs text-left">
                    Subscribe to join waitlist and also get access to the latest news and drops
                  </span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
    </section>
    <section id="footer">
        <div className="container mx-auto bg-slate-300">
          <div className="flex justify-between">
            <div className='logo'>
                      <h1 className='text-black text-7xl py-8'>artcryption</h1>
            </div>
            <div className='logo'>
                <figure>
                  {/* Add Logo Here */}
                  <img src={'/logosmall.png'} alt="logo-small" />
                </figure>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-black">Artcryption is a platform for creators to share, protect and sell their works showcasing the best in creativity.</p>
            <div className="grid grid-cols-2">
            <ul className="text-black grid gap-4 py-4">
              <li>Drops</li>
              <li>About</li>
              <li>How It works</li>
              <li>Curators</li>
              <li>Feed</li>
            </ul>
            <div className="flex flex-col">
                <h4 className="text-black text-xl">Newsletter</h4>
                <p className="text-slate">Subscribe to join the waitlist and get latest news, drops and events.</p>
                <div className="flex items-bottom">
                  <SimpleInput
                    placeholder="Enter your email"
                    primary
                    type="text"
                    className="mr-2"
                  />
                  <button className="rounded-50 bg-black text-white rounded px-2">Subscribe</button>
                </div>
            </div>
            </div>
          </div>
        </div>
    </section>
    <section id="footer-social">
        <div className="grid grid-cols-3 bg-slate-100">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="#616161"/>
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#616161"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#616161"/>
            </svg>      
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="#616161"/>
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#616161"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#616161"/>
            </svg>      
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="#616161"/>
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#616161"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#616161"/>
            </svg>       
          </div>
          <a href="">© Artcryption Inc. 2021, All Rights Reserved</a>
          <div className="grid grid-cols-3 gap-8">
            <a href="">PRESS</a>
            <a href="">PRIVACY</a>
            <a href="">TERMS</a>
          </div>
        </div>
    </section>
  </> 
  )
}
