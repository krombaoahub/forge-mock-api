import { CheckCircle2, Info, Play } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full [&>div]:max-w-7xl py-10 bg-primary/15">
            <div className='mx-auto flex flex-col'>
                <div className='flex justify-start px-4'>
                    <div className='bg-secondary/5 backdrop-blur-md shadow-md rounded-full px-2 pr-4 font-medium text-sm py-1 flex items-center gap-1 '>
                        <Info size={20} className='text-success font-bold' />New: Advance Analytic Dashboard
                    </div>
                </div>
                <div className='flex lg:flex-nowrap flex-wrap gap-6'>
                    <div className='flex flex-col gap-6 p-5 grow text-left w-full'>
                        <div className='md:text-7xl text-5xl font-bold'>Mock APIs Made <span className='text-info'>Simple</span></div>
                        <div className='md:text-3xl'>Create, customize, and deploy mock REST APIs in seconds. No backend required. Perfect for frontend development, prototyping, and testing.</div>
                        <div className='my-3'>
                            <button className='btn hover:bg-white/75 bg-white shadow-2xs btn-xl text-primary border-0'><Play size={16} />Start Building Free</button>
                        </div>
                        <div className='flex gap-x-5'>
                            <div className='flex gap-2 items-center'><CheckCircle2 size={20} />No credit card required</div>
                            <div className='flex gap-2 items-center'><CheckCircle2 size={20} />Setup in 30 seconds</div>
                        </div>
                    </div>
                    <div className='grow w-full flex items-center justify-center lg:px-5'>
                        <div className="mockup-browser w-full px-4 pb-4 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="mockup-browser-toolbar flex justify-between">
                                <div >https://api.mock.com</div>
                            </div>
                            <div className="bg-black p-4 rounded-md overflow-auto ">
                                <pre data-prefix="" className="md:text-nomal text-sm text-success"><code>GET /api/users</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`{`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`  "data":[`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`    {`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-blue-500'>{`      "id": 1,`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-amber-500'>{`      "name": "John Doe",`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-violet-600'>{`      "email": "john@example.com",`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`    }`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`  ]`}</code></pre>
                                <pre><code className='md:text-lg text-sm text-white'>{`}`}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}