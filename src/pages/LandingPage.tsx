import Header from '@/components/header'
import AppLogo from '@/components/logo'
import AppLayout from '@/layouts/app-layout'
import { ArrowRight, Book, ChartLine, Check, CheckCircle2, Clock, CreditCard, Database, Info, List, Play, Puzzle, Rocket, Search, Table, TestTubeDiagonal, X } from 'lucide-react'


export default function LandingPage() {
    return (
        <AppLayout>
            {/* Start:Header */}
            <Header />
            {/* End:Header */}

            {/* Start:Hero */}
            <section className="w-full [&>div]:max-w-7xl py-10 bg-primary/15 mt-18">
                <div className='mx-auto gap-5 flex flex-col'>
                    <div className='flex gap-3 justify-start'>
                        <div className='bg-secondary/5 backdrop-blur-md rounded-full px-2 pr-4 font-medium text-sm py-1 flex items-center gap-1 '>
                            <Info size={20} className='text-success font-bold' />New: Advance Analytic Dashboard</div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-6 grow text-left w-full'>
                            <div className='text-7xl font-bold'>Mock APIs Made <span className='text-info'>Simple</span></div>
                            <div className='text-3xl'>Create, customize, and deploy mock REST APIs in seconds. No backend required. Perfect for frontend development, prototyping, and testing.</div>
                            <div className='my-3'>
                                <button className='btn hover:bg-white/75 bg-white shadow-2xs btn-xl text-primary border-0'><Play size={16} />Start Building Free</button>
                            </div>
                            <div className='flex gap-x-5'>
                                <div className='flex gap-2 items-center'><CheckCircle2 size={20} />No credit card required</div>
                                <div className='flex gap-2 items-center'><CheckCircle2 size={20} />Setup in 30 seconds</div>
                            </div>
                        </div>
                        <div className='grow w-full flex items-center justify-center'>
                            <div className="mockup-browser w-full px-4 pb-4 bg-white/15 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <div className="mockup-browser-toolbar flex justify-between">
                                    <div >https://api.mock.com</div>
                                </div>
                                <div className="bg-black p-4 rounded-md ">
                                    <pre data-prefix="" className="text-success"><code>GET /api/users</code></pre>
                                    <pre><code className='text-white'>{`{`}</code></pre>
                                    <pre><code className='text-white'>{`  "data":[`}</code></pre>
                                    <pre><code className='text-white'>{`    {`}</code></pre>
                                    <pre><code className='text-blue-500'>{`      "id": 1,`}</code></pre>
                                    <pre><code className='text-amber-500'>{`      "name": "John Doe",`}</code></pre>
                                    <pre><code className='text-violet-600'>{`      "email": "john@example.com",`}</code></pre>
                                    <pre><code className='text-white'>{`    }`}</code></pre>
                                    <pre><code className='text-white'>{`  ]`}</code></pre>
                                    <pre><code className='text-white'>{`}`}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End:Hero */}

            {/* Start:Stats */}
            <section className="w-full [&>div]:max-w-7xl py-10">
                <div className='mx-auto gap-5 flex'>
                    <div className="bg-secondary/10 rounded-md grow p-6 text-center" >
                        <div className='text-accent text-3xl font-bold'>500K+</div>
                        <small className='font-medium'>APIs Created</small>
                    </div>
                    <div className="bg-secondary/10 rounded-md grow p-6 text-center" >
                        <div className='text-primary text-3xl font-bold'>50K+</div>
                        <small className='font-medium'>Active Developers</small>
                    </div>
                    <div className="bg-secondary/10 rounded-md grow p-6 text-center" >
                        <div className='text-info text-3xl font-bold'>99.9%</div>
                        <small className='font-medium'>Uptime</small>
                    </div>
                    <div className="bg-secondary/10 rounded-md grow p-6 text-center" >
                        <div className='text-success text-3xl font-bold'>24/7+</div>
                        <small className='font-medium'>Support</small>
                    </div>
                </div>
            </section>
            {/* End:Stats */}

            {/* Start:feature */}
            <section className="w-full [&>div]:max-w-7xl py-10 bg-secondary/10">
                <div className='mx-auto gap-6 flex flex-col'>
                    <div className='text-center mt-6'>
                        <p className="text-4xl font-bold m-4">Everything you need to mock APIs</p>
                        <p className='text-xl max-w-3xl mx-auto'>From simple CRUD operations to complex data relationships, ForgeMockAPI provides all the tools you need for rapid development and testing.</p>
                    </div>
                    <div className='flex flex-wrap gap-6 my-6'>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow w-1/4 p-6 gap-5'>
                            <div className='flex'>
                                <div className="rounded-xl p-4 bg-accent/10 text-accent">
                                    <Database />
                                </div>
                            </div>
                            <p className="text-3xl font-bold">CRUD Operations</p>
                            <p>Full Create, Read, Update, Delete functionality with automatic endpoint generation. Support for nested resources and custom validation rules.</p>
                            <div className='flex flex-col gap-3 justify-between'>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />GET, POST, PUT, DELETE methods</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Automatic data validation</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Custom response codes</div>
                            </div>
                        </div>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow w-1/4 p-6 gap-5'>
                            <div className='flex'>
                                <div className="rounded-xl p-4 bg-primary/10 text-primary">
                                    <Search />
                                </div>
                            </div>
                            <p className="text-3xl font-bold">Search & Filtering</p>
                            <p>Advanced search capabilities with multiple filter options, sorting, and full-text search across all your mock data collections.</p>
                            <div className='flex flex-col gap-3 justify-between'>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Multi-field filtering</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Range and date queries</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Full-text search</div>
                            </div>
                        </div>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow w-1/4 p-6 gap-5'>
                            <div className='flex'>
                                <div className="rounded-xl p-4 bg-info/10 text-info">
                                    <List />
                                </div>
                            </div>
                            <p className="text-3xl font-bold">CRUD Operations</p>
                            <p>Intelligent pagination with customizable page sizes, cursor-based pagination, and performance optimization for large datasets</p>
                            <div className='flex flex-col gap-3 justify-between'>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Offset & cursor pagination</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Custom page sizes</div>
                                <div className='flex items-center gap-1'><Check className='text-success' size={16} />Total count metadata</div>
                            </div>
                        </div>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow w-1/4 p-6 gap-5'>
                            <div className='flex'>
                                <div className="rounded-xl p-4 bg-success/10 text-success">
                                    <Table />
                                </div>
                            </div>
                            <p className="text-3xl font-bold">Mock Database Collections</p>
                            <p>Create structured data collections with relationships, constraints, and realistic data generation. Perfect for complex application testing scenarios.</p>
                            <div className='flex flex-wrap gap-3 justify-between'>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Schema validation</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Data relationships</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Auto-generated data</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Import/Export CSV</div>
                            </div>
                        </div>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow w-1/4 p-6 gap-5'>
                            <div className='flex'>
                                <div className="rounded-xl p-4 bg-indigo-500/10 text-indigo-500">
                                    <ChartLine />
                                </div>
                            </div>
                            <p className="text-3xl font-bold">API Analytics</p>
                            <p>Comprehensive analytics dashboard with request tracking, performance metrics, error monitoring, and usage insights for your mock APIs.</p>
                            <div className='flex flex-wrap gap-3 justify-between'>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Request analytics</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Performance metrics</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Error monitoring</div>
                                <div className='flex grow w-1/3 items-center gap-1'><Check className='text-success' size={16} />Usage reports</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End:feature */}

            {/* Start:3-simple-step */}
            <section className="w-full [&>div]:max-w-7xl py-10">
                <div className='mx-auto gap-6 flex flex-col'>
                    <div className='text-center'>
                        <p className="text-4xl font-bold m-4">Get started in 3 simple steps</p>
                        <p className="text-xl max-w-3xl mx-auto">From concept to fully functional mock API in minutes, not hours.</p>
                    </div>
                    <div className="card p-6 bg-primary/10 ">
                        <div className="flex gap-5">
                            <div className='grow w-full gap-5 flex flex-col'>
                                <p className="text-3xl font-bold">Create Collections in Minutes</p>
                                <p className='text-xl max-w-3xl'>Design your data structure with our intuitive schema builder. Define fields, relationships, and validation rules with a simple point-and-click interface.</p>

                                <div className="flex flex-col justify-between h-full">
                                    <ul className="relative flex h-full flex-col gap-y-2">
                                        <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                                            <div className="flex items-center justify-center gap-2.5 text-sm">
                                                <span className="bg-info/15 text-info size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
                                                    1
                                                </span>
                                                <div className="text-base-content block"><span>
                                                    <div className='font-bold'>Define Your Schema</div>
                                                    <div>Choose field types, set constraints, and define relationships</div>
                                                </span></div>
                                            </div>
                                            <div className="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
                                        </li>

                                        <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                                            <div className="flex items-center justify-center gap-2.5 text-sm">
                                                <span className="bg-indigo-500/15 text-indigo-500 size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
                                                    2
                                                </span>
                                                <div className="text-base-content block">
                                                    <span>
                                                        <div className='font-bold'>Generate Mock Data</div>
                                                        <div>Automatically populate your collections with realistic data using our smart generators</div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
                                        </li>

                                        <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                                            <div className="flex items-center justify-center gap-2.5 text-sm">
                                                <span className="bg-success/15 text-success size-7.5 flex shrink-0 items-center justify-center rounded-full text-sm font-medium" >
                                                    3
                                                </span>
                                                <div className="text-base-content block">
                                                    <span>
                                                        <div className='font-bold'>Start Using APIs</div>
                                                        <div>Get instant REST endpoints with full CRUD operations</div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-neutral/20 ms-3.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='grow w-full'>
                                <div className="bg-black rounded-md size-full p-4">
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
                </div>
            </section>
            {/* End:3-simple-step */}


            {/* Start:documents examples */}
            <section className="w-full [&>div]:max-w-7xl py-10 bg-secondary/10">
                <div className='mx-auto gap-6 flex flex-col'>
                    <div className='text-center'>
                        <p className="text-4xl font-bold m-4">Developer-friendly APIs</p>
                        <p className="text-xl max-w-2xl mx-auto">RESTful endpoints that follow industry standards with comprehensive documentation and examples.</p>
                    </div>
                    <div className="flex gap-5 size-full">
                        <div className="grow w-full card bg-primary/10 shadow-md rounded-md gap-3 p-6">
                            <div className='flex justify-between'>
                                <div className='text-xl font-bold'>Create a new user</div>
                                <div className='text-success bg-success/10 font-medium px-3 py-1 rounded-full'>POST</div>
                            </div>
                            <div>
                                <div className="bg-black rounded-md size-full p-4">
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
                        <div className="grow w-full card bg-primary/10 shadow-md rounded-md gap-3 p-6">
                            <div className='flex justify-between'>
                                <div className='text-xl font-bold'>Search with pagination</div>
                                <div className='text-info bg-info/10 font-medium px-3 py-1 rounded-full'>GET</div>
                            </div>
                            <div className="bg-black rounded-md size-full p-4">
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

                    <div className="my-10 mx-auto">
                        <button className="btn btn-primary max-w-md mx-auto px-6">View Full Documentation</button>
                    </div>

                    <div className="card p-6 bg-primary/10 shadow-md">
                        <div className="flex gap-5">
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
                                <div className="bg-black rounded-md size-full p-4">
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
                </div>
            </section>

            {/* Start:pricing */}
            <section className="w-full [&>div]:max-w-7xl py-10">
                <div className='mx-auto gap-6 flex flex-col'>
                    <div className='text-center'>
                        <p className="text-5xl max-w-2xl  mx-auto font-bold m-10">Simple, transparent pricing</p>
                        <p className="text-xl max-w-2xl mx-auto">Choose the plan that fits your needs. All plans include our core features with different usage limits.</p>
                    </div>
                    <div className='flex justify-bettween border border-secondary/20 rounded-full mx-auto p-1 [&>div.active]:font-bold'>
                        <div className="rounded-full px-6 py-2 btn btn-primary border-0 active">Monthly</div>
                        <div className="rounded-full px-6 py-2 btn btn-outline border-0">Annual (Save 20%)</div>
                    </div>
                    <div className="flex gap-5 justify-between my-6">
                        <div className="card bg-primary/10 p-6 grow hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 ">
                            <div className="flex flex-col gap-3">
                                <div className="text-2xl text-center font-bold">Free</div>
                                <div className="text-4xl text-center font-medium">$0</div>
                                <div className="text-center">Perfect for getting started</div>
                            </div>
                            <button className="btn btn-disabled m-4">Get Started Free</button>
                            <div className="flex flex-col gap-3 my-6">
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>1 Projects</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>3 Collections per project</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>3 Mock APIs per project</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>100 request/day</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Basic CRUD operations</p>
                                </div>
                                <div className="flex gap-3 items-center text-zinc-500">
                                    <X className='text-zinc-500' size={16} /><p>Advancded filtering & search</p>
                                </div>
                                <div className="flex gap-3 items-center text-zinc-500">
                                    <X className='text-zinc-500' size={16} /><p>Team collaborations</p>
                                </div>
                                <div className="flex gap-3 items-center text-zinc-500">
                                    <X className='text-zinc-500' size={16} /><p>Advanced analytics</p>
                                </div>
                            </div>
                        </div>
                        <div className="grow relative hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 ">
                            <div className="btn btn-primary btn-sm absolute -top-4 z-50 left-1/2 transform -translate-x-1/2 px-10 rounded-full">Most Popular</div>
                            <div className="card bg-primary/10 p-6  border border-primary ">
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl text-center font-bold">Standard</div>
                                    <div className="text-4xl text-center font-medium">$19<span className="text-sm text-zinc-400">/month</span></div>
                                    <div className="text-center">Perfect for getting started</div>
                                </div>
                                <button className="btn btn-primary m-4">Get Started Free</button>
                                <div className="flex flex-col gap-3 my-6">
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>5 Projects</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>10 Collections per project</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>10 Mock APIs per project</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>10,000 request/day</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>Basic CRUD operations</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>Advancded filtering & search</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Check className='text-success' size={16} /><p>Team collaborations (5 members)</p>
                                    </div>
                                    <div className="flex gap-3 items-center text-zinc-500">
                                        <X className='text-zinc-500' size={16} /><p>Advanced analytics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-primary/10 p-6 grow hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 ">
                            <div className="flex flex-col gap-3">
                                <div className="text-2xl text-center font-bold">Pro</div>
                                <div className="text-4xl text-center font-medium">$49<span className="text-sm text-zinc-400">/month</span></div>
                                <div className="text-center">Perfect for getting started</div>
                            </div>
                            <button className="btn btn-primary m-4">Get Started Free</button>
                            <div className="flex flex-col gap-3 my-6">
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Unlimited projects</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>3 Collections per project</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>3 Mock APIs per project</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>100 request/day</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Basic CRUD operations</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Advancded filtering & search</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Team collaborations</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Check className='text-success' size={16} /><p>Advanced analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End:pricing */}

            {/* Start:Ready-to-develop */}
            <section className="w-full [&>div]:max-w-7xl py-10 bg-primary/15">
                <div className='mx-auto gap-15 flex flex-col'>
                    <div className='text-center'>
                        <p className="text-5xl max-w-2xl  mx-auto font-bold m-10">Ready to Speed Up Your Development?</p>
                        <p className="text-xl max-w-2xl mx-auto">Join thousands of developers who are building faster with MockAPI. Create your first mock API in under 30 seconds.</p>
                    </div>
                    <div className='flex gap-4 justify-center items-center'>
                        <button className='btn hover:bg-white/75 bg-white shadow-2xs btn-xl text-primary border-0'>Start Building Free <Rocket /></button>
                        or
                        <button className='btn hover:bg-white hover:border-transparent border transition-all duration-100 hover:text-primary btn-outline shadow-2xs btn-xl'>See It In Action <TestTubeDiagonal /></button>
                    </div>

                    <div className='flex gap-x-5 justify-center'>
                        <div className='flex gap-2 items-center'><CreditCard size={20} />No credit card required</div>
                        <div className='flex gap-2 items-center'><Clock size={20} />Setup in 30 seconds</div>
                    </div>
                </div>
            </section>
            {/* End:Ready-to-develop */}

            {/* Start:documents examples */}
            <footer className="w-full [&>div]:max-w-7xl py-10 bg-black/10">
                <div className='mx-auto gap-6 flex flex-col'>
                    <div className="[&>div]:grow [&>div]:w-full [&>div.app-logo-note]:min-w-xl flex">
                        <div className='app-logo-note'>
                            <AppLogo className="mb-2 font-bold text-md" />
                            <p>The fastest way to create, customize, and deploy mock REST APIs. Trusted by developers worldwide for rapid prototyping and testing.</p>
                        </div>
                        <div className='flex justify-end gap-6'>
                            <div className='gap-1 flex flex-col'>
                                <p className="mb-2 font-bold text-md">Product</p>
                                <p className="link link-animated hover:text-base-content">Features</p>
                                <p className="link link-animated hover:text-base-content">Pricing</p>
                                <p className="link link-animated hover:text-base-content">API Reference</p>
                                <p className="link link-animated hover:text-base-content">Changelog</p>
                            </div>
                            <div className='gap-1 flex flex-col'>
                                <p className="mb-2 font-bold text-md">Resources</p>
                                <p className="link link-animated hover:text-base-content">Documentation</p>
                                <p className="link link-animated hover:text-base-content">Demo</p>
                                {/* <p className="link link-animated hover:text-base-content">Blog</p>
                                <p className="link link-animated hover:text-base-content">Community</p> */}
                            </div>
                            {/* <div className='gap-1 flex flex-col'>
                            <p className="mb-2 font-bold text-md">Company</p>
                            <p className="link link-animated hover:text-base-content">About</p>
                            <p className="link link-animated hover:text-base-content">Contact</p>
                            <p className="link link-animated hover:text-base-content">Privacy</p>
                            <p className="link link-animated hover:text-base-content">Terms</p>
                        </div> */}
                        </div>
                    </div>
                    <div className='border-t border-zinc-700/50 py-6 flex justify-between'>
                        <p className='text-secondary'>© 2024 ForgeMockAPI All rights reserved.</p>
                        <p className='text-secondary'>Status: All systems operational</p>
                    </div>
                </div>
            </footer>
        </AppLayout>
    )
}