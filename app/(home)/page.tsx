import Head from 'next/head';
import Footer from '@/components/home/Footer';
import TestimonialsSection from '@/components/home/TestimonialSection';
import ContactForm from '@/components/home/ContactForm';
import HeroSection from '@/components/home/HeroSection';




export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">  
     <Head>
        <title>FutureShujaa - Empowering Students with Tech Skills</title>
        <meta
          name="description"
          content="An E-learning platform to provide tech skills to students in informal settlements in Kenya."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
     <HeroSection/>
     
  

      <main className="p-8">
     
      <section className="py-8 md:py-12 bg-white">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 order-2 md:order-1">

      <h2 className="text-3xl font-semibold text-shujaa  hover:text-shujaa-dark transition duration-300 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        FutureShujaa is an innovative e-learning platform designed to deliver tech skills
        training to students in informal settlements across Kenya. Our mission is to bridge
        the digital literacy gap and empower underserved communities with tools for economic
        and social advancement.
      </p>
    </div>
 


     {/* Image */}
     <div className="w-full md:w-1/2 order-1 md:order-2">
        <img
          src="/kenya.jpeg"
          alt="Kenya"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>

<section className="py-8 md:py-12 bg-white">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Image - Mobile first */}
      <div className="w-full md:w-1/2 order-1">
        <img
          src="/robot.jpeg"
          alt="Robot"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 order-2 md:order-2">
        <h2 className="text-xl md:text-3xl font-semibold text-shujaa mb-4 md:mb-6">
          Our Vision
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
          To create an equitable society by enabling access to quality digital education and
          reducing youth unemployment through scalable, interactive e-learning solutions.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-8 md:py-12 bg-white">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Text Content */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-xl md:text-3xl font-semibold text-shujaa mb-4 md:mb-6">
          Our Objectives
        </h2>
        <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 pl-4 md:pl-6">
          <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-shujaa before:rounded-full">
            Empower students in informal settlements with market-relevant digital skills.
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-shujaa before:rounded-full">
            Bridge the gap caused by teacher shortages and outdated educational resources.
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <img
          src="/lion.jpeg"
          alt="Lion"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>

    <TestimonialsSection />
    <ContactForm />
  </main>
      <Footer />

    </main>
  );
}

