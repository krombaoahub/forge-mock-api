
import AppLayout from '@/layouts/app-layout'
import HeroSection from './hero-section'
import AppStats from './app-stats'
import Features from './features'
import StepGuide from './step-guide'
import SampleDocuments from './sample-documents'
import { Pricing } from '@/components/pricing'
import ReadyToSetup from './ready-to-setup'


export default function LandingPage() {
    return (
        <AppLayout>
            {/* Start:Header */}
            {/* <Header goto={handleGotoSection} /> */}
            {/* End:Header */}

            {/* Start:Hero */}
            <HeroSection />
            {/* End:Hero */}

            {/* Start:Stats */}
            <AppStats />
            {/* End:Stats */}

            {/* Start:feature */}
            <section id="featureRef">
                <Features />
            </section>
            {/* End:feature */}

            {/* Start:3-simple-step */}
            <StepGuide />
            {/* End:3-simple-step */}

            {/* Start:documents examples */}
            <section id="documentationRef">
                <SampleDocuments />
            </section>
            {/* End:documents examples */}

            {/* Start:pricing */}
            <section id="pricingRef">
                <Pricing />
            </section>
            {/* End:pricing */}

            {/* Start:Ready-to-develop */}
            <ReadyToSetup />
            {/* End:Ready-to-develop */}
        </AppLayout>
    )
}