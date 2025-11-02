import { ArrowRight, Book, Puzzle, Rocket } from "lucide-react";

export default function SampleDocuments() {
    return (
        <section className="w-full [&>div]:max-w-7xl py-10 bg-secondary/10">
            <div className='mx-auto gap-6 flex flex-col'>
                <div className='text-center px-2'>
                    <p className="text-4xl font-bold m-4">Developer-friendly APIs</p>
                    <p className="text-xl max-w-2xl mx-auto">RESTful endpoints that follow industry standards with comprehensive documentation and examples.</p>
                </div>
                <div className="flex gap-5 size-full flex-wrap md:flex-nowrap">
                    <div className="grow w-full card bg-primary/10 shadow-md rounded-md gap-3 p-6 text-sm md:text-md lg:text-lg">
                        <div className='flex justify-between'>
                            <div className='text-xl font-bold'>Create a new user</div>
                            <div className='text-success bg-success/10 font-medium px-3 py-1 rounded-full'>POST</div>
                        </div>
                        <div>
                            <div className="bg-black rounded-md size-full p-4  overflow-auto">
                                <pre className='text-success my-3'><code>{`POST /api/users`}</code></pre>
                                <pre className='text-secondary'><code>{`#PAYLOAD`}</code></pre>
                                <pre className='text-white'><code>{`{`}</code></pre>
                                <pre className='text-blue-500'><code>{`  "name": "John Doe",`}</code></pre>
                                <pre className='text-yellow-500'><code>{`  "email": "john@example.com",`}</code></pre>
                                <pre className='text-violet-500'><code>{`  "age": "30",`}</code></pre>
                                <pre className='text-white'><code>{`}`}</code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="grow w-full card bg-primary/10 shadow-md rounded-md gap-3 p-6 text-sm md:text-md lg:text-lg">
                        <div className='flex justify-between'>
                            <div className='text-xl font-bold'>Search with pagination</div>
                            <div className='text-info bg-info/10 font-medium px-3 py-1 rounded-full'>GET</div>
                        </div>
                        <div className="bg-black rounded-md size-full p-4 overflow-auto">
                            <pre className='text-success my-3'><code>{`GET /api/users?search=john&page=1&limit=10`}</code></pre>
                            <pre className='text-white'><code>{`{`}</code></pre>
                            <pre className='text-white'><code>{`  "data": [...],`}</code></pre>
                            <pre className='text-white'><code>{`  "pagination": {`}</code></pre>
                            <pre className='text-yellow-500'><code>{`    "page": 1,`}</code></pre>
                            <pre className='text-yellow-500'><code>{`    "limit": 10,`}</code></pre>
                            <pre className='text-yellow-500'><code>{`    "total": 150`}</code></pre>
                            <pre className='text-white'><code>{`  }`}</code></pre>
                            <pre className='text-white'><code>{`}`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="card p-6 bg-primary/10 shadow-md">
                    <div className="flex gap-5  flex-wrap md:flex-nowrap">
                        <div className='grow w-full gap-5 flex flex-col'>
                            <p className="text-3xl font-bold">Comprehensive documentation</p>
                            <p className='text-xl max-w-3xl'>Get up and running quickly with our detailed guides, API references, and interactive examples. Everything you need to master ForgeMockAPI.</p>

                            <div className="flex flex-col gap-5 h-full">
                                <div className='flex gap-5'>
                                    <div className='p-3 shadow-md bg-info/10 text-info rounded-md items-center flex'><Rocket /></div>
                                    <div>
                                        <div className='font-bold text-xl'>Quick Start</div>
                                        <div>Get up and running in minutes with our step-by-step guide</div>
                                        <div className="flex gap-2 mt-3 link-info items-center link link-animated hover:text-base-content">Read Guide <ArrowRight size={16} /></div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='p-3 shadow-md bg-success/10 text-success rounded-md items-center flex'><Book /></div>
                                    <div>
                                        <div className='font-bold text-xl'>API Reference</div>
                                        <div>Complete reference for all endpoints and parameters</div>
                                        <div className="flex gap-2 mt-3 link-info items-center link link-animated hover:text-base-content">Browse API <ArrowRight size={16} /></div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='p-3 shadow-md bg-yellow-500/10 text-yellow-500 rounded-md items-center flex'><Puzzle /></div>
                                    <div>
                                        <div className='font-bold text-xl'>Integrations</div>
                                        <div>Connect with your favorite tools and frameworks</div>
                                        <div className="flex gap-2 mt-3 link-info items-center link link-animated hover:text-base-content">View Integrations<ArrowRight size={16} /></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='grow w-full'>
                            <div className="bg-black rounded-md size-full p-4 text-sm md:text-md lg:text-lg">
                                <pre className='text-secondary'><code>// Create a new user collection</code></pre>
                                <pre className='text-success my-3'><code>POST /api/users</code></pre>
                                <pre className='text-white'><code>{`{`}</code></pre>
                                <pre className='text-white'><code>{`  "name": "string",`}</code></pre>
                                <pre className='text-white'><code>{`  "email": "email",`}</code></pre>
                                <pre className='text-white'><code>{`  "age": "number",`}</code></pre>
                                <pre className='text-white'><code>{`  "avatar": "image"`}</code></pre>
                                <pre className='text-white'><code>{`}`}</code></pre>
                                <pre className='text-warning my-2'><code>✓ Collection created!</code></pre>
                                <pre className='text-secondary'><code>GET /api/users</code></pre>
                                <pre className='text-secondary'><code>POST /api/users</code></pre>
                                <pre className='text-secondary'><code>PUT /api/users/:id</code></pre>
                                <pre className='text-secondary'><code>DELETE /api/users/:id</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-5 mx-auto">
                    <button className="btn btn-primary max-w-md mx-auto px-6">View Full Documentation</button>
                </div>
            </div>
        </section>
    )
}