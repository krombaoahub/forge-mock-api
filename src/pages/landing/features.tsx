import { ChartLine, Check, Database, List, Search, Table } from "lucide-react";

export default function Features(){
    return (
            <section className="w-full [&>div]:max-w-7xl py-10 bg-secondary/10">
                <div className='mx-auto gap-6 flex flex-col p-4'>
                    <div className='text-center mt-6'>
                        <p className="text-4xl font-bold m-4">Everything you need to mock APIs</p>
                        <p className='text-xl max-w-3xl mx-auto'>From simple CRUD operations to complex data relationships, ForgeMockAPI provides all the tools you need for rapid development and testing.</p>
                    </div>
                    <div className='flex flex-wrap gap-6 my-6'>
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow md:w-1/3 lg:w-1/4 p-6 gap-5'>
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
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow md:w-1/3 lg:w-1/4 p-6 gap-5'>
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
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow md:w-1/3 lg:w-1/4 p-6 gap-5'>
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
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow md:w-1/3 lg:w-1/4 p-6 gap-5'>
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
                        <div className='hover:shadow-2xl hover:-translate-y-[15px] transition-all duration-300 card shadow-xl border border-secondary/15 grow md:w-1/3 lg:w-1/4 p-6 gap-5'>
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
            </section>)
}