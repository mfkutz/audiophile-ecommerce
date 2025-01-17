import Buying from '@/components/Buying'
import Footer from '@/components/Footer'

export default function Checkout() {
    return (
        <>
            <section className=' bg-gray-100 pt-[150px] pb-[120px] '>
                <Buying />
            </section>
            <section className='flex-1 bg-black-esp px-5'>
                <Footer />
            </section>
        </>
    )
}
