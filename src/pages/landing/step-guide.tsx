export default function StepGuide() {
    return (

        <section className="w-full [&>div]:max-w-7xl py-10">
            <div className='mx-auto gap-6 flex flex-col'>
                <div className='text-center px-2'>
                    <p className="text-4xl font-bold m-4">Get started in 3 simple steps</p>
                    <p className="text-xl max-w-3xl mx-auto">From concept to fully functional mock API in minutes, not hours.</p>
                </div>
                <div className="card p-6 bg-primary/10 ">
                    <div className="flex gap-5 flex-wrap md:flex-nowrap">
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
                        <div className='grow w-full text-sm md:text-md lg:text-lg'>
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
    )
}