export default function AppStats() {
    return (
        <section className="w-full [&>div]:max-w-7xl py-10">
            <div className='mx-auto gap-5 flex flex-wrap p-5'>
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
    )
}