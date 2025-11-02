import { Clock, CreditCard, Rocket, TestTubeDiagonal } from "lucide-react";

export default function ReadyToSetup() {
    return (
        <section className="w-full [&>div]:max-w-7xl py-10 bg-primary/15">
            <div className='mx-auto gap-15 flex flex-col'>
                <div className='text-center px-4'>
                    <p className="md:text-5xl text-4xl max-w-2xl mx-auto font-bold m-10">Ready to Speed Up Your Development?</p>
                    <p className="md:text-xl max-w-2xl mx-auto">Join thousands of developers who are building faster with MockAPI. Create your first mock API in under 30 seconds.</p>
                </div>
                <div className='flex md:flex-row flex-col gap-4 justify-center items-center'>
                    <button className='btn hover:bg-white/75 bg-white shadow-2xs btn-xl text-primary border-0'>Start Building Free <Rocket /></button>
                    <div>or</div>
                    <button className='btn hover:bg-white hover:border-transparent border transition-all duration-100 hover:text-primary btn-outline shadow-2xs btn-xl'>See It In Action <TestTubeDiagonal /></button>
                </div>

                <div className='flex flex-wrap gap-5 justify-center'>
                    <div className='flex gap-2 items-center'><CreditCard size={20} />No credit card required</div>
                    <div className='flex gap-2 items-center'><Clock size={20} />Setup in 30 seconds</div>
                </div>
            </div>
        </section>
    )
}